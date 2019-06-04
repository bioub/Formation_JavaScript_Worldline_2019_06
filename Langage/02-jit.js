function hello(name) {
  return 'Hello ' + name;
}

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello(12345); // deoptimize
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');

console.time('hello');
hello('Romain');
console.timeEnd('hello');
