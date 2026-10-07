const test = require("node:test");
const assert = require("node:assert/strict");

const { getTotalQuantity } = require("./tormi-viirg.cjs");

test("summing logic for multible items", () => {
    assert.equal(getTotalQuantity([{ quantity: 2}, {quantity: 3}, {quantity: 5}]), 10);
});

test("returns the quantity of a single item", () => {
    assert.equal(getTotalQuantity([{ quantity: 7 }]), 7);
});

test("returns 0 if an empty array gets passed in", () => {
    assert.equal(getTotalQuantity([]), 0);
});

test('handles zero quantities', () => {
  assert.equal(
    getTotalQuantity([{ quantity: 0 }, { quantity: 2 }, { quantity: 3 }]),
    5
  );
});

test("rejects a negative quantity", () => {
    assert.throws(
        () => getTotalQuantity([{ quantity: -2}, { quantity: 5}]),
        TypeError
    );
});

test('rejects a decimal quantity', () => {
  assert.throws(
    () => getTotalQuantity([{ quantity: 1.5 }]),
    TypeError
  );
});