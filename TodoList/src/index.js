// Module JavaScript (une portée au niveau d'un fichier)
// Module IIFE (Immediately Invoked Function Expression)
// (function() {
import { getTodos } from './api';
import { deleteTodo, toggleAllTodo, addTodo } from './todo';

/** @type {HTMLFormElement} */
const formElt = document.querySelector('#todoForm');
/** @type {HTMLInputElement} */
const todoElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('#todoList');
/** @type {HTMLInputElement} */
const toggleElt = document.querySelector('#toggle');

// debugger;
// console.log(formElt, todoElt, listElt, toggleElt);
formElt.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(
    {
      text: todoElt.value,
    },
    listElt,
  );
});

toggleElt.addEventListener('click', () => {
  toggleAllTodo(toggleElt.checked, listElt);
});

document.addEventListener('click', (event) => {
  if (event.target.className !== 'btnDel') {
    return;
  }
  deleteTodo(event.target.parentNode);
});

document.addEventListener('click', (event) => {
  if (event.target.className !== 'completed') {
    return;
  }
  /** @type {HTMLInputElement} */
  const checkbox = event.target;
  checkbox.parentNode.classList.toggle('checked');
  /** @type {HTMLSpanElement} */
  // const spanElt = checkbox.nextElementSibling;

  // if (checkbox.checked) {
  //   spanElt.style.textDecoration = 'line-through';
  //   spanElt.style.color = 'grey';
  // }
  // else {
  //   spanElt.style.textDecoration = 'unset';
  //   spanElt.style.color = 'unset';
  // }
  // deleteTodo(event.target.parentNode);
});

(async () => {
  listElt.innerText = 'Loading...';
  const todos = await getTodos();
  listElt.innerText = '';
  for (const todo of todos) {
    addTodo(todo, listElt);
  }
})();
// }());
