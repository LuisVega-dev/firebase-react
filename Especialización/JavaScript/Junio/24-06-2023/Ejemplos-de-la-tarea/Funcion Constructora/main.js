function pokemon(Nombre, Imagen, Descripcion) {
    this.Nombre = Nombre;
    this.Imagen = Imagen;
    this.Descripcion = Descripcion;
}

const Pikachu = new pokemon("Pickachu","pikachu.jpg","Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon.");
const Bulbasaur = new pokemon("Bulbasaur","Bulbasaur.png","Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región de Kanto, junto a Charmander y Squirtle, en las ediciones Pokémon Rojo, Pokémon Verde y Pokémon Azul y Pokémon Rojo Fuego y Pokémon Verde Hoja. Se destaca por ser el primer Pokémon de la Pokédex Nacional.");

const array = [Pikachu,Bulbasaur];
let resul = "";
for (let i = 0; i < array.length; i++) {
    resul += "<div class='card'>" + "<h2>" + array[i].Nombre + "</h2>" + "<img src='" + array[i].Imagen + "' width='200px'>" + "<p>" + array[i].Descripcion + "</p>" + "</div>";
}

const container = document.querySelector('.container');
container.innerHTML = resul;

let click = document.getElementsByClassName('card');
let result = "";
for (let i = 0; i < click.length; i++) {
    result = click[i].addEventListener("click", function() {
        document.querySelector('.popup').style.display = "block";
        let content = this.innerHTML;
        document.querySelector('.popup_content').innerHTML = content;
    });
}

function ocultar() {
    document.querySelector('.popup').style.display = 'none';
}