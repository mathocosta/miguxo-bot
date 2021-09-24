export type Operation = {
    regex: RegExp;
    replacement: string;
}

export const general: Operation[] = [
    // Números
    { regex: /\buma?\b/gi, replacement: '1' },
    { regex: /\b(dois|duas)\b/gi, replacement: '2' },
    { regex: /\btrês\b/gi, replacement: '3' },
    { regex: /\bquatro\b/gi, replacement: '4' },
    { regex: /\bcinco\b/gi, replacement: '5' },
    { regex: /\bseis\b/gi, replacement: '6' },
    { regex: /\bsete\b/gi, replacement: '7' },
    { regex: /\boito\b/gi, replacement: '8' },
    { regex: /\bnove\b/gi, replacement: '9' },
    { regex: /\bdez\b/gi, replacement: '10' },
    { regex: /\bonze\b/gi, replacement: '11' },
    { regex: /\bdoze\b/gi, replacement: '12' },
    { regex: /\btreze\b/gi, replacement: '13' },
    { regex: /\b(c|qu)atorze\b/gi, replacement: '14' },
    { regex: /\bquinze\b/gi, replacement: '15' },
    { regex: /\bdezesseis\b/gi, replacement: '16' },
    { regex: /\bdezessete\b/gi, replacement: '17' },
    { regex: /\bdezoito\b/gi, replacement: '18' },
    { regex: /\bdezenove\b/gi, replacement: '19' },
    // Repetições
    { regex: /\b([0-9]+) vez(es)?\b/gi, replacement: '$1x' },
    // Horas, minutos
    { regex: /\b(\d+) horas?\b/gi, replacement: '$1h' },
    { regex: /\b(\d+) minutos?\b/gi, replacement: '$1min' },
    { regex: /\b(\d+) segundos?\b/gi, replacement: '$1s' },
    // Dias da semana
    { regex: /\bsegunda-feira\b/gi, replacement: '2a' },
    { regex: /\bterça-feira\b/gi, replacement: '3a' },
    { regex: /\bquarta-feira\b/gi, replacement: '4a' },
    { regex: /\bquinta-feira\b/gi, replacement: '5a' },
    { regex: /\bsexta-feira\b/gi, replacement: '6a' },
    // Símbolos
    { regex: /\baté mais\b/gi, replacement: 't+' },
    { regex: /\bdemais\b/gi, replacement: 'd+' },
    { regex: /\bmais ou menos\b/gi, replacement: '+-' },
    { regex: /\bmais\b/gi, replacement: '+' },
    { regex: /\bmenos\b/gi, replacement: '-' },
    { regex: /\bmei[ao]\b/gi, replacement: '1/2' },
    // Abreviações simples
    { regex: /\bpor\s?qu[eê]/gi, replacement: 'pq' },
    { regex: /\bhoje\b/gi, replacement: 'hj' },
    { regex: /\btambém\b/gi, replacement: 'tb' },
    { regex: /\bbeleza\b/gi, replacement: 'blz' },
    { regex: /\bfirmeza\b/gi, replacement: 'fmz' },
    { regex: /\bquando\b/gi, replacement: 'qdo' },
    { regex: /\bquant([ao])(s?)\b/gi, replacement: 'qt$1$2' },
    { regex: /\bmuit([ao])(s?)\b/gi, replacement: 'mt$1$2' },
    { regex: /\bbeij(o|ão)\b/gi, replacement: 'bj$1' },
    { regex: /\bbeijos\b/gi, replacement: 'bjs' },
    // Glossário
    { regex: /\btecl(e|ar|ou|amos)\b/gi, replacement: 'tc' },
    { regex: /\binternet\b/gi, replacement: 'net' },
    { regex: /\be-?mail(s?)\b/gi, replacement: 'meio$1' },
    { regex: /\b(grana|dinheiro)\b/gi, replacement: '$$$$$$' }, // $
    // tou, tava, tar
    { regex: /\best(ar|ou|ava|ive|aria|ão)\b/gi, replacement: 't$1' },
    { regex: /\bestá([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'tah$1' },
    // para
    { regex: /\bpara ([ao]s?)\b/gi, replacement: 'pr$1' },
    { regex: /\bpara([^\wáéíóúàâêôãõüç-]|$)/gi, replacement: 'pra$1' },
    // Simplifiq: irmos -> ir, acabou -> cabou
    { regex: /([aei]r)mos\b/gi, replacement: '$1' },
    { regex: /\bacab/gi, replacement: 'cab' },
    // ei -> i (alguns casos) deixa -> dexa
    { regex: /eix/gi, replacement: 'ex' },
    // Acento no final eh moh uoh
    { regex: /á([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'ah$1' },
    { regex: /é([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'eh$1' },
    { regex: /í([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'ih$1' },
    { regex: /ó([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'oh$1' },
    { regex: /ú([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'uh$1' },
    // Acentuação? Nunca.
    { regex: /[áàâãä]/gi, replacement: 'a' },
    { regex: /[éèêë]/gi, replacement: 'e' },
    { regex: /[íìîï]/gi, replacement: 'i' },
    { regex: /[óòôõö]/gi, replacement: 'o' },
    { regex: /[úùûü]/gi, replacement: 'u' },
]

export const onlyICQ: Operation[] = [
    { regex: /\bcom([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'c/$1' },
    { regex: /\bque\b/gi, replacement: 'q' },
    { regex: /\bvocê/gi, replacement: 'vc' },
    { regex: /\be-?mail(s?)\b/gi, replacement: 'mail$1' },
    { regex: /[ç]/gi, replacement: 'c' },
    { regex: /\b(he|ha|hi|ho|hua){2,}h?\b/gi, replacement: 'rsrsrs' },
    { regex: /!/g, replacement: '!!' },
    { regex: /\?/g, replacement: '??' },
    { regex: /[ç]/gi, replacement: 'c' },
]

export const notICQ: Operation[] = [
    // Abreviações avançadas
    { regex: /\bmesm[ao](s?)\b/gi, replacement: 'msm$1' },
    { regex: /\bdepois\b/gi, replacement: 'dpois' },
    { regex: /\bquem\b/gi, replacement: 'qm' },
    { regex: /\bcomigo\b/gi, replacement: 'cmg' },
    { regex: /\bcadê/gi, replacement: 'kd' },
    { regex: /\bqualquer\b/gi, replacement: 'qq' },
    { regex: /\bfalou\b/gi, replacement: 'flw' },
    { regex: /\bvaleu\b/gi, replacement: 'vlw' },
    { regex: /\btchau\b/gi, replacement: 'xau' },
    // entaum, naum
    { regex: /ão\b/gi, replacement: 'aum' },
    // andando -> andano, comendo -> comeno (depois fica melhor: andanu, comenu)
    { regex: /(\w[aei])ndo\b/gi, replacement: '$1no' },
    // tada$ -> tadeenha (e alguns outros casos), foto -> foteenha, gatinha -> gateenha
    { regex: /(\w[crt]ad)([ao])\b/gi, replacement: '$1eenh$2' },
    { regex: /foto(s?)\b/gi, replacement: 'foteenha$1' },
    { regex: /(\w)tinh([ao])\b/gi, replacement: '$1teenh$2' },
    // CH, SH e QU não existem
    { regex: /ch/gi, replacement: 'x' },
    { regex: /sh/gi, replacement: 'x' },
    { regex: /qu/gi, replacement: 'k' },
    // e -> i (alguns casos)
    { regex: /(\w(ss|[cdgtv]))e(s?)m?\b/gi, replacement: '$1i$3' },
    { regex: /\bseg/gi, replacement: 'sig' },
    { regex: /\bdes([^s])/gi, replacement: 'dis$1' },
    // o -> u (alguns casos)
    { regex: /\bbonit/gi, replacement: 'bunit' },
    // e sozinho -> i
    { regex: /\be\b/gi, replacement: 'i' },
    { regex: /[ç]/gi, replacement: 'ss' },
    // l$ -> u
    { regex: /(\w[a-z])l\b/gi, replacement: '$1u' },
    // amo -> amu, todo -> todu (plural também)
    { regex: /o(s?)\b/gi, replacement: 'u$1' },
    { regex: /\b(\d+)u\b/gi, replacement: '$1o' }, // fix 1u > 1o (primeiro)
    { regex: /\bou(\w)/gi, replacement: 'o$1' },
    { regex: /(\w)ou(\w)/gi, replacement: '$1o$2' },
    // ^c -> k (exceções: certo,cidade,c)
    { regex: /\bc([^ei\W])/gi, replacement: 'k$1' },
    // andar -> andah, comer -> come, sentir -> senti
    { regex: /ar\b/gi, replacement: 'ah' },
    { regex: /er\b/gi, replacement: 'e' },
    { regex: /ir\b/gi, replacement: 'i' },
    // eira$ -> era  (sonzera, ladera)
    { regex: /eira\b/gi, replacement: 'era' },
    // sa$ -> za, casa -> caza
    { regex: /([^s\W])sa\b/gi, replacement: '$1za' },
    // TODO muZica e assemelhados
    // Certas palavras não precisam de plural (mmmmm, deixe quieto)
    // t = t.replace(/(dia)s\b/gi,			'$1');
    // Somente um ponto final é muito pouco
    { regex: /\./g, replacement: '......' },
    // Pra que vírgula? Pontos são mais legais... vários...
    { regex: /, /g, replacement: '...' },
    { regex: /,(\n|$)/g, replacement: '...$1' },
    { regex: /!/g, replacement: '!!!!!' },
    { regex: /\?/g, replacement: '??!?!' },
]

export const onlyMSN: Operation[] = [
    { regex: /\bque\b/gi, replacement: 'ke' },
    { regex: /\bvocês\b/gi, replacement: '6' },
    { regex: /\bvocê/gi, replacement: 'vc' }, // c fica estranho em kd c?
    // No MSN o som da letra vira a palavra
    { regex: /\bse\b/gi, replacement: 'c' },
    { regex: /\bde\b/gi, replacement: 'd' },
    { regex: /\bte\b/gi, replacement: 't' },
    { regex: /\bpr[ao]([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'p$1' },
    // ou -> o (se for parte de palavra)
    { regex: /(\w)ou\b/gi, replacement: '$1o' }, // bug: 2)sol>sou>so
    { regex: /\b(he|ha|hi|ho|hua|rs){2,}h?\b/gi, replacement: 'huahuahua' },
    { regex: /[8:][-o]?[D)]/g, replacement: 'huahuahua' },
    { regex: /\badicion/gi, replacement: 'adde' }, // Tou t addeando
    { regex: /\bamig([ao])\b/gi, replacement: 'mig$1' }, // miga
    { regex: /\blind([ao])\b/gi, replacement: 'leend$1' }, // leenda
    { regex: /\bnovidade(s?)\b/gi, replacement: '9dad$1' },
    { regex: /\b[uo]w[uo]\b/gi, replacement: 'O_o' }
]

export const onlyOrkut: Operation[] = [
    { regex: /\bcom([^\wáéíóúàâêôãõüç]|$)/gi, replacement: 'cum$1' },
    { regex: /\bque\b/gi, replacement: 'ki' },
    { regex: /\b(adoro você|te adoro)/gi, replacement: 'adoluxê' },
    { regex: /\bamo vocês\b/gi, replacement: 'amodolu vocês' },
    { regex: /\b(amo você|te amo)/gi, replacement: 'te amodolu' },
    { regex: /\bvocê/gi, replacement: 'vuxê' },
    { regex: /\badicion[\wáí]+/gi, replacement: 'add' }, // Tou t add
    { regex: /\bamig([ao]s?)\b/gi, replacement: 'migux$1' }, // miguxa
    { regex: /\blind([ao]s?)\b/gi, replacement: 'lindux$1' }, // linduxa
    { regex: /\bfof([ao]s?)\b/gi, replacement: 'fofux$1' }, // fofuxa
    { regex: /\bdormir\b/gi, replacement: 'mimir' },
    { regex: /\bnome(s?)\b/gi, replacement: 'nominho$1' },
    { regex: /\besposa\b/gi, replacement: 'marida' },
    { regex: /\b(de novo|novamente)\b/gi, replacement: 'dinovo' },
    { regex: /\b(aliás|por exemplo)\b/gi, replacement: 'tipo assim' },
    { regex: /(\w)ou\b/gi, replacement: '$1ow' }, // Orkut
    { regex: /\b(he|ha|hi|ho|hua|rs){2,}h?\b/gi, replacement: 'kkkkkkkkkkk' },
    { regex: /[8:][-o]?[D)]/g, replacement: 'kkkkkkkkkkk' },
    // No Orkut é mais fófi terminar em i
    { regex: /\bse\b/gi, replacement: 'si' },
    { regex: /\bde\b/gi, replacement: 'di' },
    { regex: /\bte\b/gi, replacement: 'ti' },
    // E uns ajustes finais para ficar ainda mais fofuxu
    { regex: /x/gi, replacement: 'xXx' },
    { regex: /ss/gi, replacement: 'XX' },
    // inglês -> ingleix
    { regex: /ês\b/gi, replacement: 'eix' },
    // atrás -> atraix
    { regex: /(\w)(ás|az)\b/gi, replacement: '$1aix' },
    // ou -> o (se for parte de palavra)
    { regex: /(\w)ou\b/gi, replacement: '$1ow' }, // Orkut
    // O abominável X no fim das palavras no plural
    { regex: /([^\Ws])s\b/gi, replacement: '$1x' },
    // O abominável H no fim de certas palavras
    { regex: /(\w)a\b/gi, replacement: '$1ah' },
    { regex: /\bvergonh(a|ah)\b/gi, replacement: 'vergonhah >___<'}
]

export const notOrkut: Operation[] = [
    { regex: /\b(\d+) segundos?\b/gi, replacement: '$1s' }, // ! 2x
    // Ordinais
    { regex: /\bprimeir([ao])\b/gi, replacement: '1$1' },
    { regex: /\bsegund([ao])\b/gi, replacement: '2$1' },
    { regex: /\bterceir([ao])\b/gi, replacement: '3$1' },
    { regex: /\bquart([ao])\b/gi, replacement: '4$1' },
    { regex: /\bquint([ao])\b/gi, replacement: '5$1' },
    { regex: /\bsext([ao])\b/gi, replacement: '6$1' },
    { regex: /\bsétim([ao])\b/gi, replacement: '7$1' },
    { regex: /\boitav([ao])\b/gi, replacement: '8$1' },
    { regex: /\bnon([ao])\b/gi, replacement: '9$1' },
    { regex: /\bdécim([ao])\b/gi, replacement: '10$1' },
    // Abreviações não miguxas
    { regex: /\bfi(m|nal) de semana\b/gi, replacement: 'fds' },
]