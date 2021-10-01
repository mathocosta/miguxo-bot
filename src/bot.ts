import { APIGatewayEvent } from "aws-lambda";
import { Telegraf } from "telegraf";
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

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(token);

// BOT SETUP

bot.on("inline_query", async (ctx) => {
  const textToParse = ctx.inlineQuery.query;

  if (isEmpty(textToParse)) return;

  const inlineQueryResults = [
    getInlineQueryResult(textToParse, Dialect.ICQ),
    getInlineQueryResult(textToParse, Dialect.MSN),
    getInlineQueryResult(textToParse, Dialect.Orkut),
  ];

  return ctx.answerInlineQuery(inlineQueryResults);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

// NETLIFY

export async function handler(event: APIGatewayEvent) {
  if (event.body != undefined) {
    bot.handleUpdate(JSON.parse(event.body));
  }

  return {
    statusCode: 200,
    body: "",
  };
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
