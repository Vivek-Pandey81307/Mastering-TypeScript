"use strict";
// type User = {
//     name : string,
//     email :string,
//     gender : boolean,
// }
// // type User2= Partial<User>
// // type User2 = Required<User>
// // const user:Readonly<User>={
// //     name :"abhi",
// //     email:"jaihind@gail.com"
// // }
// // user.name="narasj";
// type User2 = Record<"name"|"email"|"gender",string>
const users = {
    john: { age: 34 },
    elon: { age: 43 },
    andrew: { age: 32 },
    jack: { age: 23 },
};
