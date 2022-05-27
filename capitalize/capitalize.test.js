import capitalize from './capitalize';

test('capitalize capitalizes first character', () => {
  expect(capitalize('one')).toBe('One');
});

test('capitalize capitalizes only first character of the first word', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('capitalize returns empty string for empty input', () => {
  expect(capitalize()).toBe('');
});
