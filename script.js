/* Shared site interactions */
(() => {
  const assets = window.CHEF_ABBYS_IMAGES || {};
  document.querySelectorAll('[data-image]').forEach(el => {
    const src = assets[el.dataset.image];
    if (src) el.src = src;
  });
  document.querySelectorAll('[data-bg-image]').forEach(el => {
    const src = assets[el.dataset.bgImage];
    if (src) el.style.backgroundImage = `url("${src}")`;
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      document.body.classList.remove('nav-open');
    }));
  }
  const navKey = {home:'home',about:'about',explore:'explore',recipes:'recipes',casof:'casof',journal:'journal',feast:'feast',work:'work',contact:'work'}[document.body.dataset.page];
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    if (a.dataset.navLink === navKey) a.classList.add('is-current');
  });
  document.querySelectorAll('[data-newsletter], [data-demo-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    if (feedback) feedback.textContent = form.hasAttribute('data-newsletter')
      ? 'Thanks for joining. Connect this form to the mailing list provider before launch.'
      : 'Thank you. This demo enquiry is ready. Connect a form service to receive real submissions.';
    form.reset();
  }));
  const copyButton = document.querySelector('[data-copy-link]');
  if (copyButton) copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      copyButton.textContent = 'Copied';
      setTimeout(() => copyButton.textContent = 'Copy link', 1600);
    } catch (_) { copyButton.textContent = 'Copy unavailable'; }
  });
})();
