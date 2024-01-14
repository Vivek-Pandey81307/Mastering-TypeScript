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
const funcArray = (m) => {
    return m;
};
funcArray([23, 28, 2, 3, 24, 34, 3, 43, 4, 34, 3]);
const funcRest = (...m) => {
    return m;
};
funcRest(23, 28, 2, 3, 24, 34, 3, 43, 4, 34, 3);
