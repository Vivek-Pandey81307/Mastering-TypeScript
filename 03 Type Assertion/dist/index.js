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
    var _a;
    e.preventDefault();
    const value = Number(myinput.value);
    alert(value);
    alert(typeof value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.append(h2);
};
