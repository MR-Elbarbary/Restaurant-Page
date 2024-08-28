import link1 from "./p1.jpg";
import link2 from "./p2.jpeg";
import link3 from "./p3.jpeg";

export function createMenu(container) {
    let menu = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent = "Menu"
    let p1 = document.createElement("p");
    p1.textContent = "Discover our carefully curated menu, where each dish is crafted with passion and precision."+
        "Whether you're in the mood for something traditional or looking to explore new flavors,"+
        "Modern has something to satisfy every palate."
    menu.appendChild(h1);
    menu.appendChild(p1);

    container.appendChild(menu)

    let plate1 = "Caesar Salad";
    let disc1 = "Crisp romaine lettuce, freshly grated Parmesan, and house-made croutons, drizzled with our signature Caesar dressing."
    let plate2 = "Fusion Pasta";
    let disc2 = "A delightful blend of Italian pasta and Asian-inspired flavors, topped with fresh herbs and a hint of spice."
    let plate3 = "Shrimp Scampi";
    let disc3 = "Succulent shrimp sautéed in garlic, white wine, and lemon butter sauce, served over linguine."

    container.appendChild(createCard(plate1, disc1, link1));
    container.appendChild(createCard(plate2, disc2, link2));
    container.appendChild(createCard(plate3, disc3, link3));

}

function createCard(plate, disc, link) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let h2 = document.createElement("h2");
    h2.textContent = plate;

    let img = document.createElement("img");
    img.setAttribute("class", "plate");
    img.src = link;

    let p = document.createElement("p");
    p.textContent = disc;

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(p);

    return card
}