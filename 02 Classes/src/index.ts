// class Player{
//     public readonly id : string;
//     constructor(
//         private height : number,
//         public weight :number,
//         protected power : number

//     ){
//         this.id =String(Math.random()*100)
//     }
//     // getMyHeight = ()=>this.height;

//     get getMyHeight():number{
//         return this.height ;
//     }
//     set changeMyHeight(val:number){
//         this.height = val 
//     }

// }
// // class Player2 extends Player{
// //     special : boolean;
// //     constructor(height :number,weight:number
// //         ,power : number ,special : boolean){
// //             super(height,weight,power);
// //             this.special = special;
            
// //         }
// //         getMyPower=()=>this.power;


// // }
// const abhi = new Player(100,230,34);
// console.log(abhi.getMyHeight)
// abhi.changeMyHeight=500;
// console.log(abhi.getMyHeight)

interface ProductType{
    name : string;
    price : number;
    stock : number;
    id : number;
    offer?:boolean;
}
interface GiveId{
    getId :number,
}
class Product implements ProductType,GiveId{
  
   public id : number = (Math.random()* 1000);
   
   constructor(public name : string, public price :number,public stock :number){
   
   }
   get getId(){return this.id};
}
const product1 = new Product ("Macbook",2000,20);
alert(product1.getId)