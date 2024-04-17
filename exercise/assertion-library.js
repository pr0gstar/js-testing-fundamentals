const { sum, substract } = require("../math");

const sum_result = sum(3, 7);
const sum_expected = 10;

expect(sum_result).toBe(sum_expected);

const sub_result = substract(7, 3);
const sub_expected = 4;

expect(sub_result).toBe(sub_expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
