import image from "./bg2.jpeg"
export function createAbout(container) {
    let story = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent = "Our Story";
    let p = document.createElement("p");
    p.textContent = "At Modern, we believe that dining should be an experience,"+
        "not just a meal. Founded in 2004, our restaurant was born from a passion for culinary innovation and"+
        "a love for traditional cooking. We aim to bring you the best of both worlds, offering dishes that are"+
        "as unique as they are delicious. Our chefs are dedicated to using the freshest ingredients, ensuring"+
        "that every bite is a memorable one."
    story.appendChild(h1);
    story.appendChild(p);
    story.setAttribute("class", "story");

    let mession = document.createElement("div");
    let h2 = document.createElement("h1");
    h2.textContent = "Mission"
    let p2 = document.createElement("p");
    p2.textContent = "Our mission is to create a space where food lovers can come together to enjoy exceptional cuisine in a modern,"+
        "welcoming atmosphere. We are committed to quality, creativity, and a dining experience that keeps our guests coming back."
    mession.appendChild(h2);
    mession.appendChild(p2);
    mession.setAttribute("class", "mession");

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = image;
    imgDiv.appendChild(img);
    imgDiv.setAttribute("class", "image");

    container.appendChild(story);
    container.appendChild(mession);
    container.appendChild(imgDiv);
}