// const func= (n:any):any=>{
//     return n;
// }
// const ans = func(20);

//generic

const func = <T>(n:T):T=>{
    return n;
}
const ans = func(20);
const ans2= func("string");
const ans3 = func(true);