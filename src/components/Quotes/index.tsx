import { useState } from "react";
import FlagBrasil from "../../assets/brasil.png";
import FlagEUA from "../../assets/eua.png";
import FlagSpain from "../../assets/spain.png";
import "./styles.css";

enum FLAG {
  BRAZIL,
  EUA,
  SPAIN,
}

interface Quote {
  author: string;
  message: string;
  image_url: string;
  english_traduction: string;
  portuguese_traduction: string;
  spanish_traduction: string;
}

const QUOTES: Quote[] = [
  {
    author: "Elon Musk",
    image_url:
      "https://www.thefamouspeople.com/profiles/images/elon-musk-4.jpg",
    message:
      "I think AI is akin to building a rocket ship. You need a huge engine and a lot of fuel. If you have a large engine and a tiny amount of fuel, you won't make it to orbit. If you have a tiny engine and a lot of fuel, you can't even lift off. To build a rocket you need a huge engine and a lot of fuel.",
    english_traduction:
      "I think AI is akin to building a rocket ship. You need a huge engine and a lot of fuel. If you have a large engine and a tiny amount of fuel, you won't make it to orbit. If you have a tiny engine and a lot of fuel, you can't even lift off. To build a rocket you need a huge engine and a lot of fuel.",
    portuguese_traduction:
      "Eu acho que a inteligência artificial é semelhante à construção de um foguete. Você precisa de um motor enorme e de muito combustível. Se você tem um motor grande e uma quantidade ínfima de combustível, não chegará à órbita. Se você tem um motor pequeno e muito combustível, nem mesmo conseguirá decolar. Para construir um foguete, você precisa de um motor enorme e de muito combustível.",
    spanish_traduction:
      "Creo que la inteligencia artificial es similar a construir una nave espacial. Necesitas un motor enorme y muchísimo combustible. Si tienes un motor grande y una cantidad ínfima de combustible, no llegarás a la órbita. Si tienes un motor pequeño y mucho combustible, ni siquiera podrás despegar. Para construir una nave espacial, necesitas un motor enorme y mucho combustible.",
  },
  {
    author: "Larry Page",
    message:
      "Artificial intelligence would be the ultimate version of Google. The ultimate search engine that would understand everything on the web. It would understand exactly what you wanted, and it would give you the right thing. We're nowhere near doing that now. However, we can get incrementally closer to that, and that is basically what we work on.",
    image_url:
      "https://www.infomoney.com.br/wp-content/uploads/2020/04/GettyImages-144948917-1.jpg?fit=1280%2C875&quality=50&strip=all",
    english_traduction:
      "Artificial intelligence would be the ultimate version of Google. The ultimate search engine that would understand everything on the web. It would understand exactly what you wanted, and it would give you the right thing. We're nowhere near doing that now. However, we can get incrementally closer to that, and that is basically what we work on.",
    portuguese_traduction:
      "A inteligência artificial seria a versão definitiva do Google. O mecanismo de busca definitivo que entenderia tudo na web. Entenderia exatamente o que você queria e lhe daria o que é certo. Estamos longe de fazer isso agora. No entanto, podemos nos aproximar incrementalmente disso, e basicamente é nisso que trabalhamos.",
    spanish_traduction:
      "La inteligencia artificial sería la versión definitiva de Google. El motor de búsqueda definitivo que entendería todo en la web. Entendería exactamente lo que querías y te daría lo correcto. Estamos lejos de lograr eso ahora. Sin embargo, podemos acercarnos incrementalmente a eso, y eso es básicamente en lo que trabajamos.",
  },
  {
    author: "Stephen Hawking",
    message:
      "The development of full artificial intelligence could spell the end of the human race. It would take off on its own, and redesign itself at an ever-increasing rate. Humans, who are limited by slow biological evolution, couldn't compete and would be superseded.",
    image_url:
      "https://s.rfi.fr/media/display/69e8bcce-1701-11ea-90d6-005056bf7c53/w:1280/p:1x1/stephen_hawking_0.jpg",
    english_traduction:
      "The development of full artificial intelligence could spell the end of the human race. It would take off on its own, and redesign itself at an ever-increasing rate. Humans, who are limited by slow biological evolution, couldn't compete and would be superseded.",
    portuguese_traduction:
      "O desenvolvimento de uma inteligência artificial completa poderia significar o fim da raça humana. Ela decolaria por conta própria e se redesenharia a uma taxa cada vez maior. Os humanos, limitados pela lenta evolução biológica, não conseguiriam competir e seriam substituídos.",
    spanish_traduction:
      "El desarrollo de una inteligencia artificial completa podría significar el fin de la raza humana. Despegaría por sí misma y se rediseñaría a una tasa cada vez mayor. Los humanos, limitados por la lenta evolución biológica, no podrían competir y serían reemplazados.",
  },
  {
    author: "Bill Gates",
    message:
      "I am in the camp that is concerned about super intelligence. First, the machines will do a lot of jobs for us and not be super intelligent. That should be positive if we manage it well. A few decades after that, though, the intelligence is strong enough to be a concern.",
    image_url: "https://media.moneytimes.com.br/uploads/2023/12/bill-gaes.jpg",
    english_traduction:
      "I am in the camp that is concerned about super intelligence. First, the machines will do a lot of jobs for us and not be super intelligent. That should be positive if we manage it well. A few decades after that, though, the intelligence is strong enough to be a concern.",
    portuguese_traduction:
      "Estou no grupo que se preocupa com a superinteligência. Primeiro, as máquinas farão muitos trabalhos para nós e não serão superinteligentes. Isso deveria ser positivo se gerenciarmos bem. Algumas décadas depois, no entanto, a inteligência é forte o suficiente para ser uma preocupação.",
    spanish_traduction:
      "Estoy en el grupo que se preocupa por la superinteligencia. Primero, las máquinas harán muchos trabajos por nosotros y no serán superinteligentes. Eso debería ser positivo si lo gestionamos bien. Sin embargo, unas décadas después, la inteligencia es lo suficientemente fuerte como para ser una preocupación.",
  },
];

function Quotes(): JSX.Element {
  const [quotes, setQuotes] = useState([...QUOTES]);
  const handleFlagClick = (index: number, flag: FLAG, quote: Quote) => {
    let message = "";
    if (flag === FLAG.BRAZIL) {
      message = quote.portuguese_traduction;
    } else if (flag === FLAG.EUA) {
      message = quote.english_traduction;
    } else {
      message = quote.spanish_traduction;
    }
    const updatedQuotes = [...quotes];
    updatedQuotes[index].message = message;
    setQuotes(updatedQuotes);
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
              <div className="w-full flex justify-end gap-2">
                <img
                  width={36}
                  src={FlagBrasil}
                  onClick={() => handleFlagClick(i, FLAG.BRAZIL, quote)}
                  className="cursor-pointer"
                  alt="Bandeira do Brasil"
                />
                <img
                  width={36}
                  src={FlagEUA}
                  onClick={() => handleFlagClick(i, FLAG.EUA, quote)}
                  className="cursor-pointer"
                  alt="Bandeira dos EUA"
                />
                <img
                  width={36}
                  src={FlagSpain}
                  onClick={() => handleFlagClick(i, FLAG.SPAIN, quote)}
                  className="cursor-pointer"
                  alt="Bandeira da Espanha"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Quotes };
