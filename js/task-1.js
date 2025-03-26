// task-1.js

// task-1.js

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  
  // Kodları güncelledik
  getBalance() {
    return this.balance; // 'this' kullanarak balance'a erişiyoruz
  },
  
  getDiscount() {
    return this.discount; // 'this' kullanarak discount'a erişiyoruz
  },
  
  setDiscount(value) {
    this.discount = value; // 'this' kullanarak discount değerini güncelliyoruz
  },
  
  getOrders() {
    return this.orders; // 'this' kullanarak orders'a erişiyoruz
  },
  
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // 'this' kullanarak balance'ı güncelliyoruz
    this.orders.push(order); // 'this' kullanarak orders dizisine yeni siparişi ekliyoruz
  }
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
