/**
 * Dit bonjour
 * @param {string} name Un prénom
 */
function hello(name) {
  return 'Hello ' + name;
}

var firstNames = ['Jean', 'Eric'];

for (let i = 0; i < firstNames.length; i++) {
  const firstName = firstNames[i];
  console.log(hello(firstName));
}
