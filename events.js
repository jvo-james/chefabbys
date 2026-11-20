(() => {
  const today = new Date(); today.setHours(0,0,0,0);
  document.querySelectorAll('[data-event-date]').forEach(card => {
    const date = new Date(card.dataset.eventDate + 'T00:00:00');
    const end = card.dataset.eventEnd ? new Date(card.dataset.eventEnd + 'T23:59:59') : date;
    const status = today < date ? 'Upcoming' : today <= end ? 'Ongoing' : 'Past event';
    let label = card.querySelector('[data-event-status]');
    if (!label) { label = document.createElement('span'); label.className = 'event-status'; card.querySelector('div:last-child')?.prepend(label); }
    if (label) label.textContent = status;
  });
})();
