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

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.books-container');
    const originalCards = Array.from(container.querySelectorAll('.book-card'));
    const totalCards = originalCards.length;

    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        container.appendChild(clone);
    });
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        container.insertBefore(clone, container.firstChild);
    });

    let cardWidth = originalCards[0].offsetWidth;

    container.scrollLeft = cardWidth * totalCards;

    window.addEventListener("resize", () => {
        cardWidth = originalCards[0].offsetWidth;
        container.scrollLeft = cardWidth * totalCards;
    });

    container.addEventListener('scroll', () => {
        if (container.scrollLeft <= 0) {
            container.scrollLeft = cardWidth * totalCards;
        } else if (container.scrollLeft >= cardWidth * (totalCards * 2)) {
            container.scrollLeft = cardWidth * totalCards;
        }
    });
});
