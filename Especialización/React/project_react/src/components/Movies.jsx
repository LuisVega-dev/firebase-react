import { useState } from "react";

export function Movies() {
    
    let [numero,setNumero] = useState(0)

    function handleClick() {
        console.log("Entro");
        numero = numero +1;
        setNumero(numero);
    }

    function handleClick1() {
        console.log("Entro");
        numero = numero -1;
        setNumero(numero);
    }

    let [color, setColor] = useState(false);

    function changeColor() {
        // const newColor = color == false? true : false;
        setColor(!color) 
    }

    
    return (
        <div>
            <h2>Componentes Movies</h2>
            <button onClick={handleClick} style={{backgroundColor : "red", color : "white"}}>Suma</button>
            <button onClick={handleClick1} style={{backgroundColor : "red", color : "white", marginLeft: "10px"}}>Resta</button>
            <h2>{numero}</h2>
            <button onClick={changeColor} style={{backgroundColor: color == false? "red" : "green"}}>{color == false? "red" : "green"}</button>
        </div>
    );
}