import "./styles.css";
import Citacoes from "./components/Citacoes";
import citacoesData from "./citacoesData";

function App() {

  const elementData = citacoesData.map((elemento) => {
    return <Citacoes 
             citacao={elemento.citacao} 
             autor={elemento.autor} 
            />;
  });

  return (
    <div>
    {elementData}
    </div>);
}

export default App;