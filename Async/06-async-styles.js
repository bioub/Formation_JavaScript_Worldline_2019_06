const fs = require('fs');

// Style Synchrone (bloquant)
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.appendFileSync('.tmp', buffer);
  console.log('DONE');
}
catch (err) {
  console.log(err);
}

// Style Asynchrone Callback (pyramide, pas d'erreur centralisée)
// Callback hell / Pyramid of doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    return console.log(err);
  }
  fs.appendFile('.tmp', buffer, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('DONE');
  });
});

// Style Asynchrone Promise
fs.promises.readFile('.prettierrc')
  .then((buffer) => fs.promises.appendFile('.tmp', buffer))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err));

// Style Asynchrone async/await (ES2017)
(async () => {
  try {
    const buffer = await fs.promises.readFile('.prettierrc');
    await fs.promises.appendFile('.tmp', buffer);
    console.log('DONE');
  }
  catch (err) {
    console.log(err);
  }
})();
