const fizzBuzz = (num) => {
  let initNumber = 1;
  do {
    if(initNumber % 15 === 0) {
      console.log(`${initNumber} -> fizzbuzz`);
    } else if(initNumber % 5 === 0){
      console.log(`${initNumber} -> buzz`);
    } else if(initNumber % 3 === 0) {
      console.log(`${initNumber} -> fizz`);
    } else {
      console.log(`${initNumber}`);
    } 
    initNumber++;
  } while (initNumber <= num)
}

fizzBuzz(20);