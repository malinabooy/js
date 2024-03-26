const product = {
    name: 'stol',
    productPrice: 2000
}
console.log(product);

let price = product.productPrice;
console.log(price);

product.link = 'product/linkname.html';
console.log(product);
delete product.link;
console.log(product);