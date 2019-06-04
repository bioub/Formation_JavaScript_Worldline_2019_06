/**
 * Dit bonjour
 * @param {string} name Un prénom
 */
function hCb(name) {
  console.log('Hello ' + name);
}

function fCb(name) {
  return name.length === 4;
}

function tCb(name) {
  return name.toUpperCase();
}

var firstNames = ['Jean', 'Eric', 'Romain'];
firstNames
  .filter(fCb)
  .map(tCb)
  .forEach(hCb);

console.log('Fin');

// pile d'appels
// ^
// |                              log   log
// |fCb - fCb - fCb   tCb - tCb   hCb - hCb
// |filter          - map       - forEach   - log
// +---------------------------------------------> temps
//                                JEAN  ERIC  Fin
