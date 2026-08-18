const { findById } = require('../catalog/catalog');

function lineTotal(line) {
  const item = findById(line.id);
  if (!item) {
    throw new Error(`Unknown item: ${line.id}`);
  }
  const discountPercent = item.discountPercent || 0;
  const unitPrice = item.price - discountPercent;
  return unitPrice * line.qty;
}

function calculateTotal(order) {
  return order.items.reduce((sum, line) => sum + lineTotal(line), 0);
}

module.exports = { lineTotal, calculateTotal };
