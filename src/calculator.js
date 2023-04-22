function calculator(input1, operator, input2) {
  function add(input1, input2) {
    return Number(input1) + Number(input2);
  }

  function minus(input1, input2) {
    return input1 - input2;
  }

  function times(input1, input2) {
    return input1 * input2;
  }

  function divide(input1, input2) {
    return input1 / input2;
  }

  if (operator == "+") return add(input1, input2);
  if (operator == "-") return minus(input1, input2);
  if (operator == "*") return times(input1, input2);
  if (operator == "/") return divide(input1, input2);
}
module.exports = calculator;
