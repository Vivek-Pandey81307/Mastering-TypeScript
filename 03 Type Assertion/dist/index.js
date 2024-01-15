"use strict";
// // const btn = document.getElementById("btn") as HTMLElement;
// // const btn =<HTMLElement> document.getElementById("btn")
// const btn = document.getElementById("btn")!
// btn.onclick
// // const img = document.getElementById("myimg") as HTMLImageElement;
// // img.src
// const img = document.querySelector("img")!
// img.src
const form = document.getElementById("myform");
const myinput = document.querySelector("form >input");
form.onsubmit = (e) => {
    e.preventDefault();
    alert(myinput.value);
};
