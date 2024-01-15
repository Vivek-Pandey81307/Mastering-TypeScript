"use strict";
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    // getMyHeight = ()=>this.height;
    get getMyHeight() {
        return this.height;
    }
    set changeMyHeight(val) {
        this.height = val;
    }
}
// class Player2 extends Player{
//     special : boolean;
//     constructor(height :number,weight:number
//         ,power : number ,special : boolean){
//             super(height,weight,power);
//             this.special = special;
//         }
//         getMyPower=()=>this.power;
// }
const abhi = new Player(100, 230, 34);
console.log(abhi.getMyHeight);
abhi.changeMyHeight = 500;
console.log(abhi.getMyHeight);
