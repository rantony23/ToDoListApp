//notes: validate the list is not empty
//allow the user to write down a new task and add it.
//erase button for each task
//checkbox, change the font color of a completed task

const menu = document.getElementById('menu');
const elements = document.querySelectorAll('.elements');
const nav =  document.getElementById('navbar');
const cuerpo = document.getElementById('body');// donde agregar el nuevo div
const add = document.getElementById('add');
let task = document.getElementById('task');
let active = false;
let containerNotes = document.getElementsByClassName('container-notes');


menu.addEventListener('click', () =>{
    elements.forEach( elemento =>{
        elemento.classList.toggle('elements-hidden');
    })
    nav.classList.toggle('menu-hidden');
});

function divMaker(valor){
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('container-notes');
    nuevoDiv.innerHTML = `
        <button class="buttons edit">Edit</button>
        <div class="note">${valor}</div>
        <button class="buttons erase">-</button>
    `;
    cuerpo.appendChild(nuevoDiv);

    const erase = nuevoDiv.querySelector('.erase');
    erase.addEventListener('click', () =>{
        nuevoDiv.remove();
    })
    const note = nuevoDiv.querySelector('.note');
    const edit = nuevoDiv.querySelector('.edit');
    edit.addEventListener('click', () =>{
        active = !active;
        if(active === true){
            note.innerHTML = `<input class="note" type="text" value="${valor}">`
        }else{
            const saved = note.querySelector('input').value;
            if(saved){
                note.innerHTML = `<div class="note">${saved}</div>`;
                valor = saved;
            }
        }
    });

};

document.getElementById('writing-task').addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que se recargue la página
    const newValue = task.value;
    divMaker(newValue);
    task.value = ''; // Limpiar el campo después de agregar la tarea
});

