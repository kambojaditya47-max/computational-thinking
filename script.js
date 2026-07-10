// Fade-in animation on scroll

const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// Counter Animation (if counters are added later)

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        }
        else{
            counter.innerText = target;
        }
    };

    updateCounter();

});

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
    }
    else{
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    }

});

// Smooth button hover effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

console.log("Computational Thinking Website Loaded");