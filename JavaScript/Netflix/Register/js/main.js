$('.btn').click(function(){
    let names = $('#name').val();
    let emails = $('#email').val();
    let passwords = $('#password').val();
    let error = "Por favor llenar todos los campos correctamente."

    if(names, emails, passwords == ""){
        alert(error)
    }else{
        window.location.href="/JavaScript/Netflix/Users/Users.html"
    }
});