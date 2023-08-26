/* eslint-disable react/prop-types */
import "./Api.css";

export const Api = (props) => {
  return (
    <>
      <div className="card-api">
        <h2 className="title-card">Pokemones</h2>
        <div className="card-poke">{props.children}</div>
      </div>
    </>
  );
};
