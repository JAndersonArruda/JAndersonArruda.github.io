document.addEventListener("DOMContentLoaded", () => {
    const bootMenu = document.querySelector("#bootMenu");
    const itensMenu = document.querySelector(".item-nav");

    bootMenu.addEventListener("mousemove", () => bootMenu.style.cursor = "pointer");

    const closeMenu = () => itensMenu.style.display = "none";
    
    bootMenu.addEventListener("click", () => {
        if (itensMenu.style.display != "none") closeMenu();
        else itensMenu.style.display = "flex";
    });

    const itens = document.querySelectorAll("#item");
    if (window.innerWidth < 530) itens.forEach(item => item.addEventListener("click", closeMenu));
});