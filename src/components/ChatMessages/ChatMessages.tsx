import { ReactNode } from "react";
import { ChatMessage } from "../../models";

interface ChatMessagesProps {
  messages: ChatMessage[];
  title: string;
  children: ReactNode;
}

function ChatMessages({
  messages,
  title,
  children,
}: ChatMessagesProps): JSX.Element {
  return (
    <div className="w-full">
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row mb-5">
        <div className="xsm:w-9/12 md:w-3/5">
          <h1 className="text-info" style={{ margin: 0 }}>
            {title}
          </h1>
        </div>
      </article>
      {messages.map((message) => {
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
      {children}
    </div>
  );
}

export { ChatMessages };
