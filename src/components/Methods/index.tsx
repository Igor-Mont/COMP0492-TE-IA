import ChatPdfLogo from "../../assets/chat_pdf_logo.png";
import BingLogo from "../../assets/bing_logo.png";

interface ChatMessage {
  owner: string;
  description: string;
  avatar_url?: string;
  time: string;
  left_talker: boolean;
  status: "Entregue" | "Vista";
}

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
];

function Methods(): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full">
        <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row mb-5">
          <div className="xsm:w-9/12 md:w-3/5">
            <h1 className="text-info" style={{ margin: 0 }}>
              Visão geral sobre IA
            </h1>
          </div>
        </article>
        {messagesOverviewIA.map((message) => {
          const classesChat = `chat ${
            message.left_talker ? "chat-start" : "chat-end"
          }`;
          return (
            <div className={classesChat}>
              {message.avatar_url && (
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Imagem do proprietário da mensagem."
                      src={message.avatar_url}
                    />
                  </div>
                </div>
              )}
              <div className="chat-header">
                {message.owner}
                <time className="ml-1 text-xs opacity-50">{message.time}</time>
              </div>
              <div className="chat-bubble">{message.description}</div>
              <div className="chat-footer opacity-50">{message.status}</div>
            </div>
          );
        })}
        {/* <div className="w-full">

        </div> */}
      </div>
      <div className="divider">
        <img width={80} height={80} src={ChatPdfLogo} alt="Chat pdf logo" />
        <img width={200} height={100} src={BingLogo} alt="Bing logo" />
      </div>
    </div>
  );
}

export { Methods };
