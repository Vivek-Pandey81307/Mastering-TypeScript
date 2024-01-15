"use strict";
// // const btn = document.getElementById("btn") as HTMLElement;
const myobj = {
    name: "Abhi",
    email: "abhi@gmail.com"
};
// const getName = ():string=>{
//     return myobj.name
// }
// const getEmail = ():string=>{
//     return myobj.email
// }
// const getData = (key:string):string =>{
//     return myobj[key]
// }
// // keyOfOperator
// const getData = (key:keyof Person):string=>{
//     return myobj[key];
// }
// alert(myobj.name);
// alert(getData("email"))
let key = "name";
alert(myobj[key]);
alert(myobj["email"]);
