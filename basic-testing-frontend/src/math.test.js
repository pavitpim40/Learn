import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((a, c) => +a + +c, 0);
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provide', () => {
  const inputs = [1, 2, 'hi', 3];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string value is provide', () => {
  const inputs = ['1', '2'];

  const result = add(inputs);

  const expectedResult = inputs.reduce((a, c) => +a + +c, 0);
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provide', () => {
  const inputs = [];

  const result = add(inputs);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();

  // try {
  //   add();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = [1, 2, 3, 4];
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/add function only accept one argument/);
});
