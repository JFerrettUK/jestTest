const reverseString = require("./reverseString");

test("Reverses the order of a string", () => {
  expect(reverseString("test string")).toBe("gnirts tset");
});
