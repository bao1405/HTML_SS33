function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
    this.displayInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("Trạng thái: " + (this.isAvailable ? "Có sẵn" : "Đã mượn"));
        console.log("\n");
    };
    this.borrow = function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Sách '" + this.title + "' đã được mượn.");
        } else {
            console.log("Sách '" + this.title + "' không khả dụng để mượn.");
        }
    };
    this.returnBook = function() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Sách '" + this.title + "' đã được trả.");
        } else {
            console.log("Sách '" + this.title + "' đã có sẵn trong thư viện.");
        }
    };
}
function Library() {
    this.books = [];
    this.addBook = function(book) {
        this.books.push(book);
    };
    this.isBookAvailable = function(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return this.books[i].isAvailable;
            }
        }
        return false;
    };
}
let myLibrary = new Library();
let book1 = new Book("Sách 1", "Tác giả 1", 2020);
let book2 = new Book("Sách 2", "Tác giả 2", 2018);
let book3 = new Book("Sách 3", "Tác giả 3", 2022);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
console.log("Thông tin sách trước khi mượn/trả:");
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();
book1.borrow();
book2.borrow();
book3.returnBook();
console.log("Thông tin sách sau khi mượn/trả:");
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();
console.log("Kiểm tra sách có sẵn để mượn hay không:");
console.log("Sách 1: " + (myLibrary.isBookAvailable("Sách 1") ? "Có sẵn" : "Đã mượn"));
console.log("Sách 2: " + (myLibrary.isBookAvailable("Sách 2") ? "Có sẵn" : "Đã mượn"));
console.log("Sách 3: " + (myLibrary.isBookAvailable("Sách 3") ? "Có sẵn" : "Đã mượn"));
