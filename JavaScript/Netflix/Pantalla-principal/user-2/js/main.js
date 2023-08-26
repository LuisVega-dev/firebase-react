let category = ["Accion","Aventura","Comedia","Terror","Ciencia Ficcion","Documentales"]
$('.btn-nav-3').click(function(){
    $('.c0').html(category[0]);
    $('.c1').html(category[1]);
    $('.c2').html(category[2]);
    $('.c3').html(category[3]);
    $('.c4').html(category[4]);
    $('.c5').html(category[5]);
    $('.c0').slideToggle("slow");
    $('.c1').slideToggle("slow");
    $('.c2').slideToggle("slow");
    $('.c3').slideToggle("slow");
    $('.c4').slideToggle("slow");
    $('.c5').slideToggle("slow");
});


// Pictures 1
let titulos = ["love you as the world ends","the tinder swindler","forecasting love and weather","I love you"];
let imagenes = ["./img/image3.png","./img/image4.png","./img/image5.png","./img/image7.png"];
let descripcion = ["Love You as the World Ends es un drama de transmisión/televisión apocalíptico japonés de 4 temporadas coproducido por NTV y Hulu Japan, sobre cómo un joven y otros sobrevivientes luchan para sobrevivir a una invasión de zombis. La temporada 1 se transmitió en NTV del 17 de enero al 21 de marzo de 2021.","Él se hacía pasar por magnate con una vida de lujo y seducía a mujeres por Internet para robarles millones de dólares. Ahora, sus víctimas se han unido para vengarse juntas.","Para una mujer no es fácil predecir días soleados y lluviosos, aún trabajando como meteoróloga. Más difícil aún es predecir el amor, incluso cuando llama a la puerta.","Después de que una falla en un software hace que un programa avanzado de inteligencia artificial se enamore de una mujer joven, se escapa al cuerpo de un hombre e intenta ganarse su corazón."];
let resultado = "";
for(let i = 0; i < titulos.length; i++){
    resultado += "<div class='card-1'>"+"<h2>"+titulos[i]+"</h2>"+"<div>"+"<img src='"+imagenes[i]+"'>"+"</div>"+"<p>"+descripcion[i]+"</p>"+"</div>";
};
$('.pictures-1').html(resultado);

$('.card-1').click(function(){
    $('.popup').show();
    let contenido = $(this).html();
    $(".popup-content").html(contenido);
});

function cerrar() {
    $('.popup').hide();
};


// Pictures 2
let titu = ["Fishbowl Wives","Taxi Driver","Crash Landing on You","Thirty Nine"];
let imag = ["./img/image8.png","./img/image9.png","./img/image10.png","./img/image11.png"];
let descrip = ["En un edificio de apartamentos de lujo, seis mujeres con matrimonios infelices ceden a la tentación de la infidelidad.","Taxi Driver, es una serie de televisión surcoreana transmitida del 9 de abril de 2021 hasta el 29 de mayo de 2021 a través de SBS. La serie es una adaptación del webtoon de 'The Deluxe Taxi' Carlos y Lee Jae-jin.","Una heredera surcoreana sufre un accidente en parapente en Corea del Norte y un oficial del ejército decide ayudarla a esconderse.","Tres mejores amigos se apoyan en las buenas y en las malas mientras experimentan la vida, el amor y la pérdida al borde de cumplir cuarenta años."];
let resul = "";
for(let i = 0; i < titu.length; i++){
    resul += "<div class='card-2'>"+"<h2>"+titu[i]+"</h2>"+"<div>"+"<img src='"+imag[i]+"'>"+"</div>"+"<p>"+descrip[i]+"</p>"+"</div>";
};
$('.pictures-2').html(resul);

$('.card-2').click(function(){
    $('.popup').show();
    let conte = $(this).html();
    $(".popup-content").html(conte);
});

function cerrar() {
    $('.popup').hide();
};


// Picture3
let tit = ["All of Us Are Dead","Our Beloved Summer","Forecasting Love and Weather","Twenty Five Twenty One","Bulgasal: Immortal Souls"];
let ima = ["./img/image12.png","./img/image13.png","./img/image14.png","./img/image15.png","./img/image16.png"];
let descri = ["Una epidemia mortal estalla en una escuela. Acorralados, los alumnos solo tienen una opción: luchar con todas sus fuerzas para evitar convertirse en zombis.","Años después de un documental sobre una escuela que se viralizó, dos examantes deben enfrentar las cámaras y sus propias vidas.","Para una mujer no es fácil predecir días soleados y lluviosos, aún trabajando como meteoróloga. Más difícil aún es predecir el amor, incluso cuando llama a la puerta.","En una época donde los objetivos parecen inalcanzables, una joven esgrimista persigue sus sueños y conoce a un joven trabajador que busca reconstruir su vida.","Un hombre inmortal es impulsado por el deseo de recuperar su alma y finalmente vengarse después de 600 años."];
let resu = "";
for(let i = 0; i < tit.length; i++){
    resu += "<div class='card-3'>"+"<h2>"+tit[i]+"</h2>"+"<div>"+"<img src='"+ima[i]+"'>"+"</div>"+"<p>"+descri[i]+"</p>"+"</div>";
};
$('.pictures-3').html(resu);

$('.card-3').click(function(){
    $('.popup').show();
    let cont = $(this).html();
    $(".popup-content").html(cont);
});

function closs() {
    $('.popup').hide();
};

// Pictures 4
let tales = ["I love you","Forecasting Love and Weather","Fishbowl Wives","Thirty Nine"];
let number = ["./img/1.png","./img/2.png","./img/3.png","./img/4.png"]
let genes = ["./img/image7.png","./img/image5.png","./img/image8.png","./img/image11.png"];
let iption = ["Después de que una falla en un software hace que un programa avanzado de inteligencia artificial se enamore de una mujer joven, se escapa al cuerpo de un hombre e intenta ganarse su corazón.","Para una mujer no es fácil predecir días soleados y lluviosos, aún trabajando como meteoróloga. Más difícil aún es predecir el amor, incluso cuando llama a la puerta.","En un edificio de apartamentos de lujo, seis mujeres con matrimonios infelices ceden a la tentación de la infidelidad.","Tres mejores amigos se apoyan en las buenas y en las malas mientras experimentan la vida, el amor y la pérdida al borde de cumplir cuarenta años."];
let tado = "";
for(let i = 0; i < tales.length; i++){
    tado += "<div class='card-4'>"+"<h2>"+tales[i]+"</h2>"+"<div class='img-4'>"+"<img src='"+number[i]+"'>"+"</div>"+"<div class='img-card-4'>"+"<img src='"+genes[i]+"'>"+"</div>"+"<p>"+iption[i]+"</p>"+"</div>";
};
$('.pictures-4').html(tado)

$('.card-4').click(function(){
    $('.popup').show();
    let conte = $(this).html();
    $('.popup-content').html(conte)
});

function cerrar() {
    $('.popup').hide();
};

// Pictures 5
let imgur = ["./img/image5.png","./img/image4.png"]
let shadow = ["./img/Rectangle13.png","./img/Rectangle13.png"]
let icons = ["./img/play.png","./img/play.png"]
let minute = ["./img/minute.png","./img/minute.png"]
let iconinfo = ["./img/inflo-circle.png","./img/inflo-circle.png"]
let infoicon = ["./img/point-info.png","./img/point-info.png"]
let container = "";
for(let i = 0; i < imgur.length; i++){
    container += "<div class='card-5'>"+"<div class='img-back'>"+"<img src='"+imgur[i]+"' width='100%'>"+"</div>"+"<div class='shadow-back'>"+"<img src='"+shadow[i]+"' width='101px' height='149px'>"+"<div class='img-icon'>"+"<img src='"+icons[i]+"' width='60px'>"+"</div>"+"</div>"+"<div class='icon-minute'>"+"<div>"+"<p>"+"S1: E1"+"</p>"+"</div>"+"<div class='div-minute'>"+"<img src='"+minute[i]+"' width='101px'>"+"</div>"+"</div>"+"<div class='div-info'>"+"<div class='iconinfo'>"+"<img src='"+iconinfo[i]+"'>"+"</div>"+"<div class='infoicon'>"+"<img src='"+infoicon[i]+"'>"+"</div>"+"</div>"+"</div>"
};
$('.pictures-5').html(container)