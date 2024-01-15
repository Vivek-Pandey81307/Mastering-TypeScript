"use strict";
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 100);
    }
}
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const abhi = new Player2(100, 230, 34, true);
