import image from "./bg.jpeg";

export function createHome(container) {
    let welcome = document.createElement("div");   
    welcome.setAttribute("class", "welcome");
    let h1 = document.createElement("h1");
    h1.textContent = "welcome to Modern Restaurant"
    let p = document.createElement("p");
    p.textContent = "where culinary tradition meets contemporary elegance. Nestled in the heart of the city,"
    +" Modern offers a dining experience that is both sophisticated and inviting. Our mission is to provide our guests " +
    "with an unforgettable culinary journey that delights the senses and warms the soul."
    welcome.appendChild(h1);
    welcome.appendChild(p);

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "image");
    let img = document.createElement("img");
    img.src = image;
    img.setAttribute("class", "restaurant");
    img.setAttribute("alt", "the restaurant");
    imgDiv.appendChild(img);

    let toAction = document.createElement("div");
    toAction.setAttribute("class", "toAction");
    p.textContent = "Ready to experience the best of modern dining? Reserve your table today and join us for an unforgettable culinary adventure."
    let btn = document.createElement("button");
    btn.setAttribute("class", "action");    
    btn.textContent = "Call to Action";
    toAction.appendChild(p);
    toAction.appendChild(btn);

    container.appendChild(welcome);
    container.appendChild(imgDiv);
    container.appendChild(toAction);
};