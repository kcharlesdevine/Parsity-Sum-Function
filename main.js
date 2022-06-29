const findSum = function(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum)
};
let numbers = [2, 4, 6, 10, 10]
console.log(findSum(numbers))
