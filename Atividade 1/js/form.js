
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formVoluntario');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const resumo = document.createElement('div');
    resumo.innerHTML = `
      <h3>✅ Inscrição enviada com sucesso!</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
    resumo.style.background = '#e0ffe0';
    resumo.style.padding = '10px';
    resumo.style.marginTop = '10px';

    form.insertAdjacentElement('afterend', resumo);
  });
});
