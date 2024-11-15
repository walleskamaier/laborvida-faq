document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const expanded = button.getAttribute('aria-expanded') === 'true';
  
        // Fecha todos os itens abertos
        accordionButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  
        // Abre o item atual se ele estava fechado
        if (!expanded) {
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  // testando um texto aleatório
  // testando de novo um texto aleatório pra ver se tem alguma mudança