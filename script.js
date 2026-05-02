//
// Hamburger menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing effect
const text = "Web Developer skilled in building responsive, user-friendly, and SEO-optimized websites";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;