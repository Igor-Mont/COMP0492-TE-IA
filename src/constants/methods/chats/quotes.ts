import { ChatMessage } from "../../../models";

const messagesQuotes: ChatMessage[] = [
  {
    owner: "Professor",
    description:
      'Como vocês implementaram a seção "Reflexões sobre a IA" do website?',
    left_talker: true,
    time: "19:15",
    status: "Entregue",
  },
  {
    owner: "Aluno",
    description:
      "Utilizamos primeiramente o ChatGPT para nos dar reflexões famosas sobre IA (https://chat.openai.com/share/2047efe1-6bda-45e2-8854-6d4748a888bc). Em seguida pedimos, em outro chat, para que ele traduzisse para porguês e espanhol (https://chat.openai.com/share/5dee787c-ddc0-4dda-ae59-51c4af912fab).",
    left_talker: false,
    time: "19:16",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Após isso, convertemos o texto através do ll Eleven Labs para uma voz padrão.",
    left_talker: false,
    time: "19:16",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      "Com esse áudio padrão em mãos, utilizamos o FineShare para trasnformar essa voz na voz do Elon Musk e do Stephen Hawking.",
    left_talker: false,
    time: "19:16",
    status: "Vista",
  },
  {
    owner: "Aluno",
    description:
      'Daí quando finalmente fizemos o download desse áudio "original", usamos o VoCloner na v2 para fazer a transformação vocal para português e espanhol.',
    left_talker: false,
    time: "19:16",
    status: "Vista",
  },

  {
    owner: "Aluno",
    description:
      "Vale lembrar que os áudios em português e espanhol estão limitadas a 200 caracteres pois é o que a plataforma do VoCloner nos proporciona gratuitamente.",
    left_talker: false,
    time: "19:16",
    status: "Vista",
  },
];

export { messagesQuotes };
