class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

let employeeList = [];
function addEmployee() {
    let name = prompt("Nhập tên nhân viên:");
    let age = parseInt(prompt("Nhập tuổi nhân viên:"));
    let salary = parseFloat(prompt("Nhập mức lương nhân viên:"));
    let newEmployee = new Employee(name, age, salary);
    employeeList.push(newEmployee);
    console.log("Nhân viên đã được thêm vào danh sách.");
}

function displayAllEmployees() {
    console.log("Danh sách nhân viên:");
    employeeList.forEach(employee => {
      console.log(`Tên: ${employee.name}, Tuổi: ${employee.age}, Lương: ${employee.salary}`);
    });
}
  
function sortEmployeesByAge() {
    employeeList.sort((a, b) => a.age - b.age);
    console.log("Danh sách nhân viên đã được sắp xếp theo tuổi tăng dần:");
    displayAllEmployees();
}
  
function calculateTotalSalary() {
    let totalSalary = employeeList.reduce((sum, employee) => sum + employee.salary, 0);
    console.log(`Tổng lương của toàn bộ công ty là: ${totalSalary}`);
}

function main() {
    let choice;
    do {
        console.log("\nChọn một trong các tùy chọn sau:");
        console.log("1. Thêm nhân viên mới");
        console.log("2. Hiển thị danh sách nhân viên");
        console.log("3. Sắp xếp theo tuổi");
        console.log("4. Hiển thị tổng lương");
        console.log("5. Thoát");
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
    switch (choice) {
        case 1:
          addEmployee();
          break;
        case 2:
          displayAllEmployees();
          break;
        case 3:
          sortEmployeesByAge();
          break;
        case 4:
          calculateTotalSalary();
          break;
        case 5:
          console.log("Chương trình đã kết thúc.");
          break;
        default:
          console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5);
  }
  
  main();