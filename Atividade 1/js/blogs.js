
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.getElementById('posts');
  const loadBtn = document.getElementById('load-more-posts');
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');

  const noticias = [
    'Nova campanha de adoção começa amanhã!',
    'Evento de arrecadação arrecadou R$ 5.000!',
    'Conheça o novo abrigo inaugurado!',
  ];

  loadBtn.addEventListener('click', () => {
    posts.innerHTML = noticias.map(n => `<p>📰 ${n}</p>`).join('');
    loadBtn.textContent = 'Notícias carregadas!';
    loadBtn.disabled = true;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('name').value;
    feedback.textContent = `Obrigado, ${nome}! Você foi inscrito na newsletter.`;
    feedback.style.color = 'green';
  });
});
