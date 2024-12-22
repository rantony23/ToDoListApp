//notes: validate the list is not empty
//allow the user to write down a new task and add it.
//erase button for each task
//checkbox, change the font color of a completed task

const menu = document.getElementById('menu');
const elements = document.querySelectorAll('.elements');
const nav =  document.getElementById('navbar');
const adding = document.getElementById('adding');
const cuerpo = document.getElementById('body');
const borrar = document.getElementById('erase');
let notas = document.querySelectorAll('content-body-app');

menu.addEventListener('click', () =>{
    elements.forEach( elemento =>{
        elemento.classList.toggle('elements-hidden');
    })
    nav.classList.toggle('menu-hidden');
});
adding.addEventListener('click', () =>{
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList = 'content-body-app';
    nuevoDiv.innerHTML = `
                    <div class="adding-container">+</div>
                <div class="activity">
                    <p></p>
                    <div class="time">00:00</div>
                    <div id="erase">-</div>
                </div>
    `;
    cuerpo.appendChild(nuevoDiv);

    notas = document.querySelectorAll('.content-body-app');
    console.log(notas);
});
borrar.addEventListener('click', () =>{
    
})