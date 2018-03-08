const reverseWords = (string) => {
  let stringArr = string.split(" ")
  let stringReverse = ""
  stringArr.forEach((element) => {
    wordArray = element.split("")
    let min = 0
    let max = wordArray.length - 1
    let temp = null
    while(min < max) {
      temp = wordArray[min]
      wordArray[min] = wordArray[max]
      wordArray[max] = temp
      min++
      max--
    }
    stringReverse = `${stringReverse} ${wordArray.join("")}`
  })
  return ` ${string}\n${stringReverse}`
}
console.log(reverseWords('this is a string words'))