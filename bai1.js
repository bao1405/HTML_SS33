let person = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street"
};

console.log("Thông tin ban đầu:");
console.log(person);
console.log("\nTruy cập và hiển thị các thuộc tính:");
console.log("Tên: " + person.name);
console.log("Tuổi: " + person.age);
console.log("Địa chỉ: " + person.address);
person.birthDate = "1990-01-01";
console.log("\nSau khi thêm thuộc tính ngày sinh:");
console.log(person);
delete person.age;
console.log("\nSau khi xóa thuộc tính tuổi:");
console.log(person);