const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
const ceaserCipher = (string, num) => {
  num = num % 26;
  let stringArr = string.split("");
  let ceaserArray = [];
  stringArr.forEach(element => {
    if(alphabet.includes(element)) {
      let alphabetIndex = alphabet.indexOf(element);
      let newIndex = alphabetIndex + num;
      if(newIndex > 25) {
        newIndex =- 26;
      }
      if(newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      ceaserArray.push(alphabet[newIndex]);
    } else {
      ceaserArray.push(element);
    }
  });
  return ceaserArray.join("");
}

ceaserCipher('bbb ccc zab', 1);

