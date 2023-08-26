import { useState } from "react";
import { saveTitle } from "../Firebase/firebase";

export const BeticoForm = () => {
  const [itsTitle, setItsTitle] = useState("");

  const handleValueState = (event) => {
    setItsTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveTitle(itsTitle);
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="¿Que tarea vas a guardar hoy?"
          value={itsTitle}
          onChange={handleValueState}
        />
        <input type="submit" value="Guardar" />
        <p>{itsTitle}</p>
      </form>
    </>
  );
};
