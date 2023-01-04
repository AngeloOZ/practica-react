import { useState } from "react";

export const useContador = () => {
    const [contador, setContador] = useState(0);

    const handleClickAdd = () => {
        setContador(contador + 1);
    };

    const handleClickSub = () => {
        setContador(contador - 1);
    };

    const handleClickReset = () => {
        setContador(0);
    };

    return { contador, handleClickAdd, handleClickSub, handleClickReset }
}
