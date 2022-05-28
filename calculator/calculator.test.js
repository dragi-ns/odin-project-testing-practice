/* eslint-disable no-prototype-builtins */
import calculator from './calculator';

test('calculator should have add method', () => {
  expect(calculator.hasOwnProperty('add')).toBe(true);
});

test('add method should correctly add two numbers', () => {
  expect(calculator.add(5, 2)).toBe(7);
});

test('calculator should have subtract method', () => {
  expect(calculator.hasOwnProperty('subtract')).toBe(true);
});

test('subtract method should correctly subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('calculator should have divide method', () => {
  expect(calculator.hasOwnProperty('divide')).toBe(true);
});

test('divide method should correctly divide two numbers', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('calculator should have multiply method', () => {
  expect(calculator.hasOwnProperty('multiply')).toBe(true);
});

test('multiply method should correctly multiply two numbers', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});
