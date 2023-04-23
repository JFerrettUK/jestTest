const caesarCipher = require("./caesarCipher");

test("Get the result of a caesar cipher", () => {
  expect(caesarCipher("I like chemistry", 10)).toBe("S vsuo mrowscdbi");
  expect(caesarCipher("bArk LikE A dOg", 17)).toBe("sRib CzbV R uFx");
  expect(caesarCipher("eat, my dog", 17)).toBe("vrk, dp ufx");
});
