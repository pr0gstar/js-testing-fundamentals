const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const sum_result = sum(3, 7);
const sum_expected = 10;

if (sum_result !== sum_expected) {
  throw new Error(`${sum_result} is not equal to ${sum_expected}`);
}

const sub_result = substract(7, 3);
const sub_expected = 4;

if (sub_result !== sub_expected) {
  throw new Error(`${sub_result} is not equal to ${sub_expected}`);
}
