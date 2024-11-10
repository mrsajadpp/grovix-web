let navBtn = document.getElementById("navBtn");
let closeBtn = document.getElementById("closeBtn");
let navBar = document.getElementById("navBar");

navBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
});

// Select the header element
const header = document.querySelector(".header-mobile");
const headerDesk = document.querySelector(".header-desktop");

// Function to toggle the header background on scroll
function handleScroll() {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
        headerDesk.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        headerDesk.classList.remove("scrolled");
    }
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);
