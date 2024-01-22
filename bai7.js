function Invoice(number, creationDate, totalValue) {
    this.number = number;
    this.creationDate = creationDate;
    this.totalValue = totalValue;
}

let invoices = [];

function addInvoice() {
    let number = prompt("Nhập số hóa đơn:");
    let creationDate = prompt("Nhập ngày tạo hóa đơn:");
    let totalValue = parseFloat(prompt("Nhập tổng giá trị hóa đơn:"));

    let newInvoice = new Invoice(number, creationDate, totalValue);
    invoices.push(newInvoice);
    console.log("Hóa đơn đã được thêm vào danh sách.");
}
function displayInvoices() {
    console.log("Danh sách hóa đơn:");
    for (let i = 0; i < invoices.length; i++) {
        console.log("Hóa đơn " + (i + 1) + ":");
        console.log("Số hóa đơn: " + invoices[i].number);
        console.log("Ngày tạo: " + invoices[i].creationDate);
        console.log("Tổng giá trị: $" + invoices[i].totalValue.toFixed(2));
        console.log("\n");
    }
}
function calculateTotalValue() {
    let total = 0;
    for (let i = 0; i < invoices.length; i++) {
        total += invoices[i].totalValue;
    }
    return total.toFixed(2);
}
while (true) {
    let choice = prompt("Chọn một lựa chọn (1: Thêm hóa đơn, 2: Hiển thị danh sách hóa đơn, 3: Tính tổng giá trị, 4: Thoát):");
    switch (choice) {
        case "1":
            addInvoice();
            break;
        case "2":
            displayInvoices();
            break;
        case "3":
            console.log("Tổng giá trị của tất cả hóa đơn là: $" + calculateTotalValue());
            break;
        case "4":
            console.log("Chương trình đã kết thúc.");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}