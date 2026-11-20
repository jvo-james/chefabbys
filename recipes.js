(() => {
  const search = document.querySelector('#recipe-search');
  const cards = [...document.querySelectorAll('.recipe-card')];
  const empty = document.querySelector('[data-recipe-empty]');
  let country = 'all';
  const update = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = (country === 'all' || card.dataset.country === country) &&
        (!term || (card.dataset.search + ' ' + card.textContent).toLowerCase().includes(term));
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener('input', update);
  document.querySelectorAll('[data-recipe-filter]').forEach(btn => btn.addEventListener('click', () => {
    country = btn.dataset.recipeFilter;
    document.querySelectorAll('[data-recipe-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
    update();
  }));
})();
