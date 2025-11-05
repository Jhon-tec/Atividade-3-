document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("formVoluntario");e.addEventListener("submit",t=>{t.preventDefault();let n=document.getElementById("nome").value,a=document.getElementById("email").value,d=document.createElement("div");d.innerHTML=`
      <h3>✅ Inscri\xe7\xe3o enviada com sucesso!</h3>
      <p><strong>Nome:</strong> ${n}</p>
      <p><strong>Email:</strong> ${a}</p>
    `,d.style.background="#e0ffe0",d.style.padding="10px",d.style.marginTop="10px",e.insertAdjacentElement("afterend",d)})});