const isPalindrome = (string) => {
  string = string.toLowerCase();
  let stringArray = string.split('');
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let lettersArray = [];
  stringArray.forEach(element => {
    if(validCharacters.includes(element)) {
      lettersArray.push(element);
    }
  });
  if(lettersArray.join("") === lettersArray.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("socorram me subi no onibus em marrocos"));