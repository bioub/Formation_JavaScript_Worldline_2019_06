function externe(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
const bye = externe('Bye');

hello();
bye();

// pile d'appels
// ^
// |
// |          log
// |externe - interne
// +----------------------------------> temps

// 3 3 3 dans 100ms
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// 0 1 2 dans 100ms
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 100);
}

// 0 1 2 dans 100ms
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

/*
function createButton(value) {
  const btn = document.createElement('button');

  btn.innerText = value;

  btn.addEventListener('click', function() {
    console.log(value);
  });

  document.body.appendChild(btn);
}
createButton('Test');
createButton('Hello');
*/
