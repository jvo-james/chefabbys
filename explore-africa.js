(() => {
  const notes = {
    Ghana: 'Ghana is home to dishes such as waakye, kenkey and jollof. Chef Abbys has described waakye and kenkey among her favourite foods to cook.',
    Benin: 'Amiwo is one of the Beninese dishes featured in Chef Abbys’ African food storytelling.',
    'Burkina Faso': 'Babenda is one of the dishes that introduced audiences to Burkina Faso’s food traditions.',
    Togo: 'Togo was one of the stops announced for the 2026 West Africa Food Tour.',
    Senegal: 'Senegal was one of the stops announced for the 2026 West Africa Food Tour.',
    'Cabo Verde': 'Cabo Verde featured in the West Africa Food Tour announcement.',
    'Côte d’Ivoire': 'Côte d’Ivoire was one of the stops named in the announced West Africa Food Tour.'
  };
  const regions = {
    west:[['Benin','BJ'],['Burkina Faso','BF'],['Cabo Verde','CV'],['Côte d’Ivoire','CI'],['Gambia','GM'],['Ghana','GH'],['Guinea','GN'],['Guinea-Bissau','GW'],['Liberia','LR'],['Mali','ML'],['Mauritania','MR'],['Niger','NE'],['Nigeria','NG'],['Senegal','SN'],['Sierra Leone','SL'],['Togo','TG']],
    north:[['Algeria','DZ'],['Egypt','EG'],['Libya','LY'],['Morocco','MA'],['Sudan','SD'],['Tunisia','TN']],
    east:[['Burundi','BI'],['Comoros','KM'],['Djibouti','DJ'],['Eritrea','ER'],['Ethiopia','ET'],['Kenya','KE'],['Madagascar','MG'],['Mauritius','MU'],['Rwanda','RW'],['Seychelles','SC'],['Somalia','SO'],['South Sudan','SS'],['Tanzania','TZ'],['Uganda','UG']],
    central:[['Angola','AO'],['Cameroon','CM'],['Central African Republic','CF'],['Chad','TD'],['Congo','CG'],['DR Congo','CD'],['Equatorial Guinea','GQ'],['Gabon','GA'],['Sao Tome and Principe','ST']],
    south:[['Botswana','BW'],['Eswatini','SZ'],['Lesotho','LS'],['Malawi','MW'],['Mozambique','MZ'],['Namibia','NA'],['South Africa','ZA'],['Zambia','ZM'],['Zimbabwe','ZW']]
  };
  const result = document.querySelector('[data-map-note]');
  const countryList = document.querySelector('.country-list');
  const countryLink = document.querySelector('[data-country-link]');
  const slug = name => encodeURIComponent(name);
  function selectCountry(name) {
    document.querySelectorAll('[data-country]').forEach(btn => btn.classList.toggle('is-selected', btn.dataset.country === name));
    if (result) result.textContent = notes[name] || 'This country is part of the wider food explorer. Its profile will grow as dish research and travel notes are confirmed.';
    if (countryLink) {
      countryLink.href = `country.html?name=${slug(name)}`;
      countryLink.hidden = false;
    }
  }
  function wireCountries() {
    document.querySelectorAll('[data-country]').forEach(btn => btn.addEventListener('click', () => selectCountry(btn.dataset.country)));
  }
  function renderRegion(region) {
    if (!countryList) return;
    countryList.innerHTML = regions[region].map(c => `<button type="button" data-country="${c[0]}"><span>${c[1]}</span><b>${c[0]}</b><small>${notes[c[0]] ? 'Featured food notes' : 'Country notebook / research to add'}</small><i>↗</i></button>`).join('');
    wireCountries();
  }
  renderRegion('west');
  selectCountry('Ghana');
  document.querySelectorAll('[data-region]').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-region]').forEach(t => t.classList.toggle('is-active', t === tab));
    const region = tab.dataset.region;
    renderRegion(region);
    if (result) result.textContent = region === 'west' ? 'Select a country to see its featured dishes and story.' : 'Select a country to open its notebook. Country-specific dish research will be added as it is verified.';
    if (countryLink) countryLink.hidden = true;
  }));
})();
