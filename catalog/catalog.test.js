const test = require('node:test');
const assert = require('node:assert/strict');
const { listItems, findById } = require('./catalog');

test('listItems returns all catalog items', () => {
  assert.equal(listItems().length, 3);
});

test('findById returns the matching item', () => {
  const item = findById('sku-2');
  assert.equal(item.name, 'Gadget');
});

test('findById returns undefined for an unknown id', () => {
  assert.equal(findById('sku-does-not-exist'), undefined);
});
