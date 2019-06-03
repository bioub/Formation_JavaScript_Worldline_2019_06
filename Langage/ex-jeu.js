const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const entierAlea = Math.floor(Math.random() * 101);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '));
  }
  rl.question('Quel est le nombre ? ', (saisie) => {
    
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    } 
    
    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }
    
    console.log('Gagné');
    rl.close();

  });
}

jouer();

// pile d'appels
// ^
// |                                            question
// |                            question        jouer
// |require - createInterface - jouer    ..⟳..  =>      ..⟳.. 
// +--------------------------------------------ENTREE---------> temps
//                 