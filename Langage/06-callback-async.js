setTimeout(function cbA() {
  console.log('A');
}, 100);

setTimeout(function cbB() {
  console.log('B');
}, 500);

setTimeout(function cbC() {
  console.log('C');
}, 0);

setTimeout(function cbD() {
  console.log('D');
}, 100);

console.log('Fin');

// pile d'appels
// ^
// |
// |                               log       log   log
// |st - st - st - st - log ..⟳.. cbC ..⟳.. cbA   cbD
// +----------0ms------------------2ms-------101ms-102ms-------> temps
//                      Fin        C
//
// file d'attente de callbacks (0ms) : cbC
// file d'attente de callbacks (2ms) : 
// file d'attente de callbacks (100ms) : cbA - cbD
// file d'attente de callbacks (101ms) : cbD
// file d'attente de callbacks (102ms) : 