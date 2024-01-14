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
const obj2 = { name: "chakravartin", age: 34 };
const myobject = { height: 34, weight: 43 };
const objfunc = (o1, o2) => {
    console.log(`o1 = ${JSON.stringify(o1)} end_o1`);
    console.log(`o2 = ${JSON.stringify(o2)} end_o2`);
};
objfunc(myobject, obj2);
