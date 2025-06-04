
const content = document.getElementById("content");

//headerButtons
const buttonMenu = document.getElementById("buttonMenu");
const buttonHome = document.getElementById("buttonHome");
const buttonAbout = document.getElementById("buttonAbout");

buttonMenu.addEventListener("click", ()=> {
    content.innerHTML = '';
    //menu
    const menu = document.createElement("div");

    const list = document.createElement("ul");
    const pepperoni = document.createElement("li");
    pepperoni.textContent = "Pepperoni";
    const mushrooms = document.createElement("li");
    mushrooms.textContent = "Mushrooms";
    const margherita = document.createElement("li");
    margherita.textContent = "Cheesy cheese";

    content.appendChild(menu);
    menu.appendChild(list);
    list.appendChild(pepperoni);
    list.appendChild(mushrooms);
    list.appendChild(margherita);
});





//home
buttonHome.addEventListener("click", ()=> {
    content.innerHTML = "";

    const divWelcome = document.createElement("div");
    divWelcome.textContent = "Welcome to";
    const divName = document.createElement("div");
    divName.textContent = "Grand pizzeria";
    const divSlogan = document.createElement("div");
    divSlogan.textContent = "Best pizza in city since 1210";
    const img = document.createElement("img");
    img.src = "./imgs/Pizza.webp";
    img.alt = "Pizza";

    content.appendChild(divWelcome);
    content.appendChild(divName);
    content.appendChild(divSlogan);
    content.appendChild(img);
});

buttonHome.click();
