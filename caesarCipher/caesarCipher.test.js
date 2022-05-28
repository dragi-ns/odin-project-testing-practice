import caesarCipher from './caesarCipher';

test('caesarCipher should shift letter based on a shift key', () => {
  expect(caesarCipher('a', 2)).toBe('c');
});

test('caesarCipher should correctly wrap letter', () => {
  expect(caesarCipher('z', 2)).toBe('b');
});

test('caesarCipher should preserve the same case', () => {
  expect(caesarCipher('E', 2)).toBe('G');
});

test('caesarCipher should ignore non letter character', () => {
  expect(caesarCipher('!', 2)).toBe('!');
});

test('caesarCipher should correctly encrypt multiple letters', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('caesarCipher should correctly encrypt multiple letters 2', () => {
  expect(caesarCipher('Attack at DAWN!!!!', 17)).toBe('Rkkrtb rk URNE!!!!');
});
