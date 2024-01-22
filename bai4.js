function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.displayInfo = function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("-------------------------------------");   
    };
}
function Library() {
    this.books = [];
    this.addBook = function(book) {
        this.books.push(book);
    };
    this.displayLibrary = function() {
        console.log("Danh sách sách trong thư viện:");
        for (var i = 0; i < this.books.length; i++) {
            console.log("Sách " + (i + 1) + ":");
            this.books[i].displayInfo();
        }
    };
}
let myLibrary = new Library();
let book1 = new Book("Sách 1", "Tác giả 1", 2020);
let book2 = new Book("Sách 2", "Tác giả 2", 2018);
let book3 = new Book("Sách 3", "Tác giả 3", 2022);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.displayLibrary();