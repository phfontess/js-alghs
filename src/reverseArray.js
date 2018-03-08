const reverseArray = (arr) => {
  let min = 0;
  let max = arr.length - 1;
  let aux;
  while(min < max) {
    aux = arr[min]
    arr[min] = arr[max]
    arr[max] = aux;
    min++;
    max--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4,5,6]))