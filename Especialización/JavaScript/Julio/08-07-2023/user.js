export class User {
    constructor(nombre, password){
        this.nombre = nombre;
        this.password = password;
    }

    savestorage(data) {
        localStorage.setItem('User', JSON.stringify(data));
    }

    onloadUser() {
        let userDAta = [];
        const userStorage = JSON.parse(localStorage.getItem('User'));
        if(userStorage != undefined && userStorage != null && userStorage != ''){
            userDAta = userStorage;
        }
        const user = {nombre: this.nombre, password: this.password};
        userDAta.push(user); 
        return userDAta;
    }

    MostrarUser() {
       const container = document.querySelector('.container');
       container.innerHTML += `<div class='card'><h2>${this.nombre}</h2><p>${this.password}</p><button class='btn-card'>Eliminar</button></div>`;
       document.querySelector('#delete').style.display = 'block';
    }
}