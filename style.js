const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('.conteudo');

// troca de abas sem recarregar
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    secoes.forEach(sec => sec.classList.remove('ativo'));
    const destino = document.querySelector(link.getAttribute('href'));
    destino.classList.add('ativo');
  });
});
