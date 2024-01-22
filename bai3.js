let phoneBook = [
    {
        name: "ailce",
        phoneNumber: "123-456-7890",
        email: "ailce@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
    {
        name: "Bob",
        phoneNumber: "987-654-3210",
        email: "bob@example.com",
        displayFullInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phoneNumber);
            console.log("Email: " + this.email);
        }
    },
];
for (var i = 0; i < phoneBook.length; i++) {
    var contact = phoneBook[i];
    contact.displayFullInfo();
    console.log("-------------------------------------");
}