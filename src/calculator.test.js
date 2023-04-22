const calculator = require("./calculator");

test("Use all calculator functions", () => {
  expect(calculator(1, "+", 1)).toBe(2);
  expect(calculator(1, "-", 1)).toBe(0);
  expect(calculator(5, "*", 3)).toBe(15);
  expect(calculator(5, "/", 2)).toBe(2.5);
});
