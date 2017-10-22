/* eslint-env node, mocha */
import add from './add';

it('adds two numbers', () => {
  expect(add(5, 6)).toEqual(11);
  expect(add(120, 163)).toEqual(283);
});
