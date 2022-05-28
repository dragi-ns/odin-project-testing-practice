function reverseString(string = '') {
  if (!string || string.trim().length === 0) {
    return '';
  }

  const reversedString = string.split('');
  for (let i = 0, j = reversedString.length - 1; i < j; i += 1, j -= 1) {
    const temp = reversedString[i];
    reversedString[i] = reversedString[j];
    reversedString[j] = temp;
  }
  return reversedString.join('');
}

export default reverseString;
