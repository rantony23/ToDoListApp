const menu = document.getElementById('menu');
const elements = document.querySelectorAll('.elements');
const nav =  document.getElementById('navbar');
console.log(elements);
menu.addEventListener('click', () =>{
    elements.forEach( elemento =>{
        elemento.classList.toggle('elements-hidden');
    })
    nav.classList.toggle('menu-hidden');
});