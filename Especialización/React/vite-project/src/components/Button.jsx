import { useState, useEffect } from "react";

export const Button = () => {
  let num = 0;
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    num += 1;
    console.log(num);

    setNumero(numero + 1);
  };

  const handleClick1 = () => {
    num += 1;
    console.log(num);

    setNumero(numero - 1);
  };

  useEffect(() => {
    alert("el estado ha cambiado");
  }, []);

  return (
    <>
      <button type="button" onClick={handleClick}>
        suma
      </button>

      <button type="button" onClick={handleClick1}>
        resta
      </button>

      <p>{numero}</p>
    </>
  );
};
