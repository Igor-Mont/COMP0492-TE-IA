import { ChatMessage } from "../../../models";

const messagesOverviewIA: ChatMessage[] = [
  {
    owner: "Professor",
    description:
      'Como vocês implementaram a seção "Visão geral sobre IA" do website?',
    left_talker: true,
    time: "19:10",
    status: "Entregue",
  },
  {
    owner: "Aluno",
    description:
      "Utilizamos primeiramente o ChatPDF para resumir o PDF informado na seção e a partir dele fizemos 4 perguntas baseadas no PDF e assim foram colocadas no website.",
    left_talker: false,
    time: "19:11",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Fizemos 4 perguntas baseadas no PDF e assim foram colocadas no website.",
    left_talker: false,
    time: "19:11",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Geramos as imagens das perguntas usando a IA Generativa do Bing.",
    left_talker: false,
    time: "19:11",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Baseado em conhecimentos básicos de Front-End construímos a interface.",
    left_talker: false,
    time: "19:11",
    status: "Vista",
  },
  {
    owner: "Professor",
    description: "E o vídeo intuitivo, como foi feito?",
    left_talker: true,
    time: "19:12",
    status: "Entregue",
  },
  {
    owner: "Aluno",
    description: "Usamos o Steve AI para gerar o vídeo com cenas.",
    left_talker: false,
    time: "19:13",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Antes de gerar as cenas, utilizamos o ChatGPT para gerar as frases de cada cena baseado nos textos da seção (https://chat.openai.com/share/bcdabcdf-87a1-4c32-8910-12d55df47e33). E assim conseguimos gerar o vídeo.",
    left_talker: false,
    time: "19:13",
    status: "Vista",
  },
];

export { messagesOverviewIA };
