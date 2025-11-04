
document.addEventListener('DOMContentLoaded', () => {
 
  const pets = [
    { id: 1, nome: 'Rex', idade: '3 anos', porte: 'Médio', img: '/Atividade 1/img/download.jpg' },
    { id: 2, nome: 'Atena', idade: '6 meses', porte: 'Pequeno', img: '/Atividade 1/img/dog.jpg' },
    { id: 3, nome: 'Bruce', idade: '3 anos', porte: 'Grande', img: '/Atividade 1/img/grande.jpg' },
    { id: 4, nome: 'Luna', idade: '2 anos', porte: 'Pequeno', img: '/Atividade 1/img/bidu.jpg' }
  ];


  const adocaoSection = document.querySelector('.adocao') || document.getElementById('adocao') || (function(){
    const s = document.createElement('section');
    s.className = 'adocao';
    document.querySelector('main')?.appendChild(s);
    return s;
  })();

  
  const filterWrap = document.createElement('div');
  filterWrap.className = 'adocao-filtros';
  filterWrap.innerHTML = `
    <label>Filtrar por porte:
      <select id="filtro-porte">
        <option value="todos">Todos</option>
        <option value="Pequeno">Pequeno</option>
        <option value="Médio">Médio</option>
        <option value="Grande">Grande</option>
      </select>
    </label>
  `;
  adocaoSection.prepend(filterWrap);


  const list = document.createElement('div');
  list.className = 'adocao-list';
  adocaoSection.appendChild(list);

 
  function render(petsToRender) {
    list.innerHTML = '';
    petsToRender.forEach(p => {
      const card = document.createElement('article');
      card.className = 'pet-card';
      card.innerHTML = `
        <figure>
          <img src="${p.img}" alt="${p.nome}" width="300" loading="lazy">
          <figcaption>${p.nome} — ${p.idade} (${p.porte})</figcaption>
        </figure>
        <p>Idade: ${p.idade}</p>
        <p>Porte: ${p.porte}</p>
        <div class="actions">
          <button class="btn-saber" data-id="${p.id}">Saber mais</button>
          <button class="btn-adotar" data-id="${p.id}">Adotar</button>
        </div>
      `;
      list.appendChild(card);
    });
  }


  render(pets);


  const filtro = document.getElementById('filtro-porte');
  filtro.addEventListener('change', () => {
    const val = filtro.value;
    if (val === 'todos') render(pets);
    else render(pets.filter(p => p.porte === val));
  });

  
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const pet = pets.find(p => p.id === id);
    if (!pet) return;

    if (btn.classList.contains('btn-saber')) {
      
      showModal(`
        <h3>${pet.nome}</h3>
        <p><strong>Idade:</strong> ${pet.idade}</p>
        <p><strong>Porte:</strong> ${pet.porte}</p>
        <p>Descrição: Animal vacinado, castrado e pronto para adoção.</p>
      `);
    } else if (btn.classList.contains('btn-adotar')) {
    
      showModal(`
        <h3>Quero adotar ${pet.nome}</h3>
        <form id="adopt-form">
          <label>Nome completo<br><input name="nome" required></label><br>
          <label>Telefone ou e-mail<br><input name="contato" required></label><br>
          <input type="hidden" name="petId" value="${pet.id}">
          <div style="margin-top:8px;">
            <button type="submit">Enviar pedido</button>
          </div>
        </form>
      `);

    
      document.getElementById('adopt-form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        const fd = new FormData(ev.target);
        const nome = fd.get('nome');
    
        showModal(`<h3>Obrigado, ${nome}!</h3><p>Recebemos seu pedido para adoção de <strong>${pet.nome}</strong>. Em breve entraremos em contato.</p>`);
      });
    }
  });

  
  function showModal(htmlContent) {

    const existing = document.getElementById('simple-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'simple-modal';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(0,0,0,0.4)';
    overlay.style.zIndex = '9999';

    const box = document.createElement('div');
    box.style.maxWidth = '520px';
    box.style.background = '#fff';
    box.style.padding = '18px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
    box.innerHTML = `<div>${htmlContent}</div><div style="text-align:right;margin-top:12px;"><button id="modal-close">Fechar</button></div>`;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById('modal-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  }
});
