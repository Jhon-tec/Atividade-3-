const form = document.getElementById('volunteer-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio real
  alert('Obrigado por se inscrever como voluntário!');
});


const botao = document.querySelector('.adocao button');
botao.addEventListener('click', function() {
  botao.textContent = 'Mais informações em breve!';
  botao.disabled = true;
});


const pets = document.querySelectorAll('.pet figure');
pets.forEach(function(pet) {
  pet.addEventListener('mouseenter', function() {
    pet.style.backgroundColor = '#ffeeba';
    pet.style.transition = '0.3s';
  });
  pet.addEventListener('mouseleave', function() {
    pet.style.backgroundColor = '';
  });
});
