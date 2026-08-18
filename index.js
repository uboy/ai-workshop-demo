const catalog = require('./catalog/catalog');
const { calculateTotal } = require('./orders/pricing');

function main() {
  console.log('Catalog:', catalog.listItems().map((item) => item.name).join(', '));
  const total = calculateTotal({ items: [{ id: 'sku-2', qty: 1 }] });
  console.log('Sample order total:', total);
}

if (require.main === module) {
  main();
}

module.exports = { main };
