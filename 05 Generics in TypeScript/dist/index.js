"use strict";
// // // const func= (n:any):any=>{
// // //     return n;
// // // }
// // // const ans = func(20);
// // //generic
// // // const func = <T>(n:T):T=>{
// // //     return n;
// // // }
// // // const ans = func(20);
// // // const ans2= func("string");
// // // const ans3 = func(true);
// // // type Person = {
// // //     name :string,
// // //     age :number
// // // }
// // // const func = <T>(n:T):T=>{
// // //     return n;
// // // }
// // // const abhi:Person = {name:"Rahj",age:34}
// // // const ans = func<Person>(abhi)
// // // alert(JSON.stringify(ans))
// // const arr:number[]=[]
// // const arr2:Array<number>=[]
// // const func = < T ,U>(n:T ,o:U):{n:T,o:U}=>{
// //     return {n,o};
// // }
// // // const ans = func<number,string>(20,"lol");
// // // console.log(ans.n)
// // type Person={
// //     name :string,age:number
// // }
// // const func = < T , U extends T>(n:T ,o:U):{n:T,o:U}=>{
// //     return {n,o};
// // }
// // const ans = func<Person ,{name:string,age:number,email:string}>({name:"akash",age:34},{name:"sakhal",age:23,email:"chakravartin"});
// type Person={name:string,age:number}
// const users:Person[]=[
//     {name:"aghil",age:34},
//     {name:"chakiv",age:32},
//     {name :"sajjo",age:23},
//     {name:"vakilsh",age:72}
// ]
// const filterByPeoples = <T,Key extends keyof T>(arr:T[],property:Key,value:T[Key]):T[]=>{
//    return  arr.filter(item=>item[property]===value)
// }
// const filteredPeopleByName = filterByPeoples(users,"name","aghil")
// const filteredPeopleByAge = filterByPeoples(users,"age",32)
// alert(JSON.stringify(filteredPeopleByName))
// alert(JSON.stringify(filteredPeopleByAge))
