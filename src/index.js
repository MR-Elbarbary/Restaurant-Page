import "./style.css";
//import { createHome } from "./home";

document.addEventListener("DOMContentLoaded", () =>{
    let container = document.getElementById("content");
    //createHome(container);
    // let homeBtn = document.getElementById("home");
    // homeBtn.addEventListener("click", ()=>{
    //     clean(container);
    //     createHome(container);
    // });
});

function clean(div) {
    div.innerHTML = "";
}