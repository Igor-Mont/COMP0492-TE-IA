import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { algoritmo: 'A.D', Acurácia: 0.658, 'Acurácia Balanceada': 0.653, Precisão: 0.66, Revocação: 0.726, 'F1-Score': 0.69, 'Statistical Parity Difference': -0.155, 'Disparate Impact': 0.78 },
  { algoritmo: 'M.L.P', Acurácia: 0.659, 'Acurácia Balanceada': 0.656, Precisão: 0.665, Revocação: 0.718, 'F1-Score': 0.689, 'Statistical Parity Difference': -0.158, 'Disparate Impact': 0.773 },
  { algoritmo: 'N.B', Acurácia: 0.648, 'Acurácia Balanceada': 0.646, Precisão: 0.662, Revocação: 0.683, 'F1-Score': 0.671, 'Statistical Parity Difference': -0.149, 'Disparate Impact': 0.777 },
  { algoritmo: 'R.F', Acurácia: 0.656, 'Acurácia Balanceada': 0.652, Precisão: 0.663, Revocação: 0.714, 'F1-Score': 0.684, 'Statistical Parity Difference': -0.151, 'Disparate Impact': 0.781 },
  { algoritmo: 'R.L', Acurácia: 0.661, 'Acurácia Balanceada': 0.657, Precisão: 0.669, Revocação: 0.715, 'F1-Score': 0.688, 'Statistical Parity Difference': -0.159, 'Disparate Impact': 0.77 },
  { algoritmo: 'S.V.M', Acurácia: 0.662, 'Acurácia Balanceada': 0.658, Precisão: 0.667, Revocação: 0.72, 'F1-Score': 0.69, 'Statistical Parity Difference': -0.162, 'Disparate Impact': 0.768 }
];

const Dashboard = () => {
  return (
    <main className='w-full h-[300px] md:h-[400px]'>
      <article className="prose prose-headings:underline max-w-none xl:prose-xl flex items-center flex-col md:flex-row mb-4 mt-5">
        <div className="xsm:w-9/12 md:w-3/5">
          <h1 className="text-info text-center xsm:text-start" style={{ margin: 0 }}>
            Desempenho de algoritmos de IA
          </h1>
        </div>
      </article>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col md:flex-row">
        <div className="w-full">
          <p>

            Através das informações contidas em um artigo sobre o desempenho de algoritmos de IA, acessível 
            por meio deste <a href='https://repositorio.unifesp.br/bitstream/handle/11600/60716/RSBroder%20-%20TCC.pdf?sequence=5&isAllowed=y' 
            className="text-blue-500 no-underline">link</a>,
            conseguimos extrair uma tabela abrangente que descreve o desempenho de diversos algoritmos de IA.
            Esta tabela é uma fonte valiosa de informações, fornecendo dados precisos sobre a acurácia (Acc),
            acurácia balanceada (AB), precisão (P), revocação (R), F1-Score (F1), diferença de paridade estatística (SPD)
            e impacto desigual de algoritmos como Árvore de Decisão (AD), Multi Layer Perceptron (MLP), Naive Bayes (NB),
            Random Forest (RF), Regressão Logística (RL) e Support Vector Machines (SVM). Esses dados são essenciais para
            avaliar e comparar o desempenho de diferentes algoritmos em uma variedade de contextos e
            podem ser fundamentais para orientar escolhas futuras no desenvolvimento e implementação de sistemas de IA.
          </p>
        </div>
      </article>

      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="algoritmo" />
          <YAxis domain={[0.6, 0.8]} tickCount={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acurácia" fill="#8884d8" />
          <Bar dataKey="Acurácia Balanceada" fill="#82ca9d" />
          <Bar dataKey="Precisão" fill="#ffc658" />
          <Bar dataKey="Revocação" fill="#ff7f0e" />
          <Bar dataKey="F1-Score" fill="#a0d368" />
          <Bar dataKey="Disparate Impact" fill="#8a2be2" />
        </BarChart>
      </ResponsiveContainer>
      <article className="prose max-w-none xl:prose-xl w-full gap-4 flex items-center flex-col md:flex-row">
        <div className="w-full">
          <p>
          Com base no conteúdo fornecido, podemos concluir esta sessão destacando a importância das informações 
          contidas no artigo sobre o desempenho de algoritmos de IA. O acesso a essa valiosa fonte de dados nos 
          permite ter uma visão abrangente e detalhada do desempenho de diversos algoritmos, incluindo métricas 
          cruciais como acurácia, acurácia balanceada, precisão, revocação, F1-Score, diferença de paridade estatística 
          e impacto desigual. Essas informações são fundamentais para avaliar e comparar o desempenho de diferentes 
          algoritmos em diversos contextos de aplicação. Além disso, elas têm o potencial de orientar escolhas 
          futuras no desenvolvimento e implementação de sistemas de IA, contribuindo para o avanço e aprimoramento 
          dessa área crucial da tecnologia. O acesso ao artigo por meio do link fornecido nos proporciona uma 
          oportunidade valiosa de aprofundamento e análise, alimentando nosso entendimento e impulsionando 
          progressos futuros no campo da inteligência artificial.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Dashboard;
