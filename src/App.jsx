import "./App.css";
import { Contador } from "./Components";
import { useContador } from "./Hooks/useContador";

function App() {
  const { contador, handleClickAdd } = useContador();
  const { contador: cont, handleClickSub: fun2 } = useContador();
  return (
    <div className="App">
      <Contador />
      <Contador />
      {/* <Contador /> */}

      <>
        <h1>{contador}</h1>
        <button onClick={handleClickAdd}>+</button>
      </>
      <>
        <h1>{cont}</h1>
        <button onClick={fun2}>-</button>
      </>
    </div>
  );
}

export default App;
