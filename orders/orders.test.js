const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTotal } = require('./pricing');

test('applies the catalog discount to a discounted line', () => {
  const total = calculateTotal({ items: [{ id: 'sku-2', qty: 1 }] });
  assert.equal(total, 20); // 25 * (1 - 0.2)
});

test('sums multiple lines with mixed discounts', () => {
  const total = calculateTotal({
    items: [
      { id: 'sku-1', qty: 2 }, // no discount: 10 * 2
      { id: 'sku-3', qty: 1 }, // 10% off: 40 * 0.9
    ],
  });
  assert.equal(total, 56);
});
