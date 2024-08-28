import "./style.css";
import { createHome } from "./home";
import { createAbout } from "./about";

document.addEventListener("DOMContentLoaded", () =>{
    let container = document.getElementById("content");
    createHome(container);
    let homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", ()=>{
        clean(container);
        createHome(container);
    });
    let aboutBtn = document.getElementById("about");
    aboutBtn.addEventListener("click", () =>{
        clean(container);
        createAbout(container);
    });
});

function clean(div) {
    div.innerHTML = "";
}