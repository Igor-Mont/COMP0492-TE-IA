import ChatPdfLogo from "../../assets/chat_pdf_logo.png";
import BingLogo from "../../assets/bing_logo.png";
import FineShareLogo from "../../assets/fineshare_logo.svg";
import VoClonerLogo from "../../assets/vocloner_logo.png";
import ElevenLabsLogo from "../../assets/elevenlabs_logo.png";
import SteveAiLogo from "../../assets/steve_ai.svg";
import { messagesOverviewIA, messagesQuotes } from "../../constants/methods";
import { ChatMessages } from "../ChatMessages/ChatMessages";

function Methods(): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-4">
      <ChatMessages title="Visão geral sobre IA" messages={messagesOverviewIA}>
        <div className="w-full divider my-12">
          <img
            className="w-[60px] sm:w-[80px]"
            src={ChatPdfLogo}
            alt="Chat pdf logo"
          />
          <img
            className="w-[150px] sm:w-[200px]"
            src={BingLogo}
            alt="Bing logo"
          />
          <img
            className="w-[100px] sm:w-[180px]"
            src={SteveAiLogo}
            alt="Steve AI logo"
          />
        </div>
      </ChatMessages>
      <ChatMessages title="Reflexões sobre a IA" messages={messagesQuotes}>
        <div className="w-full divider my-12">
          <img
            src={FineShareLogo}
            className="w-[120px] sm:w-[200px]"
            alt="FineShare logo"
          />
          <img
            src={VoClonerLogo}
            className="rounded-md w-[30px] sm:w-[80px]"
            alt="VoCloner logo"
          />
          <img
            width={200}
            height={100}
            src={ElevenLabsLogo}
            className="w-[150px] sm:w-[200px]"
            alt="LLElevenLabs logo"
          />
        </div>
      </ChatMessages>
    </div>
  );
}

export { Methods };
