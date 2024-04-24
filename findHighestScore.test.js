import test from "node:test";
import assert from "node:assert";
import { findHighestScore } from "./index.js";

test("should return the name of the student with the highest score in a given subject", () => {
  const students = [
    { name: "Alice", math: 90, science: 85 },
    { name: "Bob", math: 95, science: 80 },
  ];
  const result = findHighestScore(students, "math");
  assert.strictEqual(result, "Bob");
});

test("should return the student with the only score in a given subject", () => {
  const students = [
    { name: "Alice", math: 90 },
    { name: "Bob", science: 95 },
  ];
  const result = findHighestScore(students, "math");
  assert.strictEqual(result, "Alice");
});

test("should return null if no student has a score for the specified subject", () => {
  const students = [
    { name: "Alice", math: 90 },
    { name: "Bob", science: 95 },
  ];
  const result = findHighestScore(students, "history");
  assert.strictEqual(result, null);
});

test("should return null for an empty array of students", () => {
  const result = findHighestScore([], "math");
  assert.strictEqual(result, null);
});
