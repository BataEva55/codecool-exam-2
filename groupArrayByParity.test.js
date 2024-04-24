import test from "node:test";
import assert from "node:assert";
import { groupArrayByParity } from "./index.js";

test("should return an object with even and odd arrays", () => {
  const result = groupArrayByParity([1, 2, 3, 4, 5, 6]);
  assert.deepStrictEqual(result, { even: [2, 4, 6], odd: [1, 3, 5] });
});

test("should return an object with only odd or only even arrays", () => {
  const result1 = groupArrayByParity([2, 4, 6]);
  assert.deepStrictEqual(result1, { even: [2, 4, 6], odd: [] });

  const result2 = groupArrayByParity([1, 3, 5]);
  assert.deepStrictEqual(result2, { even: [], odd: [1, 3, 5] });
});

test("should return an empty even and odd array for empty input", () => {
  const result = groupArrayByParity([]);
  assert.deepStrictEqual(result, { even: [], odd: [] });
});

test("should throw an error if input is not an array", () => {
  assert.throws(() => groupArrayByParity("invalid"), /Input must be an array/);
  assert.throws(() => groupArrayByParity(123), /Input must be an array/);
});

test("should throw an error if elements are not all numbers", () => {
  assert.throws(
    () => groupArrayByParity([1, "two", 3]),
    /All elements must be numbers/
  );
  assert.throws(
    () => groupArrayByParity([1, null, 3]),
    /All elements must be numbers/
  );
});
