global.name = 'Romain';

const contact = {
  name: 'Pierre',
};

function hello(n1, n2) {
  return `Hello ${n1}, ${n2}, my name is ${this.name}`;
}

const hello2 = hello; // reference

console.log(hello('Jean', 'Eric'));
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

/*
Function.prototype.bind = function(thisArg) {
  const fn = this;
  return function(...args) {
    return fn.call(thisArgs, ...args);
  };
}
*/

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));
