(function() {
  'use strict';

  /**
   *
   * @param {object} todo
   * @param {number} todo.id
   * @param {string} todo.text
   * @param {boolean} todo.completed
   */
  function addTodo(todo, listElt) {
    const rowElt = document.createElement('div');

    // Créer une checkbox (todo.completed)

    const spanElt = document.createElement('span');
    spanElt.innerText = todo.text;
    rowElt.appendChild(spanElt);

    // Créer un bouton moins

    if (listElt.children.length) {
      listElt.insertBefore(rowElt, listElt.firstElementChild);
    } else {
      listElt.appendChild(rowElt);
    }
  }

  window.addTodo = addTodo;

}());
