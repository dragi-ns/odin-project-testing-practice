/* eslint-disable no-prototype-builtins */
import analyzeArray from './analyzeArray';

test('analyzeArray return object should have average property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).hasOwnProperty('average')).toBe(true);
});

test('analyzeArray should correclty calculate average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('analyzeArray return object should have min property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).hasOwnProperty('min')).toBe(true);
});

test('analyzeArray should correclty get min value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('analyzeArray return object should have max property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).hasOwnProperty('max')).toBe(true);
});

test('analyzeArray should correclty get max value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('analyzeArray return object should have length property', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).hasOwnProperty('length')).toBe(true);
});

test('analyzeArray should correclty get length value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('analyzeArray should correclty analyze an array with an only one element', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test('analyzeArray should correclty handle an empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});
