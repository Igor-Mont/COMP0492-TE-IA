import { ChatMessage } from "../../../models";

const messagesDashboard: ChatMessage[] = [
  {
    owner: "Professor",
    description:
      'Como vocês implementaram a seção "Desempenho de algoritmos de IA?',
    left_talker: true,
    time: "19:20",
    status: "Entregue",
  },
  {
    owner: "Aluno",
    description:
      "Utilizamos primeiramente o ChatGPT para nos gerar uma estrutura básica de dashboard, a partir de um artigo que tiramos exemplos de planilhas contendo desempenhos de diversos algoritmos de IA (https://chat.openai.com/share/f3dc9760-e42c-4eae-be91-4194cd4dac93).",
    left_talker: false,
    time: "19:21",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Após isso, geramos algumas descrições para complementarmos a seção, como siglas e abreviações, ainda no chatgpt.",
    left_talker: false,
    time: "19:21",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "E para finalizar criamos a responsividade do dashboard e ajustamos o estilo.",
    left_talker: false,
    time: "19:22",
    status: "Vista",
  }
];

export { messagesDashboard };
