import IAPainting from "../../assets/ia_painting.png";
import IAThinking from "../../assets/ia_thinking.png";

function OverviewIA(): JSX.Element {
  return (
    <main className="w-full flex flex-col gap-4">
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
          <h1 className="text-info" style={{ margin: 0 }}>
            Visão geral sobre IA
          </h1>
        </div>
      </article>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
          <h2 style={{ marginTop: 24 }}>
            Quais são os principais objetivos da área de Inteligência
            Artificial?
          </h2>
          <p>
            Os principais objetivos da área de Inteligência Artificial incluem
            compreender e construir entidades inteligentes, automatizar tarefas
            intelectuais, desenvolver sistemas que pensem e ajam como seres
            humanos, e criar agentes inteligentes que atuem de forma racional.
          </p>
          <p>
            Além disso, a inteligência artificial busca simular o raciocínio
            humano, compreendendo processos como visão, lembranças, aprendizagem
            e raciocínio, e fornecer ao computador habilidades para realizar
            funções que apenas o cérebro humano é capaz de solucionar.
          </p>
        </div>
        <div className="w-full xsm:w-9/12 md:w-2/5 flex justify-center">
          <img
            style={{ margin: 0 }}
            className="h-[400px] lg:h-full"
            src={IAPainting}
            alt="Robo pintando um quadro."
          />
        </div>
      </article>
      <div className="divider">
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Inteligência Artificial
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Máquina
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Robôs
        </div>
      </div>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col-reverse md:flex-row">
        <div className="w-full xsm:w-9/12 md:w-2/5 flex justify-center">
          <img
            style={{ margin: 0 }}
            className="h-[400px] lg:h-full"
            src={IAThinking}
            alt="Robo pintando um quadro."
          />
        </div>
        <div className="xsm:w-9/12 md:w-3/5">
          <h2 style={{ marginTop: 24 }}>
            Como a inteligência artificial busca simular o raciocínio humano?
          </h2>
          <p>
            A inteligência artificial busca simular o raciocínio humano por meio
            de diversas técnicas e abordagens, como o uso de sistemas que pensam
            e atuam como seres humanos, sistemas que pensam e atuam de forma
            racional, sistemas que utilizam modelos computacionais para estudar
            as faculdades mentais, e sistemas que executam funções que exigem
            inteligência quando executadas por pessoas.
          </p>
          <p>
            Além disso, a área de inteligência artificial também se relaciona
            com outras áreas científicas, como psicologia, biologia, lógica
            matemática, linguística, engenharia e filosofia.
          </p>
        </div>
      </article>
      <div className="divider">
        <div className="badge badge-info text-lg p-3 badge-outline">Fases</div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Entusiasmo Inicial e Grandes Expectativas (1952-1969)
          </div>
          <div className="collapse-content">
            <p>
              Marcado por grandes entusiasmos e expectativas, mas poucos
              progressos. Destaque para o seminário de dois meses em Dartmouth,
              em 1956, onde foram apresentados os personagens mais importantes
              da história da IA.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Desilusão e Crise (1970-1980)
          </div>
          <div className="collapse-content">
            <p>
              Período em que a IA enfrentou críticas e desafios, com poucos
              avanços significativos.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Retomada do Crescimento (1980-1988)
          </div>
          <div className="collapse-content">
            <p>
              Com o surgimento dos sistemas especialistas, a IA voltou a crescer
              e se desenvolver.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Consolidação e Expansão (1988-Atualidade)
          </div>
          <div className="collapse-content">
            <p>
              A IA se consolidou como uma área de pesquisa e desenvolvimento,
              com diversas aplicações em áreas como medicina, indústria,
              finanças, entre outras.
            </p>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="badge badge-info text-lg p-3 badge-outline">
          Considerações finais
        </div>
      </div>

      <article className="prose max-w-none xl:prose-xl">
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Gostaríamos de informar que o conteúdo apresentado acima nessa
            página foi extraído de um documento em formato PDF. Mantivemos a
            integridade e a precisão do material original durante o processo de
            conversão para proporcionar uma experiência de leitura consistente.
            Clique{" "}
            <a
              target="_blank"
              href="https://www.professores.uff.br/screspo/wp-content/uploads/sites/127/2017/09/ia_intro.pdf"
            >
              aqui
            </a>{" "}
            para ser redirecionado ao PDF original.
          </span>
        </div>
        <p>
          O PDF aborda o desenvolvimento e a evolução da Inteligência Artificial
          (IA) ao longo do tempo, desde suas origens até as aplicações atuais.
          Ele destaca as diferentes fases da IA, incluindo o entusiasmo inicial
          e grandes expectativas, a desilusão e crise, a retomada do crescimento
          e a consolidação e expansão. Além disso, o documento menciona a
          importância de sistemas especialistas, como o DENDRAL e o R1, e
          destaca o impacto da IA em diversas áreas, como medicina, tecnologia e
          indústria. Também são abordadas as técnicas de planejamento da IA, que
          permitiram a geração rápida de planos complexos, e a influência da IA
          na automação de tarefas intelectuais. O PDF fornece uma visão geral
          abrangente da história, evolução e aplicações atuais da Inteligência
          Artificial
        </p>
      </article>
    </main>
  );
}

export { OverviewIA };
