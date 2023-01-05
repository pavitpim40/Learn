export function add(numbers) {
  if (arguments.length > 1) throw new Error('add function only accept one argument');
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
