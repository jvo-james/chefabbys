(() => {
  const filters = document.querySelectorAll('[data-journal-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.toggle('is-active', b === btn));
    const category = btn.dataset.journalFilter;
    cards.forEach(card => card.hidden = !(category === 'all' || card.dataset.category === category));
  }));
})();
