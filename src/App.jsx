import { useState } from "react";
import "./App.css";
import { Contador, Modal } from "./Components";
import { useContador } from "./Hooks/useContador";

function App() {
  const showList = false;
  const { contador, handleClickAdd } = useContador();
  const { contador: cont, handleClickSub: fun2 } = useContador();
  const [nombres, setNombres] = useState([
    "Angello",
    "Athina",
    "Kathy1",
    "Kathy2",
    "David",
    "Pato",
  ]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      {/* <Contador />
      <Contador /> */}
      {/* <Contador /> */}

      {/* <>
        <h1>{contador}</h1>
        <button onClick={handleClickAdd}>+</button>
      </>
      <>
        <h1>{cont}</h1>
        <button onClick={fun2}>-</button>
      </> */}
      <p>Listado de oficina 2</p>
      <button onClick={() => setModal(true)}>Open modal</button>
      <ul>
        {nombres.map((nombre, i) => (
          <li key={i}>{nombre}</li>
        ))}
      </ul>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
