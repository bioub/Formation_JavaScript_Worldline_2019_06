// REST Params

//       sum(1, 2, [3, 4, 5])
function sum(a, b, ...nbs) {
  let result = a + b;

  result += nbs.reduce((acc, nb) => acc + nb, 0);

  return result;
}

console.log(sum(1, 2, 3, 4, 5));

// SPREAD operator
function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const nbs = [1, 2, 3, 4, 5];
console.log(sum2(...nbs));

const clone = [...nbs];
const clonenbs2 = [0, ...nbs, 6];

// Destructuring Array
const fullname = 'Romain Bohdanowicz';
const [firstName, lastName] = fullname.split(' ');

// Destructuring + Default + REST
//    [1  , 2      ,3, 4, 5        ]
const [one, two = 2, , ...othersNbs] = nbs;

// Destructuring Object
const coords = { x: 10, y: 20 };
//    { x: 10  , y: 20   }
const { x: valX, y: valY } = coords;
console.log(valX); // 10
console.log(valY); // 20

// Destructuring + Shorthand prop + Default
const { x = 0, y = 0, z = 0 } = coords;

// Générateurs
function* nbsGen() {
  yield 1;
  yield 2;
}

const gen = nbsGen();
console.log(gen.next().value);
console.log(gen.next().value);

for (const nb of nbsGen()) {
  console.log(nb);
}
