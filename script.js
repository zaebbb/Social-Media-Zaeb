let button = document.querySelector(".m-menu");
let sidebar = document.querySelector(".menu-sidebar");
button.addEventListener("click", () => {
    sidebar.classList.toggle("active")
});