// SPREAD Operator Object
const coords = { x: 10, y: 20 };

const clone = { ...coords };
const coords3d = { ...coords, z: 30 };
console.log(JSON.stringify(coords3d)); // {"x":10,"y":20,"z":30}

// REST Params Object
const { z = 30, ...coords2d } = coords3d;
console.log(JSON.stringify(coords2d)); // {"x":10,"y":20}
