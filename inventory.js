// Assining Values to the key fields of Product object.
var products = [
    { name: "HP-Laptop-EliteBook", quantity: 10, price: "Rs. 150,000,000.00" },
    { name: "Del Desktop Core-I5", quantity: 20, price: "Rs. 1,100,000.00" },
    { name: "MacBook Pro", quantity: 5, price: "Rs. 300,000.00" },
];
// Calling product-table-body from HTML into typescript with the help of getElementByID.
var tableBody = document.getElementById('product-table-body');
if (tableBody) {
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);
        tableBody.appendChild(row);
    });
}
