import { APIGatewayEvent } from "aws-lambda";
import TeleBot from "telebot";
import { InlineQueryResultArticle } from "typegram";
import { v4 as uuidv4 } from "uuid";
import {
  general,
  notICQ,
  notOrkut,
  onlyICQ,
  onlyMSN,
  onlyOrkut,
  Operation,
} from "./operations";
import { VercelRequest, VercelResponse } from "@vercel/node";

const token = process.env.BOT_TOKEN;

if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}

const newBot = new TeleBot(token);

// BOT SETUP

newBot.on("inlineQuery", (msg) => {
  const textToParse = msg?.query;

  if (isEmpty(textToParse)) return;

  const inlineQueryResults = [
    getInlineQueryResult(textToParse, Dialect.ICQ),
    getInlineQueryResult(textToParse, Dialect.MSN),
    getInlineQueryResult(textToParse, Dialect.Orkut),
  ];

  const answers = newBot.answerList(msg.id);

  inlineQueryResults.forEach((r) => answers.addArticle(r));

  return newBot.answerQuery(answers);
});

newBot.start();

// Enable graceful stop
process.once("SIGINT", () => newBot.stop("SIGINT"));
process.once("SIGTERM", () => newBot.stop("SIGTERM"));

// NETLIFY

export async function handler(event: APIGatewayEvent) {
  if (event.body != undefined) {
    try {
      await newBot.receiveUpdates(JSON.parse(event.body));
    } catch (e) {
      console.error(e);
    }
  }

  return {
    statusCode: 200,
    body: "",
  };
}

// VERCEL

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    await newBot.receiveUpdates(JSON.parse(req.body));
  } catch (err) {
    console.error(err);
  }

  res.send({ "status": "Running" });
}

// TEXT PROCESSING

enum Dialect {
  ICQ = "ICQ",
  MSN = "MSN",
  Orkut = "Orkut",
}

const isEmpty = (str: string): boolean => !str || /^\s*$/.test(str);

const getInlineQueryResult = (
  text: string,
  dialectType: Dialect
): InlineQueryResultArticle => {
  const formattedText = format(text, dialectType);

  return {
    type: "article",
    id: uuidv4(),
    title: `Versão ${dialectType}`,
    description: formattedText,
    input_message_content: {
      message_text: formattedText,
    },
  };
};

const format = (text: string, dialectType: Dialect): string => {
  let formattedText = text;

  const operationSet = getOperationSetFor(dialectType);
  const iterationCallback = (op: Operation) => {
    formattedText = formattedText.replace(op.regex, op.replacement);
  };
  operationSet.forEach(iterationCallback);

  formattedText = formattedText.toLowerCase();

  return formattedText;
};

const getOperationSetFor = (dialectType: Dialect): Operation[] => {
  switch (dialectType) {
    case Dialect.ICQ:
      return general.concat(onlyICQ, notOrkut);

    case Dialect.MSN:
      return general.concat(onlyMSN, notOrkut, notICQ);

    case Dialect.Orkut:
      return general.concat(onlyOrkut, notICQ);

    default:
      return general;
  }
};
