// défini dans la portée globale (navigateur)
// défini dans la portée de module (node.js)
function externe() {
  let a = 'a';
  function interne(b) {
    console.log(a); // défini dans la portée de closure
    console.log(b); // défini dans la portée locale
  }
  interne(a);
}

externe();

// pile d'appels
// ^
// |log
// |interne
// |externe
// +----------------------------------> temps
