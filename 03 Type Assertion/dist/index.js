"use strict";
// // const btn = document.getElementById("btn") as HTMLElement;
const myobj = {
    name: "Abhi",
    email: "abhi@gmail.com"
};
//keyOfOperator
// interface Person{
//   name : string;
//   email : string;
// }
const getName = () => {
    return myobj.name;
};
const getEmail = () => {
    return myobj.email;
};
const getData = (key) => {
    return myobj[key];
};
//keyOfOperator
// const getData = (key:"name" | "email"):string=>{
//     return myobj[key];
// }
alert(myobj.name);
alert(getData("email"));
