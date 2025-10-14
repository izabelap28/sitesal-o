const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('.conteudo');

// função para trocar seções com animação
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active dos links e adiciona no clicado
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Seleciona a seção destino
    const destino = document.querySelector(link.getAttribute('href'));
    if (!destino) return;

    // Fade-out da seção atual
    const atual = document.querySelector('.conteudo.ativo');
    if (atual) {
      atual.style.opacity = 0;
      atual.style.transform = 'scale(0.97)';
      setTimeout(() => {
        atual.classList.remove('ativo');

        // Ativa a nova seção
        destino.classList.add('ativo');
        destino.style.opacity = 0;
        destino.style.transform = 'scale(0.97)';

        // Pequena pausa antes de fade-in
        setTimeout(() => {
          destino.style.transition = 'all 0.5s ease';
          destino.style.opacity = 1;
          destino.style.transform = 'scale(1)';

          // Destaque temporário: borda ou sombra
          destino.style.boxShadow = '0 0 25px rgba(255, 105, 180, 0.4)';
          setTimeout(() => destino.style.boxShadow = '0 0 0 rgba(0,0,0,0)', 500);
        }, 50);

        // Scroll suave até a seção
        destino.scrollIntoView({ behavior: 'smooth' });

      }, 300); // tempo do fade-out
    } else {
      // se não tinha seção ativa
      destino.classList.add('ativo');
      destino.style.opacity = 0;
      destino.style.transform = 'scale(0.97)';
      setTimeout(() => {
        destino.style.transition = 'all 0.5s ease';
        destino.style.opacity = 1;
        destino.style.transform = 'scale(1)';
      }, 50);
    }
  });
});
