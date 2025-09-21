document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
      }
    });
  });

  // Project Card Popup
  const cards = document.querySelectorAll(".grid-item.img-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const clone = card.cloneNode(true);
      modalBody.innerHTML = "";
      modalBody.appendChild(clone);
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
});

const img = document.getElementById("longImage");

    window.addEventListener("scroll", () => {
      const imgTop = img.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.8;
      if (imgTop < trigger) {
        img.classList.add("show");
      }
    });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

sections.forEach(section => observer.observe(section));