const readline = require('readline');            

/**
 * @param {object} options Les options
 * @param {number} options.min La valeur min
 * @param {number} options.max La valeur max
 */
function Jeu(options) {
  options = options || {};
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface(process.stdin, process.stdout);
  this.entierAlea = Math.floor(Math.random() * max - min + 1) + min;
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' | '));
  }
  this._rl.question('Quel est le nombre ? ', (saisie) => {
    
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
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

const jeu = new Jeu({
  min: 10,
  max: 20,
});

jeu.jouer();
