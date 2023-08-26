function valores(){
    let nume1 = parseInt($(".num1").val());
    let nume_1 = parseInt($(".num_1").val());
    let vec = [nume1,nume_1];
    return vec
}
function multiplicacion(nume1,nume_1){
    return nume1 * nume_1;
}

$(".btn").click(function(){
    let valo = valores();
    let number1 = $(".num1").val();
    let number_1 = parseInt(number1);
    let result ="";
    let error = "Ingresa un valor mayor a 0"
    if(number_1 <=0){
        alert(error)
    }else{
        for(let i=1;i<=valo[1];i++){
            result += "<p class='tabla'>" + number_1 + "x" + i + "=" + multiplicacion(valo[0],i) + "</p>";
        }
        $(".result").html(result)
    }
});