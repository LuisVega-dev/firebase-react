/* eslint-disable react/prop-types */
import "./ApiProduct.css";

export const ApiProduct = (props) => {
  return (
    <div className="Pokemones">
      <h2 className="poke__name">{props.nombre}</h2>
      <img className="img__pokemones" src={props.img} />
      <p className="poke__description"></p>
    </div>
  );
};
