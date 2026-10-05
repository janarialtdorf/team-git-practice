const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidMinutes } = require("./janarialtdorf.cjs");

test("accepts a normal number of minutes", () => {
  assert.equal(isValidMinutes(30), true);
});

test("rejects invalid minutes", () => {
  assert.equal(isValidMinutes(0), false);
  assert.equal(isValidMinutes(181), false);
});

test("accepts the boundary value 180", () => {
  assert.equal(isValidMinutes(180), true);
});
