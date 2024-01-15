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
// // type User2 = Record<"name"|"email"|"gender",string>


// interface UserInfo{
//     age :number;
// }

// type UserName = "john" | "andrew"|"elon"|"jack";

// const users:Record<UserName,UserInfo>={
//     john:{age:34},
//     elon:{age:43},
//     andrew:{age:32},
//     jack:{age : 23},
// }

// interface OrderInfo{
//     readonly id : string,
//     user:string,
//     city:string,
//     state:string,
//     country:string,
//     status:string,
// }
// type ShippingInfo=Pick<OrderInfo,"city"|"state"|"country">;
// type ShippingInfo2=Omit<OrderInfo,"country">


type Random = Exclude<string |number,number>
type Random2= Extract<string|number|boolean,number>