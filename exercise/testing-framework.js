const { sum, subtract } = require("../math");

test("Sum Test", () => {
  const sum_result = sum(3, 7);
  const sum_expected = 10;
  expect(sum_result).toBe(sum_expected);
});

test("Subtraction Test", () => {
  const sub_result = subtract(7, 3);
  const sub_expected = 4;
  expect(sub_result).toBe(sub_expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (e) {
    console.error(`❌ ${title}`);
    console.error(e.message);
  }
  console.log();
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
