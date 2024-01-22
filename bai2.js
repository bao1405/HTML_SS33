let phoneBook = [
    {
        name: "Alice",
        phoneNumber: "123-456-7890",
        email: "alice@example.com"
    },
    {
        name: "Bob",
        phoneNumber: "987-654-3210",
        email: "bobe@example.com"
    },
];
for (var i = 0; i < phoneBook.length; i++) {
    var contact = phoneBook[i];
    console.log("Tên: " + contact.name);
    console.log("Số điện thoại: " + contact.phoneNumber);
    console.log("Email: " + contact.email);
    console.log("------------------------------------------------------");
}