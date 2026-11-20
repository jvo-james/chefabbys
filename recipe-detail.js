(() => {
  let servings = 4;
  const count = document.querySelector('[data-serving-count]');
  const save = document.querySelector('[data-save-recipe]');
  if (save) {
    const key = 'chef-abbys-saved-recipes';
    const readSaved = () => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) { return []; } };
    const refresh = () => { const saved = readSaved().includes('jollof-rice'); save.textContent = saved ? 'Saved to favourites' : 'Save recipe'; save.setAttribute('aria-pressed', String(saved)); };
    refresh();
    save.addEventListener('click', () => { const saved = readSaved(); const next = saved.includes('jollof-rice') ? saved.filter(x => x !== 'jollof-rice') : [...saved, 'jollof-rice']; localStorage.setItem(key, JSON.stringify(next)); refresh(); });
  }
  const label = document.querySelector('[data-serves]');
  document.querySelectorAll('[data-serving-change]').forEach(button => button.addEventListener('click', () => {
    servings = Math.max(1, Math.min(12, servings + Number(button.dataset.servingChange)));
    if (count) count.textContent = servings;
    if (label) label.textContent = servings;
  }));
})();
