# orders/ subsystem notes

Order pricing depends on catalog discount data (`catalog/catalog.js`), not on any external
pricing service. `discount` on a catalog item is a fraction (0.2 means 20%), not a whole percent:
line total is `price * qty * (1 - discount)`. When editing pricing logic, re-run `npm test`;
`orders/orders.test.js` exercises both a discounted and a non-discounted line.
