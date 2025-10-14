// Seleciona todos os links e seções
const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('section');

// Mostra a seção inicial
document.querySelector('#inicio').classList.add('ativo');

// Função de troca de abas
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // remove classes ativas
    links.forEach(l => l.classList.remove('active'));
    secoes.forEach(s => s.classList.remove('ativo'));

    // ativa o link e a seção clicada
    link.classList.add('active');
    const destino = document.querySelector(link.getAttribute('href'));
    destino.classList.add('ativo');
  });
});
