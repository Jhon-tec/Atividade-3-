
document.addEventListener('DOMContentLoaded', () => {
  console.log("Painel Administrativo carregado ✅");

  
  document.querySelectorAll('table tbody tr').forEach(linha => {
    linha.addEventListener('mouseenter', () => {
      linha.style.backgroundColor = '#f1f5f9';
      linha.style.transition = '0.2s';
    });
    linha.addEventListener('mouseleave', () => {
      linha.style.backgroundColor = '';
    });
  });

  
  const stats = document.querySelectorAll('.stat p strong');
  const btnAtualizar = document.createElement('button');
  btnAtualizar.textContent = 'Atualizar dados';
  btnAtualizar.style.margin = '1rem 0';
  btnAtualizar.style.padding = '8px 14px';
  btnAtualizar.style.border = 'none';
  btnAtualizar.style.borderRadius = '6px';
  btnAtualizar.style.background = 'linear-gradient(90deg, #00aaff, #00cc88)';
  btnAtualizar.style.color = 'white';
  btnAtualizar.style.cursor = 'pointer';

  const painel = document.querySelector('.panel');
  painel.insertBefore(btnAtualizar, painel.firstChild);

  btnAtualizar.addEventListener('click', () => {
    stats.forEach(stat => {
      const valorAtual = Number(stat.textContent.replace(/\D/g, '')) || 0;
      const novoValor = valorAtual + Math.floor(Math.random() * 20 + 1);
      stat.textContent = valorAtual.toString().includes('R$')
        ? `R$ ${novoValor.toLocaleString('pt-BR')}`
        : novoValor;
    });
    alert('📈 Dados atualizados com sucesso!');
  });

  
  const filtro = document.createElement('input');
  filtro.type = 'text';
  filtro.placeholder = 'Filtrar registros...';
  filtro.style.padding = '8px';
  filtro.style.width = '100%';
  filtro.style.borderRadius = '6px';
  filtro.style.border = '1px solid #ccc';
  filtro.style.margin = '0.5rem 0 1rem';

  const primeiraTabela = document.querySelector('.panel table');
  primeiraTabela.parentElement.insertBefore(filtro, primeiraTabela);

  filtro.addEventListener('input', () => {
    const termo = filtro.value.toLowerCase();
    document.querySelectorAll('tbody tr').forEach(linha => {
      const textoLinha = linha.textContent.toLowerCase();
      linha.style.display = textoLinha.includes(termo) ? '' : 'none';
    });
  });


  const footer = document.querySelector('footer p');
  const data = new Date();
  footer.textContent += ` | Último acesso: ${data.toLocaleString('pt-BR')}`;
});
