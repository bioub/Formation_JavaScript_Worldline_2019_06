const readline = require('readline');

class Jeu {
  /**
   * @param {object} options Les options
   * @param {number} options.min La valeur min
   * @param {number} options.max La valeur max
   */
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Math.floor(Math.random() * max - min + 1) + min;
    this.essais = [];
  }

  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' | ')}...`);
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
  }
}

const jeu = new Jeu();
jeu.jouer();
