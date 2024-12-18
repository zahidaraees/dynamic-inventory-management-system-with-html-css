// Inventory Management System-with HTML , CSS, TYPESCRIPT . 
// Initalizing of Product object with its fields type.
interface Product {
    name: string;
    quantity: number;
    price: string;
}


// Assining Values to the key fields of Product object.
const products: Product[] = [
    { name: "HP-Laptop-EliteBook", quantity: 10, price: "Rs. 150,000,000.00" },
    { name: "Del Desktop Core-I5", quantity: 20, price: "Rs. 1,100,000.00" },
    { name: "MacBook Pro", quantity: 5, price: "Rs. 300,000.00" },
];

// Calling product-table-body from HTML into typescript with the help of getElementByID.
const tableBody = document.getElementById('product-table-body');


if (tableBody) {
    products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}
