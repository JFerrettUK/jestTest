function analyzeArray(arr) {
  //average of all the numbers
  let total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const average = total / arr.length;

  //the smallest number
  const min = Math.min(...arr);

  //the largest number
  const max = Math.max(...arr);

  //the length of the array
  const length = arr.length;

  let result = { average, min, max, length };

  return result;
}
module.exports = analyzeArray;
