class Employee {
    constructor(id, name, age, department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
    }
}
  
class Invoice {
    constructor(id, name, balance, createDate) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.createDate = createDate;
    }
}
  
let employees = [
    new Employee(1, "John Doe", 30, "IT"),
    new Employee(2, "Jane Doe", 28, "Finance"),
    new Employee(3, "Bob Smith", 35, "HR"),
];
  
let invoices = [
    new Invoice(101, "Invoice 1", 5000, "2024-01-22"),
    new Invoice(102, "Invoice 2", 3000, "2024-01-21"),
];
  
function displayBusinessOverview() {
    console.log("Thông tin tổng quan về doanh nghiệp:");
    console.log(`Số lượng nhân viên: ${employees.length}`);
    console.log(`Giá trị hóa đơn: $${invoices.reduce((sum, invoice) => sum + invoice.balance, 0)}`);
}
  
function searchById(id) {
    let employeeResult = employees.find(employee => employee.id === id);
    let invoiceResult = invoices.find(invoice => invoice.id === id);
    if (employeeResult) {
      console.log("Thông tin nhân viên:");
      console.log(`ID: ${employeeResult.id}, Tên: ${employeeResult.name}, Tuổi: ${employeeResult.age}, Phòng ban: ${employeeResult.department}`);
    } else if (invoiceResult) {
      console.log("Thông tin hóa đơn:");
      console.log(`ID: ${invoiceResult.id}, Tên hóa đơn: ${invoiceResult.name}, Số dư: $${invoiceResult.balance}, Ngày tạo: ${invoiceResult.createDate}`);
    } else {
      console.log("Không tìm thấy đối tượng với ID đã nhập.");
    }
}

function generateReport() {
    let departmentCount = {};
    employees.forEach(employee => {
      if (departmentCount[employee.department]) {
        departmentCount[employee.department]++;
      } else {
        departmentCount[employee.department] = 1;
      }
    });
    console.log("Báo cáo thống kê:");
    console.log("Số lượng nhân viên theo phòng ban:");
    for (let department in departmentCount) {
      console.log(`${department}: ${departmentCount[department]} nhân viên`);
    }
    console.log(`Tổng số phòng ban: ${Object.keys(departmentCount).length}`);
    console.log(`Tổng số hóa đơn: ${invoices.length}`);
}
displayBusinessOverview();
let searchId = parseInt(prompt("Nhập ID để tìm kiếm:"));
searchById(searchId);
generateReport();