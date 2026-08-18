const items = [
  { id: 'sku-1', name: 'Widget', price: 10, discount: 0, tags: ['hardware', 'bestseller'] },
  { id: 'sku-2', name: 'Gadget', price: 25, discount: 0.2, tags: ['electronics', 'bestseller'] },
  { id: 'sku-3', name: 'Gizmo', price: 40, discount: 0.1, tags: ['electronics'] },
];

function listItems() {
  return items;
}

function findById(id) {
  return items.find((item) => item.id === id);
}

module.exports = { listItems, findById };
