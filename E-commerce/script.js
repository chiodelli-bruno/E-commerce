// Selección de elementos del DOM
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

// Función para cerrar el menú
close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});

// Función para abrir el menú
open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});
