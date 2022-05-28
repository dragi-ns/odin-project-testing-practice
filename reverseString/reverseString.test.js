import reverseString from './reverseString';

test('reverseString should reverse a string', () => {
  expect(reverseString('one')).toBe('eno');
});

test('reverseString should reverse a string 2', () => {
  expect(reverseString('the quick brown fox jumped over a lazy dog!')).toBe(
    '!god yzal a revo depmuj xof nworb kciuq eht'
  );
});

test('reverseString should return an empty string for an empty input', () => {
  expect(reverseString()).toBe('');
});
