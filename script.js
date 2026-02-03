
// FILTRO DE PROJETOS
const botoesFiltro = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".card");

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filter;

    cards.forEach(card => {
      if (filtro === "all" || card.dataset.category === filtro) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const alvo = document.querySelector(this.getAttribute("href"));
    if (!alvo) return;

    alvo.scrollIntoView({
      behavior: "smooth"
    });
  });
});



// ANIMAÇÃO AO SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".projeto01, .projeto02, .projeto03, .sobre").forEach(el => {
  observer.observe(el);
});


// HOVER JS NOS CARDS
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach(b => b.classList.remove("active"));
    botao.classList.add("active");

    const filtro = botao.dataset.filter;

    cards.forEach(card => {
      if (filtro === "all" || card.dataset.category === filtro) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

card.style.opacity = "0";
setTimeout(() => {
  card.style.display = "block";
  card.style.opacity = "1";
}, 150);


