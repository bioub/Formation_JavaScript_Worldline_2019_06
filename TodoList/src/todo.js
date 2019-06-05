// (function() {
//  'use strict';

// Exercice :
// 1 - Sur chaque ligne ajouter un bouton moins
// au clic de celui ci, supprimer la ligne
// (MDN : Element.remove ou mieux Element.removeChild)
// Parent : element.parentNode
// Event : event.target (le bouton sur lequel on a cliqué)

// 2 - Sur chaque ligne ajouter une checkbox
// <input type="checkbox" />
// Sur le clic de la checkbox du formulaire
// tout cocher ou décocher
// pour cocher ou décocher : element.checked = true/false
// MDN querySelectorAll (retour NodeList, pas un tableau)
// Convertir un nodelist en tableau : Array.from(nodeList);

/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.text
 * @param {boolean} todo.completed
 * @param {HTMLDivElement} listElt
 */
function addTodo(todo, listElt) {
  const rowElt = document.createElement('div');
  rowElt.className = 'rowElt';

  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.className = 'completed';
  checkboxElt.checked = todo.completed;
  rowElt.appendChild(checkboxElt);

  const spanElt = document.createElement('span');
  spanElt.innerText = todo.text;
  rowElt.appendChild(spanElt);

  const btnDelElt = document.createElement('button');
  btnDelElt.innerText = '-';
  btnDelElt.className = 'btnDel';
  rowElt.appendChild(btnDelElt);

  if (listElt.children.length) {
    listElt.insertBefore(rowElt, listElt.firstElementChild);
  } else {
    listElt.appendChild(rowElt);
  }
}

/**
 *
 * @param {HTMLDivElement} rowElt
 */
function deleteTodo(rowElt) {
  rowElt.parentNode.removeChild(rowElt);
}

/**
 *
 * @param {boolean} completed
 * @param {HTMLDivElement} listElt
 */
function toggleAllTodo(completed, listElt) {
  const checkboxes = Array.from(listElt.querySelectorAll('input[type=checkbox]'));
  checkboxes.forEach((checkbox) => (checkbox.checked = completed));
}

export { addTodo, deleteTodo, toggleAllTodo };

//}());
