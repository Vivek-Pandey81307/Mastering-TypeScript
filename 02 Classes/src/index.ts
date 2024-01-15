class Player{
    public readonly id : string;
    constructor(
        private height : number,
        public weight :number,
        protected power : number

    ){
        this.id =String(Math.random()*100)
    }
    getMyHeight = ()=>this.height;

}
class Player2 extends Player{
    special : boolean;
    constructor(height :number,weight:number
        ,power : number ,special : boolean){
            super(height,weight,power);
            this.special = special;
            
        }
        getMyPower=()=>this.power;


}
const abhi = new Player2(100,230,34,true);
