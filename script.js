const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));

    // Espere até que a seção de destino seja carregada antes de rolar para ela
    targetSection.addEventListener('load', function() {
      const offset = targetSection.offsetTop - document.header.offsetHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });
}
