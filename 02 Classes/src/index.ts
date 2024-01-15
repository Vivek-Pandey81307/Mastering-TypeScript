class Player{
    public readonly id : string;
    constructor(
        private height : number,
        public weight :number,
        protected power : number

    ){
        this.id =String(Math.random()*100)
    }
    // getMyHeight = ()=>this.height;

    get getMyHeight():number{
        return this.height ;
    }
    set changeMyHeight(val:number){
        this.height = val 
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
const abhi = new Player(100,230,34);
console.log(abhi.getMyHeight)
abhi.changeMyHeight=500;
console.log(abhi.getMyHeight)

