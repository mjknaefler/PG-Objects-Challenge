let product = {
    name: 'Sun Glasses',
    price: 50,
    manufacturer: 'Oakley',
    category: "Apparel"
}
console.log(product);
product.description = 'Show off your new summer style with these sunglasses!';
console.log(product);
product.price += 10;
console.log(product);
delete product.description;
console.log(product);