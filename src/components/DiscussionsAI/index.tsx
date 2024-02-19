import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import AIBalance from "../../assets/ai_balance.jpeg";
import IAUsing from "../../assets/ai_using.jpeg";

function DiscussionAI() {
  const data1 = [
    { name: "Busca online alimentada por IA", percent: 49 },
    { name: "Receitas geradas por IA", percent: 48 },
    { name: "Assistentes inteligentes alimentados por IA", percent: 48 },
    {
      name: "Produtos projetados por IA com base nas tendências dos consumidores",
      percent: 44,
    },
    { name: "Navegação em veículos alimentados por IA", percent: 44 },
    { name: "Ferramentas de IA para polícia e justiça criminal", percent: 43 },
    { name: "Listas de compras geradas por IA", percent: 42 },
    { name: "Recomendações de compras geradas por IA", percent: 42 },
    { name: "Recomendações de voos e hotéis alimentadas por IA", percent: 41 },
    {
      name: "Recomendações de menu em restaurantes geradas por IA",
      percent: 40,
    },
    {
      name: "Agentes de viagem virtual e suporte ao cliente alimentados por IA",
      percent: 40,
    },
    {
      name: "Conselhos de planejamento financeiro assistidos por IA",
      percent: 39,
    },
    { name: "Livros e contos gerados por IA", percent: 38 },
    {
      name: "Itinerários de viagem personalizados gerados por IA",
      percent: 38,
    },
    { name: "Consultas médicas alimentadas por IA", percent: 38 },
    {
      name: "Ferramentas de IA que ajudam programadores a codificar",
      percent: 37,
    },
    { name: "Conselhos de investimento assistidos por IA", percent: 37 },
    { name: "Guias de presentes personalizados gerados por IA", percent: 37 },
    {
      name: "Serviços de preparação de impostos assistidos por IA",
      percent: 36,
    },
    {
      name: "Ferramentas de áudio geradas que podem replicar vozes de pessoas",
      percent: 35,
    },
    { name: "Filmes gerados por IA", percent: 34 },
    { name: "Artigos de notícias gerados por IA", percent: 34 },
    { name: "Serviço ao cliente alimentado por IA", percent: 34 },
    { name: "Arte estática gerada por IA", percent: 33 },
    { name: "Veículos autônomos alimentados por IA", percent: 32 },
    { name: "Terapia e coaching de vida alimentados por IA", percent: 30 },
    { name: "Anúncios gerados por IA", percent: 29 },
    { name: "Personalidades de mídia social geradas por IA", percent: 29 },
    { name: "Séries de TV geradas por IA", percent: 29 },
    { name: "Alcance de vendas alimentado por IA", percent: 27 },
    { name: "Amigos virtuais alimentados por IA", percent: 27 },
    { name: "Porta-vozes de empresa simulados por IA", percent: 27 },
    { name: "Legendas de mídia social geradas por IA", percent: 25 },
    { name: "Atores gerados por IA", percent: 24 },
    { name: "Parceiros românticos virtuais alimentados por IA", percent: 21 },
    { name: "Deepfakes", percent: 21 },
  ];

  const data2 = [
    { name: "Aumento de produtividade", percent: 32.8 },
    { name: "Acelerar aprendizado", percent: 25.17 },
    { name: "Maior eficiência", percent: 24.96 },
    { name: "Melhoria na precisão da codificação", percent: 13.31 },
    { name: "Melhoria na colaboração", percent: 3.75 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"];

  const data3 = [
    { year: "2021", marketSize: 95602.77 },
    { year: "2022", marketSize: 142319.8 },
    { year: "2023", marketSize: 207902.42 },
    { year: "2024", marketSize: 298246.87 },
    { year: "2025", marketSize: 420465.53 },
    { year: "2026", marketSize: 582948.69 },
    { year: "2027", marketSize: 795384.63 },
    { year: "2028", marketSize: 1068718.47 },
    { year: "2029", marketSize: 1415054.84 },
    { year: "2030", marketSize: 1847495.6 },
  ];

  const data4 = [
    { year: "2021", marketSize: 6865.68 },
    { year: "2022", marketSize: 9392.25 },
    { year: "2023", marketSize: 12825.12 },
    { year: "2024", marketSize: 17397.27 },
    { year: "2025", marketSize: 23347.14 },
    { year: "2026", marketSize: 30888.27 },
    { year: "2027", marketSize: 40170.19 },
    { year: "2028", marketSize: 51216.99 },
    { year: "2029", marketSize: 63867.59 },
    { year: "2030", marketSize: 77726.85 },
  ];

  return (
    <main className="w-full flex flex-col gap-4 mt-4">
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
          <h1 className="text-info" style={{ margin: 0 }}>
            Discussões sobre IA
          </h1>
        </div>
      </article>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
          <h2 style={{ marginTop: 24 }}>
            Ética na área da Inteligência Artificial
          </h2>
          <p>
            A evolução tecnológica trouxe consigo um conjunto de mudanças que
            afetam diretamente a sociedade, especialmente no contexto da coleta
            e distribuição de informações. Hoje, as máquinas não são apenas
            meios de comunicação, mas também a própria mensagem. Essa
            transformação exige que os valores humanos sejam estendidos aos
            processos cibernéticos. A ética desempenha um papel fundamental
            nesse novo cenário.
          </p>
          <p>
            No contexto da Inteligência Artificial (IA), surgem desafios éticos
            complexos. A revolução digital influenciou normas e valores sociais,
            e problemas éticos surgem na interação homem-máquina. Máquinas estão
            assumindo funções cada vez mais humanas, mas sua capacidade de
            discernimento ético é limitada. Elas são projetadas para executar
            tarefas com base em cálculos matemáticos, o que as impede de
            compreender plenamente conceitos éticos complexos, como decisões
            baseadas em valores morais.
          </p>
          <p>
            A relação entre ética e IA é crucial. A criação de máquinas
            inteligentes levanta questões éticas sobre a responsabilidade
            humana, o controle sobre essas máquinas e seu impacto na sociedade.
            É fundamental que a ética esteja no centro do desenvolvimento e
            implementação da IA, garantindo que essas tecnologias sejam usadas
            de forma responsável e respeitosa com os valores humanos.
          </p>
        </div>
        <div className="w-full xsm:w-9/12 md:w-2/5 flex justify-center">
          <img
            style={{ margin: 0 }}
            className="h-[400px] lg:h-full"
            src={AIBalance}
            alt="Debate ético representando por um robô olhando para um homem com uma balança no centro."
          />
        </div>
      </article>
      <div className="divider">
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Uso
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Ética
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Moral
        </div>
      </div>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col-reverse md:flex-row">
        <div className="w-full xsm:w-9/12 md:w-2/5 flex justify-center">
          <img
            style={{ margin: 0 }}
            className="h-[400px] lg:h-full"
            src={IAUsing}
            alt="Homem utilizando a inteligência Artificial."
          />
        </div>
        <div className="xsm:w-9/12 md:w-3/5">
          <h2 style={{ marginTop: 24 }}>
            Aplicações Práticas da Inteligência Artificial
          </h2>
          <p>
            A Inteligência Artificial (IA) está se tornando cada vez mais
            presente em nosso cotidiano, transformando a maneira como
            interagimos com a tecnologia e realizamos tarefas diárias.
            Assistentes de voz como Siri, Alexa e Google Assistant são exemplos
            claros disso, facilitando a interação entre humanos e máquinas. Além
            disso, a IA é amplamente empregada em recomendações de produtos e
            serviços, personalizando conteúdos e produtos com base em nossas
            preferências, o que contribui para uma experiência mais satisfatória
            para os usuários.
          </p>
          <p>
            Na área da saúde, a IA desempenha um papel crucial, auxiliando no
            diagnóstico de doenças, no desenvolvimento de tratamentos mais
            eficazes e na otimização de processos hospitalares. A análise de
            grandes volumes de dados médicos por algoritmos de IA permite
            identificar padrões e tendências, beneficiando tanto profissionais
            de saúde quanto pacientes. Além disso, a IA é fundamental em
            sistemas de transporte inteligentes, contribuindo para a redução de
            congestionamentos e o aumento da segurança viária por meio do
            monitoramento do tráfego em tempo real e da sugestão de rotas mais
            eficientes.
          </p>
        </div>
      </article>
      <article className="prose max-w-none xl:prose-xl">
        <p>
          A tabela abaixo mostra a distribuição percentual do interesse dos
          entrevistados nos Estados Unidos de uma pesquisa acessível por meio
          deste{" "}
          <a
            href="https://pro.morningconsult.com/analysis/generative-ai-recipes-roadside-assistance"
            className="text-blue-500 no-underline"
          >
            link
          </a>
          , por diferentes aplicativos e produtos relacionados à inteligência
          artificial em 2023. Os dados indicam a popularidade de várias
          aplicações de IA, como busca online, assistentes inteligentes, e
          receitas geradas por IA, entre outros.
        </p>

        <div className="w-full flex justify-center items-center overflow-auto">
          <ResponsiveContainer width="90%" height={970}>
            <BarChart
              layout="vertical"
              data={data1}
              margin={{ top: 20, right: 1, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={500} />
              <Tooltip />
              <Legend />
              <Bar dataKey="percent" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
      <div className="divider">
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Economia
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Lucro
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Dinheiro
        </div>
      </div>
      <article className="prose max-w-none xl:prose-xl">
        <h2 style={{ marginTop: 24 }}>Impactos na Economia</h2>
        <p>
          Os benefícios do uso da inteligência artificial (IA) no fluxo de
          trabalho de desenvolvimento têm impactos significativos na economia
          global. De acordo com a{" "}
          <a
            href="https://survey.stackoverflow.co/2023/#section-developer-tools-benefits-of-ai-tools"
            className="text-blue-500 no-underline"
          >
            pesquisa de desenvolvedores do Stack Overflow de 2023
          </a>
          , aproximadamente 32,8% dos desenvolvedores relataram um aumento de
          produtividade como o benefício mais importante do uso de ferramentas
          de IA. Isso sugere que a implementação eficaz da IA pode levar a uma
          maior eficiência operacional e, potencialmente, a uma redução nos
          custos de produção
        </p>

        <div className="w-full flex justify-center items-center overflow-auto">
          <ResponsiveContainer width="90%" height={600}>
            <PieChart>
              <Pie
                data={data2}
                dataKey="percent"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {data2.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p>
          O gráfico abaixo aborda a projeção de crescimento do mercado global de
          inteligência artificial (IA) para a próxima década de uma{" "}
          <a
            href="https://www.nextmsc.com/report/explainable-ai-market"
            className="text-blue-500 no-underline"
          >
            pesquisa da Next Move Strategy Consulting
          </a>
          , prevendo um aumento significativo de quase 100 bilhões de dólares em
          2021 para quase dois trilhões de dólares até 2030. A expansão da IA
          abrange diversas indústrias, incluindo cadeias de suprimentos,
          marketing, produção, pesquisa, análise e mais, todas adotando a IA em
          suas estruturas de negócios. As principais tendências incluem
          chatbots, IA geradora de imagens e aplicativos móveis. Além disso,
          destaca-se o crescimento do interesse em IA generativa, evidenciado
          pelo aumento no interesse do Google de 2022 a 2023, impulsionado pelo
          lançamento do ChatGPT 3.0
        </p>

        <div className="w-full flex justify-center items-center overflow-auto">
          <ResponsiveContainer width="90%" height={600}>
            <BarChart data={data3}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis width={100} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="marketSize"
                fill="skyblue"
                label={{ position: "top" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p>
          O{" "}
          <a
            href="https://www.nextmsc.com/report/ai-robots-market"
            className="text-blue-500 no-underline"
          >
            relatório
          </a>{" "}
          sobre o mercado global de robótica AI destaca a previsão da presença
          de robôs em diversas indústrias, integrando programas de IA para
          simular inteligência humana. Prevê-se um crescimento substancial do
          mercado na próxima década, especialmente devido aos problemas de mão
          de obra nas economias avançadas, com um aumento de dez vezes entre
          2021 e 2030. A receita da robótica automotiva teve uma queda
          significativa entre 2019 e 2021, devido à redução da demanda por novos
          veículos durante os bloqueios. Enquanto isso, os custos dos robôs de
          serviço estão aumentando, especialmente na Europa, devido à crescente
          demanda por mão de obra.
        </p>

        <div className="w-full flex justify-center items-center overflow-auto">
          <ResponsiveContainer width="90%" height={400}>
            <LineChart data={data4}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="marketSize"
                stroke="rgba(54, 162, 235, 1)"
                fill="rgba(54, 162, 235, 0.2)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>
    </main>
  );
}

export { DiscussionAI };
