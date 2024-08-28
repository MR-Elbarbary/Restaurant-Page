import "./style.css";
import { createHome } from "./home";
import { createAbout } from "./about";
import { createMenu } from "./menu";

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
    let menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () =>{
        clean(container);
        createMenu(container);
    });
});

function clean(div) {
    div.innerHTML = "";
}