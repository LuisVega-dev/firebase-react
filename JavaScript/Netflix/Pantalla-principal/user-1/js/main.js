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
let titulos = ["Perros Pastores","Los Días","El Recluso","365 Días"];
let imagenes = ["./img/perrospastores.jpg","./img/losdias.jpg","./img/elrecluso.jpg","./img/365dias.jpg"];
let descripcion = ["Cinco granjeros emprenden un adorable desafío cuando intentan convertir a unos traviesos cachorros australianos en perros de pastoreo en tiempo récord.","Para algunos son culpables, para otros son héroes. Los implicados en la central nuclear de Fukushima enfrentan una amenaza mortal e invisible: una catástrofe sin precedentes.","Un exmilitar se hace pasar por un recluso en una cárcel mexicana para infiltrarse en una banda sospechada de secuestrar a la hija de un juez estadounidense.","Después de que una falla en un software hace que un programa avanzado de inteligencia artificial se enamore de una mujer joven, se escapa al cuerpo de un hombre e intenta ganarse su corazón."];
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
let titu = ["Pablo Escobar","Trol","El Nucelo","Besos, Kitty"];
let imag = ["./img/pabloescobar.jpg","./img/trol.jpg","./img/elnucleo.jpg","./img/besos.jpg"];
let descrip = ["Esta fascinante serie narra la vida del infame Pablo Escobar, desde sus días como ratero hasta convertirse en el jefe de un imperio del narcotráfico.","Cuando una explosión en las montañas noruegas despierta a un antiguo trol, las autoridades designan a una osada paleontóloga para que evite que cause estragos en el lugar.","El centro de la Tierra deja de rotar y el científico Josh Keyes debe descubrir la causa antes de que el mundo se derrumbe, literalmente.","Se escribe una nueva historia de amor cuando Kitty, la joven celestina, se reencuentra con su novio a distancia en el mismo internado al que asistió su difunta madre."];
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
let tit = ["Vinland Saga","Manifiesto","La Buena Mala Madre","Valeria","Shin, abogado de divorcios"];
let ima = ["./img/viland.png","./img/manifiesto.jpg","./img/labuenaymalamadre.jpg","./img/valeria.jpg","./img/shin.jpg"];
let descri = ["En busca de venganza, el joven Thorfinn se une a la banda de mercenarios del asesino de su padre Askeladd, quien urde un plan político.","Michaela visita a los padres de Evie, quienes lidian con su pérdida. Los gemelos Cal y Olive intentan volver a conectarse después de cinco años y medio de separación.","Tras un trágico accidente, un ambicioso fiscal vuelve a tener la mente de un niño, lo que los obliga a él y a su madre a esforzarse para recuperar su relación.","Una escritora que atraviesa una crisis creativa y conyugal se apoya en tres amigas, que también están autodescubriéndose. Basada en las novelas de Elísabet Benavent.","Impulsado por una tragedia personal, un pianista convertido en abogado explora el complejo mundo de los divorcios y hace lo que sea por defender a sus clientes."];
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
let tales = ["Tin & Tina","Sangre Y Gonor","Una Vida Maravillosa","2 Corazones"];
let number = ["./img/1.png","./img/2.png","./img/3.png","./img/4.png"]
let genes = ["./img/tinytina.jpg","./img/sangreyhonor.jpg","./img/unavidamaravillosa.jpg","./img/2corazones.png"];
let iption = ["Tras un aborto traumático, una joven pareja adopta a dos hermanos que viven en un convento, pero su obsesión por la religión pronto perturba a la familia.","Al final de la Segunda Guerra Mundial, un desertor alemán y una joven se ven inmersos en una sangrienta batalla contra un grupo de nazis que buscan oro escondido.","Un joven pescador con un talento oculto es descubierto por una productora musical y debe decidir si está listo para abrirse al estrellato... y al amor.","En historias de amor paralelas, las vidas del universitario Chris y el empresario adinerado Jorge se entrecruzan gracias a un giro del destino. Basada en una historia real."];
let tado = "";
for(let i = 0; i < tales.length; i++){
    tado += "<div class='card-4'>"+"<h2>"+tales[i]+"</h2>"+"<div class='img-4'>"+"<img src='"+number[i]+"'>"+"</div>"+"<div class='img-card-4'>"+"<img src='"+genes[i]+"' width='101px'>"+"</div>"+"<p>"+iption[i]+"</p>"+"</div>";
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
let imgur = ["./img/tinytina.jpg","./img/sangreyhonor.jpg"]
let shadow = ["./img/Rectangle13.png","./img/Rectangle13.png"]
let icons = ["./img/play.png","./img/play.png"]
let minute = ["./img/minute.png","./img/minute.png"]
let iconinfo = ["./img/inflo-circle.png","./img/inflo-circle.png"]
let infoicon = ["./img/point-info.png","./img/point-info.png"]
let container = "";
for(let i = 0; i < imgur.length; i++){
    container += "<div class='card-5'>"+"<div class='img-back'>"+"<img src='"+imgur[i]+"' width='101px'>"+"</div>"+"<div class='shadow-back'>"+"<img src='"+shadow[i]+"' width='101px' height='149px'>"+"<div class='img-icon'>"+"<img src='"+icons[i]+"' width='60px'>"+"</div>"+"</div>"+"<div class='icon-minute'>"+"<div>"+"<p>"+"S1: E1"+"</p>"+"</div>"+"<div class='div-minute'>"+"<img src='"+minute[i]+"' width='101px'>"+"</div>"+"</div>"+"<div class='div-info'>"+"<div class='iconinfo'>"+"<img src='"+iconinfo[i]+"'>"+"</div>"+"<div class='infoicon'>"+"<img src='"+infoicon[i]+"'>"+"</div>"+"</div>"+"</div>"
};
$('.pictures-5').html(container)