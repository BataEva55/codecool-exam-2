import test from "node:test";
import assert from "node:assert";
import { averageWordCount } from "./index.js";

test("should return the average number of words with length greater than minLength", () => {
  const result = averageWordCount(
    ["This is a test", "Another example here"],
    3
  );
  assert.strictEqual(result, 2.5);
});

test("should return a floating-point value for non-integer averages", () => {
  const result = averageWordCount(["Short", "Longer sentences are great"], 4);
  assert.strictEqual(result, 2);
});

test("should return 0 for an empty array", () => {
  const result = averageWordCount([], 3);
  assert.strictEqual(result, 0);
});

test("should handle cases where there are no words greater than minLength", () => {
  const result = averageWordCount(["No long words here", "Neither here"], 10);
  assert.strictEqual(result, 0);
});
