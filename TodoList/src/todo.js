(function() {
  'use strict';

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
