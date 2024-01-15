"use strict";
// class Player{
//     public readonly id : string;
//     constructor(
//         private height : number,
//         public weight :number,
//         protected power : number
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = (Math.random() * 1000);
    }
    get getId() { return this.id; }
    ;
}
const product1 = new Product("Macbook", 2000, 20);
alert(product1.getId);
