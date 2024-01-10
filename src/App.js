import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Desenvolvedores FullStack",
      corPrimaria: "#57C278",
      corSegundaria: "#D9F7E9",
    },
    {
      nome: "Desenvolvedor Back-End",
      corPrimaria: "#82CFFa",
      corSegundaria: "#E8F8ff",
    },
    {
      nome: "Desenvolvedor Front-End",
      corPrimaria: "#a6d157",
      corSegundaria: "#F0f8e2",
    },
    {
      nome: "Banco de Dados MySql",
      corPrimaria: "#e06b69",
      corSegundaria: "#fde7e8",
    },
    {
      nome: "Analistas",
      corPrimaria: "#db6ebf",
      corSegundaria: "#fae9f5",
    },
    {
      nome: "Financeiro",
      corPrimaria: "#ffba05",
      corSegundaria: "#fff5d9",
    },
    {
      nome: "Gestão de Pessoas",
      corPrimaria: "#ff8a29",
      corSegundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
        ))}
        <Rodape />
    </div>
  );
}

export default App;
