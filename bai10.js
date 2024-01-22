class Product {
  constructor(id, name, price, expiryDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
  }
}

class Employee {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Invoice {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  getInvoiceValue() {
    return this.product.price * this.quantity;
  }
}

class Store {
  constructor() {
    this.products = [];
    this.employees = [];
    this.invoices = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  addInvoice(invoice) {
    this.invoices.push(invoice);
  }
  displayOverview() {
    console.log("Thông tin tổng quan về cửa hàng:");
    console.log(`Số lượng sản phẩm: ${this.products.length}`);
    console.log(`Số lượng nhân viên: ${this.employees.length}`);
    console.log(`Doanh thu: $${this.calculateTotalRevenue()}`);
  }
  calculateTotalRevenue() {
    return this.invoices.reduce((total, invoice) => total + invoice.getInvoiceValue(), 0);
  }
  setExpiryDate(productId, expiryDate) {
    const product = this.products.find(product => product.id === productId);
    if (product) {
      product.expiryDate = expiryDate;
      console.log(`Hạn sử dụng của sản phẩm ${product.name} đã được cập nhật.`);
    } else {
      console.log("Không tìm thấy sản phẩm với ID đã nhập.");
    }
  }
  checkExpiryProducts() {
    const today = new Date();
    const expiringProducts = this.products.filter(product => {
      if (product.expiryDate) {
        const expiryDate = new Date(product.expiryDate);
        return expiryDate > today && expiryDate - today <= 7 * 24 * 60 * 60 * 1000; // Sắp hết hạn trong vòng 7 ngày
      }
      return false;
    });
    if (expiringProducts.length > 0) {
      console.log("Sản phẩm sắp hết hạn sử dụng:");
      expiringProducts.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Hạn sử dụng: ${product.expiryDate}`);
      });
    } else {
      console.log("Không có sản phẩm nào sắp hết hạn sử dụng.");
    }
  }
}

let store = new Store();
let product1 = new Product(1, "Product A", 20, "21/01/2024");
let product2 = new Product(2, "Product B", 30, "15/02/2024");
store.addProduct(product1);
store.addProduct(product2);
let employee1 = new Employee(101, "John Doe", 28);
let employee2 = new Employee(102, "Jane Doe", 35);
store.addEmployee(employee1);
store.addEmployee(employee2);
let invoice1 = new Invoice(product1, 3);
let invoice2 = new Invoice(product2, 2);
store.addInvoice(invoice1);
store.addInvoice(invoice2);
store.displayOverview();
store.setExpiryDate(1, "25/01/2024");
store.checkExpiryProducts();
