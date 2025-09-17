const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
         navLinks.forEach(link => link.classList.remove("active"));

         const id = entry.target.getAttribute("id");
      document.querySelector(`.nav-link[href="#${id}"]`).classList.add("active");
    }
  });
}, { threshold: 0.6 }); // ativa quando 60% da seção estiver visível

sections.forEach(section => observer.observe(section));

window.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});




