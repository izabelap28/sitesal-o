const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('.conteudo');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    secoes.forEach(sec => sec.classList.remove('ativo'));
    const alvo = document.querySelector(link.getAttribute('href'));
    alvo.classList.add('ativo');
  });
});
