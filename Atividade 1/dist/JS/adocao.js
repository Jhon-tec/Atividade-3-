document.addEventListener("DOMContentLoaded",()=>{let e=[{id:1,nome:"Rex",idade:"3 anos",porte:"M\xe9dio",img:"/Atividade 1/img/download.jpg"},{id:2,nome:"Atena",idade:"6 meses",porte:"Pequeno",img:"/Atividade 1/img/dog.jpg"},{id:3,nome:"Bruce",idade:"3 anos",porte:"Grande",img:"/Atividade 1/img/grande.jpg"},{id:4,nome:"Luna",idade:"2 anos",porte:"Pequeno",img:"/Atividade 1/img/bidu.jpg"}],t=document.querySelector(".adocao")||document.getElementById("adocao")||function(){let e=document.createElement("section");return e.className="adocao",document.querySelector("main")?.appendChild(e),e}(),o=document.createElement("div");o.className="adocao-filtros",o.innerHTML=`
    <label>Filtrar por porte:
      <select id="filtro-porte">
        <option value="todos">Todos</option>
        <option value="Pequeno">Pequeno</option>
        <option value="M\xe9dio">M\xe9dio</option>
        <option value="Grande">Grande</option>
      </select>
    </label>
  `,t.prepend(o);let a=document.createElement("div");function d(e){a.innerHTML="",e.forEach(e=>{let t=document.createElement("article");t.className="pet-card",t.innerHTML=`
        <figure>
          <img src="${e.img}" alt="${e.nome}" width="300" loading="lazy">
          <figcaption>${e.nome} — ${e.idade} (${e.porte})</figcaption>
        </figure>
        <p>Idade: ${e.idade}</p>
        <p>Porte: ${e.porte}</p>
        <div class="actions">
          <button class="btn-saber" data-id="${e.id}">Saber mais</button>
          <button class="btn-adotar" data-id="${e.id}">Adotar</button>
        </div>
      `,a.appendChild(t)})}a.className="adocao-list",t.appendChild(a),d(e);let i=document.getElementById("filtro-porte");function n(e){let t=document.getElementById("simple-modal");t&&t.remove();let o=document.createElement("div");o.id="simple-modal",o.style.position="fixed",o.style.inset="0",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.background="rgba(0,0,0,0.4)",o.style.zIndex="9999";let a=document.createElement("div");a.style.maxWidth="520px",a.style.background="#fff",a.style.padding="18px",a.style.borderRadius="8px",a.style.boxShadow="0 6px 18px rgba(0,0,0,0.2)",a.innerHTML=`<div>${e}</div><div style="text-align:right;margin-top:12px;"><button id="modal-close">Fechar</button></div>`,o.appendChild(a),document.body.appendChild(o),document.getElementById("modal-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",e=>{e.target===o&&o.remove()})}i.addEventListener("change",()=>{let t=i.value;"todos"===t?d(e):d(e.filter(e=>e.porte===t))}),a.addEventListener("click",t=>{let o=t.target.closest("button");if(!o)return;let a=Number(o.dataset.id),d=e.find(e=>e.id===a);d&&(o.classList.contains("btn-saber")?n(`
        <h3>${d.nome}</h3>
        <p><strong>Idade:</strong> ${d.idade}</p>
        <p><strong>Porte:</strong> ${d.porte}</p>
        <p>Descri\xe7\xe3o: Animal vacinado, castrado e pronto para ado\xe7\xe3o.</p>
      `):o.classList.contains("btn-adotar")&&(n(`
        <h3>Quero adotar ${d.nome}</h3>
        <form id="adopt-form">
          <label>Nome completo<br><input name="nome" required></label><br>
          <label>Telefone ou e-mail<br><input name="contato" required></label><br>
          <input type="hidden" name="petId" value="${d.id}">
          <div style="margin-top:8px;">
            <button type="submit">Enviar pedido</button>
          </div>
        </form>
      `),document.getElementById("adopt-form").addEventListener("submit",e=>{e.preventDefault();let t=new FormData(e.target),o=t.get("nome");n(`<h3>Obrigado, ${o}!</h3><p>Recebemos seu pedido para ado\xe7\xe3o de <strong>${d.nome}</strong>. Em breve entraremos em contato.</p>`)})))})});