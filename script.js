// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    menuBtn.textContent =
        menu.classList.contains("active") ? "✕" : "☰";
});


// Frases aleatórias
const quotes = [
    "As coisas que você possui acabam possuindo você.",
    "É somente depois de perder tudo que somos livres para fazer qualquer coisa.",
    "Você não é o seu trabalho.",
    "Você não é quanto dinheiro tem no banco.",
    "Você não é o carro que dirige."
];

const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");

quoteBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.style.opacity = "0";

    setTimeout(() => {
        quote.textContent = `"${quotes[randomIndex]}"`;
        quote.style.opacity = "1";
    }, 200);
});


// Animação simples ao aparecer na tela
const posts = document.querySelectorAll(
    ".post, .rules-grid article, .manifesto-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

posts.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);
});
