const customerData = require('../data/customerData.json');

class CustomerList {
  constructor(customers = customerData) {
    this.customers = customers;
  }

  randomize() {
    for (let i = this.customers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.customers[i], this.customers[j]] = [this.customers[j], this.customers[i]];
    }
    return this;
  }

  get(count = this.customers.length) {
    this.customers = this.customers.slice(0, count);
    return this.customers;
  }
}

module.exports = CustomerList;