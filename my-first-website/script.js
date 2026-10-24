console.log("AOT SCRIPT WORKING");

const logoFiles = [
    "images/emblem_1.png",
    "images/emblem_2.png",
    "images/emblem_3.png",
    "images/emblem_4.png"
];

const container = document.getElementById("falling-logos");

function createFallingLogo() {
    const logo = document.createElement("img");
    const randomIndex = Math.floor(Math.random() * logoFiles.length);

    logo.src = logoFiles[randomIndex];
    logo.className = "falling-logo";
    logo.alt = "";
    logo.style.left = Math.random() * 100 + "vw";

    const duration = 6 + Math.random() * 7;
    logo.style.animationDuration = duration + "s";

    const size = 25 + Math.random() * 25;
    logo.style.width = size + "px";
    logo.style.height = size + "px";
    logo.style.opacity = 0.15 + Math.random() * 0.25;

    container.appendChild(logo);

    setTimeout(() => {
        logo.remove();
    }, duration * 1000);
}

setInterval(createFallingLogo, 800);
const revealElements = document.querySelectorAll(
    'h1, body > p, nav, .menu-card, .about, .lll, .character-card, footer'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});