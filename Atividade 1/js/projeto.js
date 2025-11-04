
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-grid .card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.backgroundColor = '#fff8dc';
      card.style.transition = '0.3s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.backgroundColor = '';
    });
  });
});
