document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-list a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


function toggleMenu() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (menu.classList.contains("active")) {
        menu.style.height = "0";
        menu.style.padding = "0";
    } else {
        menu.style.height = "100vh";
        menu.style.padding = "20px 0";
    }

    menu.classList.toggle("active");
    hamburger.textContent = menu.classList.contains("active") ? "✖" : "☰";
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu");
        const hamburger = document.querySelector(".hamburger");

        menu.style.height = "0";
        menu.style.padding = "0";
        menu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});
