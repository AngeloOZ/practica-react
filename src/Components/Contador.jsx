import { useContador } from "../Hooks/useContador";

export const Contador = () => {
  const { contador, handleClickAdd, handleClickSub } = useContador();

  return (
    <>
      <h1>Numero: {contador}</h1>
      <button onClick={handleClickSub}>-</button>
      <button onClick={handleClickAdd}>+</button>
    </>
  );
};
