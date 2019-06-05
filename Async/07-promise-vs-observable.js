const { Observable } = require('rxjs');
const { take, map, filter } = require('rxjs/operators')

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

timeout(1000)
  .then(() => {
    console.log('timeout 1000ms')
    return timeout(1000);
  })
  .then(() => {
    console.log('timeout 2000ms')
  });


function interval(delay) {
  let i = 0;
  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(++i);
    }, delay);
  });
}

interval(1000)
  .pipe(
    filter((i) => i % 2 === 0),
    map((i) => i * 1000),
    take(5),
  )
  .subscribe((delay) => {
    console.log(`interval ${delay}ms`)
  });
