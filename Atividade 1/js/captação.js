

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('donation-form');
  const progressFill = document.getElementById('progress-fill');
  const progressMeta = document.getElementById('progress-meta');

  let total = 0;
  const meta = 1000;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const valor = Number(
      form.amount_custom.value ||
      (form.amount.value ? form.amount.value : 0)
    );

    total += valor;
    const porcentagem = Math.min((total / meta) * 100, 100);
    progressFill.style.width = `${porcentagem}%`;
    progressMeta.textContent = `R$ ${total} arrecadados de R$ ${meta} (${Math.round(porcentagem)}%)`;

    alert(`Obrigado pela doação de R$${valor.toFixed(2)}!`);
  });
});
