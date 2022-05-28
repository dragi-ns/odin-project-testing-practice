function getLowerCaseLetters() {
  const lowerCaseCharCodes = [];
  for (let i = 97; i <= 122; i += 1) {
    lowerCaseCharCodes.push(i);
  }
  return String.fromCharCode(...lowerCaseCharCodes);
}

function caesarCipher(text, shiftKey) {
  const LETTERS = getLowerCaseLetters();
  return text
    .split('')
    .map((character) => {
      const letterIndex = LETTERS.indexOf(character.toLowerCase());
      if (letterIndex === -1) {
        return character;
      }
      const letterShifted = LETTERS[(letterIndex + shiftKey) % 26];
      if (character.match(/[a-z]/) !== null) {
        return letterShifted;
      }
      return letterShifted.toUpperCase();
    })
    .join('');
}

export default caesarCipher;
