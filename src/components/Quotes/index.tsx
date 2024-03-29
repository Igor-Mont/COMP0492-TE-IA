import { useState } from "react";
import { FLAG, Quote } from "../../models";
import FlagBrasil from "../../assets/brasil.png";
import FlagEUA from "../../assets/eua.png";
import FlagSpain from "../../assets/spain.png";
import SpeakerIcon from "../../assets/speaker_icon.png";
import ElonMuskAudioEnglish from "../../assets/elonmusk_english.mp3";
import ElonMuskAudioBrazil from "../../assets/elonmusk_brazil.mp3";
import ElonMuskAudioSpain from "../../assets/elonmusk_spanish.mp3";
import StephenHawkingAudioEnglish from "../../assets/stephenhawking_english.mp3";
import StephenHawkingAudioBrazil from "../../assets/stephenhawking_brazil.mp3";
import StephenHawkingAudioSpain from "../../assets/stephenhawking_spanish.mp3";
import { QUOTES } from "../../constants";
import "./styles.css";

const audiosElonMuskMap = new Map([
  [FLAG.BRAZIL, ElonMuskAudioBrazil],
  [FLAG.EUA, ElonMuskAudioEnglish],
  [FLAG.SPAIN, ElonMuskAudioSpain],
]);

const audiosStephenHawkingMap = new Map([
  [FLAG.BRAZIL, StephenHawkingAudioBrazil],
  [FLAG.EUA, StephenHawkingAudioEnglish],
  [FLAG.SPAIN, StephenHawkingAudioSpain],
]);

function Quotes(): JSX.Element {
  const authorsWithAudio = ["Elon Musk", "Stephen Hawking"];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [quotes, setQuotes] = useState([...QUOTES]);
  const handleFlagClick = (index: number, flag: FLAG, quote: Quote) => {
    const updatedQuotes = [...quotes];
    const updatedQuote = updatedQuotes[index];
    let message = "";
    if (flag === FLAG.BRAZIL) {
      updatedQuote.current_flag = FLAG.BRAZIL;
      message = quote.portuguese_traduction;
    } else if (flag === FLAG.EUA) {
      updatedQuote.current_flag = FLAG.EUA;
      message = quote.english_traduction;
    } else {
      updatedQuote.current_flag = FLAG.SPAIN;
      message = quote.spanish_traduction;
    }
    updatedQuote.message = message;
    setQuotes(updatedQuotes);
  };

  const handleSpeakerClick = (index: number, flag: FLAG) => {
    if (isPlaying) currentAudio?.pause();

    setIsPlaying(true);

    let audioSource = "";
    if (index === 0) {
      audioSource = audiosElonMuskMap.get(flag) as string;
    } else if (index === 2) {
      audioSource = audiosStephenHawkingMap.get(flag) as string;
    }

    if (audioSource !== "") {
      const audio = new Audio(audioSource);
      audio.play();
      setCurrentAudio(audio);

      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row mb-4">
        <div className="xsm:w-9/12 md:w-3/5">
          <h1 className="text-info" style={{ margin: 0 }}>
            Reflexões sobre a IA
          </h1>
        </div>
      </article>
      <div className="w-full flex items-start flex-wrap gap-4 ">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className={`quote-card card min-w-[280px] h-[600px] ${
              i === quotes.length - 1 ? "small-card" : ""
            } card-compact flex-1 bg-base-100 shadow-xl`}
          >
            <figure className="h-[250px]">
              <img
                className="h-full w-full object-cover"
                src={quote.image_url}
                alt={quote.author}
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{quote.author}</h2>
              <p>{quote.message}</p>
              <div className="w-full flex justify-between">
                <div className="flex gap-2 ">
                  <img
                    width={36}
                    src={FlagEUA}
                    onClick={() => handleFlagClick(i, FLAG.EUA, quote)}
                    className="cursor-pointer"
                    alt="Bandeira dos EUA"
                  />
                  <img
                    width={36}
                    src={FlagBrasil}
                    onClick={() => handleFlagClick(i, FLAG.BRAZIL, quote)}
                    className="cursor-pointer"
                    alt="Bandeira do Brasil"
                  />
                  <img
                    width={36}
                    src={FlagSpain}
                    onClick={() => handleFlagClick(i, FLAG.SPAIN, quote)}
                    className="cursor-pointer"
                    alt="Bandeira da Espanha"
                  />
                </div>
                {authorsWithAudio.includes(quote.author) && (
                  <div className="hover:scale-110 transition-all">
                    <img
                      width={36}
                      src={SpeakerIcon}
                      onClick={() => handleSpeakerClick(i, quote.current_flag)}
                      className="cursor-pointer"
                      alt="Ícone de um alto falante"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Quotes };
