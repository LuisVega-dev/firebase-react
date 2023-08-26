import { User } from "./user.js";

const form = document.querySelector('#form-card');
const container = document.querySelector('.container');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const name = form['name-poke'].value;
    const descrip = form['description'].value;
    /*container.innerHTML = `<div class='card'><h2>${name}</h2><img src='https://www.bitgab.com/uploads/1597796080-pikachu-1597796080.png' width='250px'><p>${descrip}</p></div>`;*/
    const user = new User(name,descrip);
    const newData= user.onloadUser();
    console.log(newData)
    user.savestorage(newData)
});