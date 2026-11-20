/* Shared interactions for Chef Abbys World */
(() => {
  const assets = window.CHEF_ABBYS_IMAGES || {};

  document.querySelectorAll('[data-image]').forEach((element) => {
    const source = assets[element.dataset.image];
    if (source) element.src = source;
  });
  document.querySelectorAll('[data-bg-image]').forEach((element) => {
    const source = assets[element.dataset.bgImage];
    if (source) element.style.backgroundImage = `url("${source}")`;
  });
  document.querySelectorAll('[data-image-href]').forEach((element) => {
    const source = assets[element.dataset.imageHref];
    if (source) element.href = source;
  });
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const welcomeMark = document.querySelector('.akwaaba-mark');
  if (welcomeMark && 'IntersectionObserver' in window) {
    const welcomeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });
    welcomeObserver.observe(welcomeMark);
  } else {
    welcomeMark?.classList.add('is-visible');
  }

  const header = document.querySelector('[data-header]');
  let previousScroll = window.scrollY;
  let ticking = false;
  const updateHeader = () => {
    if (!header) return;
    const currentScroll = Math.max(0, window.scrollY);
    const navOpen = document.body.classList.contains('nav-open');
    header.classList.toggle('is-scrolled', currentScroll > 24);

    if (navOpen || currentScroll < 8) {
      header.classList.remove('is-hidden');
    } else if (currentScroll > previousScroll + 1) {
      header.classList.add('is-hidden');
    } else if (currentScroll < previousScroll - 1) {
      header.classList.remove('is-hidden');
    }
    previousScroll = currentScroll;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
  updateHeader();

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const focusableNavItems = () => nav ? [...nav.querySelectorAll('a[href]')] : [];
  const closeNavigation = ({ restoreFocus = false } = {}) => {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
    header?.classList.remove('is-hidden');
    if (restoreFocus) toggle.focus({ preventScroll: true });
  };
  const openNavigation = () => {
    if (!toggle || !nav) return;
    // A transformed header creates a containing block for fixed descendants.
    // Clear the hide-on-scroll state before revealing the full-screen menu.
    header?.classList.remove('is-hidden');
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    document.body.classList.add('nav-open');
    window.requestAnimationFrame(() => focusableNavItems()[0]?.focus({ preventScroll: true }));
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeNavigation({ restoreFocus: true });
      else openNavigation();
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeNavigation()));
    document.addEventListener('keydown', (event) => {
      if (!document.body.classList.contains('nav-open')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeNavigation({ restoreFocus: true });
        return;
      }
      if (event.key === 'Tab') {
        const items = [toggle, ...focusableNavItems()];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    document.addEventListener('click', (event) => {
      if (document.body.classList.contains('nav-open') && !header?.contains(event.target)) {
        closeNavigation();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeNavigation();
    });
  }

  const navKey = {
    home: 'home', about: 'about', explore: 'explore', recipes: 'recipes',
    casof: 'casof', journal: 'journal', feast: 'feast', work: 'work'
  }[document.body.dataset.page];
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    if (link.dataset.navLink === navKey) link.classList.add('is-current');
  });

  // The credit drawer is intentionally lightweight and works with keyboard input.
  const drawer = document.querySelector('[data-credit-drawer]');
  const creditOpen = document.querySelector('[data-credit-open]');
  const creditCloseButtons = document.querySelectorAll('[data-credit-close]');
  const closeCreditDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('credit-open');
    creditOpen?.focus({ preventScroll: true });
  };
  if (drawer && creditOpen) {
    creditOpen.addEventListener('click', () => {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('credit-open');
      drawer.querySelector('.credit-close')?.focus({ preventScroll: true });
    });
    creditCloseButtons.forEach((button) => button.addEventListener('click', closeCreditDrawer));
    drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('credit-open');
    }));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) closeCreditDrawer();
    });
  }

  document.querySelectorAll('[data-newsletter], [data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = form.hasAttribute('data-newsletter')
          ? 'Thanks for your interest. This form still needs to be connected to the mailing list.'
          : 'Thank you for reaching out. Your interest means a lot.';
      }
      form.reset();
    });
  });

  const copyButton = document.querySelector('[data-copy-link]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyButton.textContent = 'Copied';
      } catch (_) {
        copyButton.textContent = 'Copy unavailable';
      }
      window.setTimeout(() => { copyButton.textContent = 'Copy link'; }, 1600);
    });
  }
})();
