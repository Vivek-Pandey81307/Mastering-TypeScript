"use strict";
// // const func= (n:any):any=>{
// //     return n;
// // }
// // const ans = func(20);
const users = [
    { name: "aghil", age: 34 },
    { name: "chakiv", age: 32 },
    { name: "sajjo", age: 23 },
    { name: "vakilsh", age: 72 }
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "aghil");
const filteredPeopleByAge = filterByPeoples(users, "age", 32);
alert(JSON.stringify(filteredPeopleByName));
alert(JSON.stringify(filteredPeopleByAge));
