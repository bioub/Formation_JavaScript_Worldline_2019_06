//(function() {
'use strict';

export async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  /** @type {Array} */
  const todos = await res.json();
  return todos.slice(0, 10).map((t) => ({ id: t.id, text: t.title, completed: t.completed }));
}

//})();
