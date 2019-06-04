const readline = require('readline'); 

/**
 * @param {object} options Les options
 * @param {number} options.min La valeur min
 * @param {number} options.max La valeur max
 */
function Jeu(options) { // 1 - class
  options = options || {}; // 2 - default value

  // 3 - Destructing + shorthand property + default value
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = Math.floor(Math.random() * max - min + 1) + min;
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // 4 - template literal
    console.log('Vous avez déjà joué : ' + this.essais.join(' | '));
  }
  this._rl.question('Quel est le nombre ? ', (saisie) => {
    
    const entierSaisi = Number.parseInt(saisie);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    } 
    
    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }
    
    console.log('Gagné');
    this._rl.close();

  });
};

const jeu = new Jeu();

jeu.jouer();
