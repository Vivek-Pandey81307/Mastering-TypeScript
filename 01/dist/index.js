"use strict";
// type userName = ( n:number ,m : number )=> void; 
// const func : userName= (n,m)=>{alert(n*m)}
// alert(typeof(func(3,4)))
// // let arr : number[];
// // const arr2 :Array<string>= ["Hello","Sir","Good Morning"]
// // var arr3 : Array<boolean>=new Array(2);
// // arr3 =[true,false,false,true]
// // arr2.forEach(i=>{
// //     alert(i);
// // })
// // const arr : [number,number,number] = [324,234,234];
// type obj1 = {height : number,weight :number}
// const obj2:{name : string,age:number} = {name : "chakravartin",age:34}
// const myobject : obj1 = {height:34,weight:43}
// const objfunc = (o1 :obj1 ,o2 :{name : string,age:number})=>{
//     console.log(`o1 = ${JSON.stringify(o1)} end_o1`);
//     console.log(`o2 = ${JSON.stringify(o2)} end_o2`);
// }
// objfunc(myobject,obj2)
//  interface Obj {
//     height :number,
//     f_name : string,
//     gender?:boolean
//  };
//  interface NewObj extends Obj{
//     scholarship :boolean,
//     func:(n:number,m:number)=>void;
//  }
//  const gigi : NewObj = {
//     scholarship:true,
//     height : 234,
//     f_name : "vikas",
//     func : (n,m)=>{alert(n*m)}
//  }
//  gigi.func(3,4)
//  alert(JSON.stringify(gigi))
// type funcTypeDefined  = (n :number ,m : number ,l ?:number)=>number|string;
// const funcMade :funcTypeDefined=(n,m,l)=>{
//     if(typeof l === "undefined") return "L was not provided"
//     return m*n*l
// }
// alert(funcMade(2,3,2))
//datatype  defining
// type FuncType = (n:number,m:number,l?:number)=>number;
//then defining
// const funcCreated :FuncType = (n,m,l=20)=>{
//     return n*m*l;
// };
// funcCreated(25,23)
//Defining + datatype Defining 
// const func1 = (n:number,m:number,l:number=20):number=>{
//     return n*m*l
// }
// func1(25,23);
