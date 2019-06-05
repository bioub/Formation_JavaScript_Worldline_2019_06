// Module JavaScript (une portée au niveau d'un fichier)
// Module IIFE (Immediately Invoked Function Expression)
(function() {
  'use strict';

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
    addTodo({
      text: todoElt.value
    }, listElt);
  });
}());
