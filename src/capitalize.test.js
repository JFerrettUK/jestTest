const capitalize = require("./capitalize");

test("Capitalizes the first letter of a word", () => {
  expect(capitalize("test")).toBe("Test");
});
