// // const btn = document.getElementById("btn") as HTMLElement;

// // const btn =<HTMLElement> document.getElementById("btn")

// const btn = document.getElementById("btn")!
// btn.onclick

// // const img = document.getElementById("myimg") as HTMLImageElement;
// // img.src


// const img = document.querySelector("img")!
// img.src


// const form = document.getElementById("myform") as HTMLFormElement
// const myinput = document.querySelector("form >input") as HTMLInputElement
// form.onsubmit =(e: SubmitEvent)=>{
//     e.preventDefault();
//     const value = Number(myinput.value);
//     alert(value)
//     alert(typeof value);
//     const h2 = document.createElement("h2");
//     h2.textContent=String(value+20);
//     document.querySelector("body")?.append(h2);
// }

// // indexSignature
// interface Person{
//    [key:string]:string;
// }

const myobj : Person = {
    name : "Abhi",
    email : "abhi@gmail.com"
} 
// keyOfOperator
interface Person{
  name : string;
  email : string;
}
const getName = ():string=>{
    return myobj.name
}
const getEmail = ():string=>{
    return myobj.email
}


// const getData = (key:string):string =>{
//     return myobj[key]
// }

// keyOfOperator
const getData = (key:"name" | "email"):string=>{
    return myobj[key];
}
alert(myobj.name);
alert(getData("email"))