import AIBalance from "../../assets/ai_balance.jpeg";
import IAUsing from "../../assets/ai_using.jpeg";

function DiscussionAI(): JSX.Element {
  return (
    <main className="w-full flex flex-col gap-4">
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
        <h1 className="text-info" style={{ margin: 0 }}>
            Discussões sobre IA
          </h1>
        </div>
      </article>
      <div className="divider">
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Ética
        </div>
        <div className="badge badge-info md:text-lg badge-sm md:badge-md text-sm p-1 badge-outline">
          Moral
        </div>
      </div>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col md:flex-row">
        <div className="xsm:w-9/12 md:w-3/5">
          <h2 style={{ marginTop: 24 }}>
            Ética na área da Inteligência Artificial
          </h2>
          <p>
            A evolução tecnológica trouxe consigo um conjunto de mudanças que afetam diretamente a sociedade, especialmente no contexto da coleta e 
            distribuição de informações. Hoje, as máquinas não são apenas meios de comunicação, mas também a própria mensagem. Essa transformação exige 
            que os valores humanos sejam estendidos aos processos cibernéticos. A ética desempenha um papel fundamental nesse novo cenário.
          </p>
          <p>
            No contexto da Inteligência Artificial (IA), surgem desafios éticos complexos. A revolução digital influenciou normas e valores sociais, e 
            problemas éticos surgem na interação homem-máquina. Máquinas estão assumindo funções cada vez mais humanas, mas sua capacidade de discernimento 
            ético é limitada. Elas são projetadas para executar tarefas com base em cálculos matemáticos, o que as impede de compreender plenamente conceitos 
            éticos complexos, como decisões baseadas em valores morais.
          </p>
          <p>
            A relação entre ética e IA é crucial. A criação de máquinas inteligentes levanta questões éticas sobre a responsabilidade humana, o controle 
            sobre essas máquinas e seu impacto na sociedade. É fundamental que a ética esteja no centro do desenvolvimento e implementação da IA, garantindo 
            que essas tecnologias sejam usadas de forma responsável e respeitosa com os valores humanos.
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
            A Inteligência Artificial (IA) está se tornando cada vez mais presente em nosso cotidiano,
            transformando a maneira como interagimos com a tecnologia e realizamos tarefas diárias.
            Assistentes de voz como Siri, Alexa e Google Assistant são exemplos claros disso,
            facilitando a interação entre humanos e máquinas. Além disso, a IA é amplamente
            empregada em recomendações de produtos e serviços, personalizando conteúdos e
            produtos com base em nossas preferências, o que contribui para uma experiência mais
            satisfatória para os usuários.
          </p>
          <p>
            Na área da saúde, a IA desempenha um papel crucial, auxiliando no diagnóstico de
            doenças, no desenvolvimento de tratamentos mais eficazes e na otimização de processos
            hospitalares. A análise de grandes volumes de dados médicos por algoritmos de IA permite
            identificar padrões e tendências, beneficiando tanto profissionais de saúde quanto
            pacientes. Além disso, a IA é fundamental em sistemas de transporte inteligentes,
            contribuindo para a redução de congestionamentos e o aumento da segurança viária por
            meio do monitoramento do tráfego em tempo real e da sugestão de rotas mais eficientes.
          </p>
        </div>
      </article>
    <article className="prose max-w-none xl:prose-xl">
        <p>
            A tabela abaixo mostra a distribuição percentual do interesse dos entrevistados nos Estados
            Unidos de uma pesquisa acessível por meio deste <a href='https://pro.morningconsult.com/analysis/generative-ai-recipes-roadside-assistance' 
            className="text-blue-500 no-underline">link</a>, por diferentes aplicativos e produtos 
            relacionados à inteligência artificial em 2023. Os dados indicam a popularidade de várias 
            aplicações de IA, como busca online, assistentes inteligentes, e receitas geradas por IA, 
            entre outros.
        </p>  
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
        <h2 style={{ marginTop: 24 }}>
            Impactos na Economia
        </h2>
        <p>
        Os benefícios do uso da inteligência artificial (IA) no fluxo de trabalho de desenvolvimento
        têm impactos significativos na economia global. De acordo com a <a href='https://survey.stackoverflow.co/2023/#section-developer-tools-benefits-of-ai-tools' 
            className="text-blue-500 no-underline">pesquisa de
            desenvolvedores do Stack Overflow de 2023</a>, aproximadamente 32,8% dos
        desenvolvedores relataram um aumento de produtividade como o benefício mais importante
        do uso de ferramentas de IA. Isso sugere que a implementação eficaz da IA pode levar a
        uma maior eficiência operacional e, potencialmente, a uma redução nos custos de produção
        </p>

        <p>
        O gráfico abaixo aborda a projeção de crescimento do mercado global de inteligência
        artificial (IA) para a próxima década de uma <a href='https://www.nextmsc.com/report/explainable-ai-market' 
            className="text-blue-500 no-underline">pesquisa da Next Move Strategy Consulting</a>, prevendo um aumento significativo de quase 100
        bilhões de dólares em 2021 para quase dois trilhões de dólares até 2030. A expansão da IA
        abrange diversas indústrias, incluindo cadeias de suprimentos, marketing, produção,
        pesquisa, análise e mais, todas adotando a IA em suas estruturas de negócios. As
        principais tendências incluem chatbots, IA geradora de imagens e aplicativos móveis. Além
        disso, destaca-se o crescimento do interesse em IA generativa, evidenciado pelo aumento
        no interesse do Google de 2022 a 2023, impulsionado pelo lançamento do ChatGPT 3.0
        </p> 

        <p>
        O <a href='https://www.nextmsc.com/report/ai-robots-market' 
            className="text-blue-500 no-underline">relatório</a> sobre o mercado global de robótica AI destaca a previsão da presença de robôs
        em diversas indústrias, integrando programas de IA para simular inteligência humana.
        Prevê-se um crescimento substancial do mercado na próxima década, especialmente
        devido aos problemas de mão de obra nas economias avançadas, com um aumento de dez
        vezes entre 2021 e 2030. A receita da robótica automotiva teve uma queda significativa
        entre 2019 e 2021, devido à redução da demanda por novos veículos durante os bloqueios.
        Enquanto isso, os custos dos robôs de serviço estão aumentando, especialmente na
        Europa, devido à crescente demanda por mão de obra.
        </p> 

    </article>
    </main>
  );
}

export { DiscussionAI };
