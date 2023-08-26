/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function app() {
  const [characters, setCharacters] = useState([]);
  const [countPage, setCountPage] = useState(1);

  useEffect(() => {
    const URL_API_CHARACTER = `https://rickandmortyapi.com/api/character?page=${countPage}`;
    const renderCharacter = async () => {
      const respuestaDelServidor = await fetch(URL_API_CHARACTER);
      const convercionAJson = await respuestaDelServidor.json();
      setCharacters(convercionAJson.results);
    };
    renderCharacter();
  }, [countPage]);
  console.log(characters);
  return (
    <>
      <button
        onClick={() => setCountPage(countPage - 1)}
        disabled={countPage === 1}
      >
        ATRAS
      </button>
      <button
        onClick={() => setCountPage(countPage + 1)}
        disabled={countPage === 42}
      >
        SIGUIENTE
      </button>
      <span>pag. {countPage}</span>
      <div className="content-card">
        {characters.map((personajes) => (
          <div className="card" key={personajes.id}>
            <h2>{personajes.name}</h2>
            <img src={personajes.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default app;
