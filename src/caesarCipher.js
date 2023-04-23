function caesarCipher(string, shiftFactor) {
  // Create an empty string to store the result
  let result = "";
  let character = "";

  // Check if string
  if (typeof string !== "string") return "Not a string!";

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    character = string.charAt(i);

    if (
      character == " " ||
      character == "," ||
      character == "." ||
      character == "!" ||
      character == "?" ||
      character == `"` ||
      character == "'" ||
      character == "~" ||
      character == "@" ||
      character == ":" ||
      character == ";"
    ) {
      result += character;
      continue;
    }

    // Get the ASCII code of the current character
    character = character.charCodeAt(0);
    character = character + shiftFactor;

    // Check if the new ASCII code is outside of the range of letters
    if ((character > 90 && character < 97) || character > 122) {
      character -= 26;
    }

    // Convert the ASCII code back to a character and add it to the result
    character = String.fromCharCode(character);
    result += character;
  }
  // Return the result
  return result;
}
module.exports = caesarCipher;
