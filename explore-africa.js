(() => {
  const countries = [
    {name:'Algeria',code:'DZ',region:'North Africa',capital:'Algiers',lon:3.06,lat:36.75},
    {name:'Angola',code:'AO',region:'Central Africa',capital:'Luanda',lon:13.23,lat:-8.84},
    {name:'Benin',code:'BJ',region:'West Africa',capital:'Porto-Novo',lon:2.63,lat:6.50,featured:'Amiwo is one of the Beninese dishes in Chef Abbys’ food storytelling.'},
    {name:'Botswana',code:'BW',region:'Southern Africa',capital:'Gaborone',lon:25.92,lat:-24.65},
    {name:'Burkina Faso',code:'BF',region:'West Africa',capital:'Ouagadougou',lon:-1.52,lat:12.37,featured:'Babenda is one of the dishes that introduced audiences to Burkina Faso’s food traditions.'},
    {name:'Burundi',code:'BI',region:'East Africa',capital:'Gitega',lon:29.92,lat:-3.43},
    {name:'Cabo Verde',code:'CV',region:'West Africa',capital:'Praia',lon:-23.51,lat:14.93},
    {name:'Cameroon',code:'CM',region:'Central Africa',capital:'Yaoundé',lon:11.52,lat:3.87},
    {name:'Central African Republic',code:'CF',region:'Central Africa',capital:'Bangui',lon:18.56,lat:4.36},
    {name:'Chad',code:'TD',region:'Central Africa',capital:'N’Djamena',lon:15.05,lat:12.13},
    {name:'Comoros',code:'KM',region:'East Africa',capital:'Moroni',lon:43.25,lat:-11.70},
    {name:'Congo',code:'CG',region:'Central Africa',capital:'Brazzaville',lon:15.27,lat:-4.27},
    {name:'Côte d’Ivoire',code:'CI',region:'West Africa',capital:'Yamoussoukro',lon:-5.28,lat:6.82},
    {name:'Djibouti',code:'DJ',region:'East Africa',capital:'Djibouti',lon:43.15,lat:11.59},
    {name:'DR Congo',code:'CD',region:'Central Africa',capital:'Kinshasa',lon:15.31,lat:-4.32},
    {name:'Egypt',code:'EG',region:'North Africa',capital:'Cairo',lon:31.24,lat:30.04},
    {name:'Equatorial Guinea',code:'GQ',region:'Central Africa',capital:'Malabo',lon:8.78,lat:3.75},
    {name:'Eritrea',code:'ER',region:'East Africa',capital:'Asmara',lon:38.93,lat:15.34},
    {name:'Eswatini',code:'SZ',region:'Southern Africa',capital:'Mbabane',lon:31.14,lat:-26.32},
    {name:'Ethiopia',code:'ET',region:'East Africa',capital:'Addis Ababa',lon:38.75,lat:9.03},
    {name:'Gabon',code:'GA',region:'Central Africa',capital:'Libreville',lon:9.45,lat:0.39},
    {name:'Gambia',code:'GM',region:'West Africa',capital:'Banjul',lon:-16.58,lat:13.45},
    {name:'Ghana',code:'GH',region:'West Africa',capital:'Accra',lon:-0.19,lat:5.56,featured:'Waakye, kenkey and jollof are among the dishes that travel with Ghanaian food stories.'},
    {name:'Guinea',code:'GN',region:'West Africa',capital:'Conakry',lon:-13.58,lat:9.64},
    {name:'Guinea-Bissau',code:'GW',region:'West Africa',capital:'Bissau',lon:-15.60,lat:11.86},
    {name:'Kenya',code:'KE',region:'East Africa',capital:'Nairobi',lon:36.82,lat:-1.29},
    {name:'Lesotho',code:'LS',region:'Southern Africa',capital:'Maseru',lon:27.48,lat:-29.31},
    {name:'Liberia',code:'LR',region:'West Africa',capital:'Monrovia',lon:-10.80,lat:6.30},
    {name:'Libya',code:'LY',region:'North Africa',capital:'Tripoli',lon:13.19,lat:32.89},
    {name:'Madagascar',code:'MG',region:'East Africa',capital:'Antananarivo',lon:47.51,lat:-18.88},
    {name:'Malawi',code:'MW',region:'Southern Africa',capital:'Lilongwe',lon:33.79,lat:-13.97},
    {name:'Mali',code:'ML',region:'West Africa',capital:'Bamako',lon:-8.00,lat:12.64},
    {name:'Mauritania',code:'MR',region:'West Africa',capital:'Nouakchott',lon:-15.98,lat:18.08},
    {name:'Mauritius',code:'MU',region:'East Africa',capital:'Port Louis',lon:57.50,lat:-20.16},
    {name:'Morocco',code:'MA',region:'North Africa',capital:'Rabat',lon:-6.85,lat:34.02},
    {name:'Mozambique',code:'MZ',region:'Southern Africa',capital:'Maputo',lon:32.58,lat:-25.97},
    {name:'Namibia',code:'NA',region:'Southern Africa',capital:'Windhoek',lon:17.08,lat:-22.56},
    {name:'Niger',code:'NE',region:'West Africa',capital:'Niamey',lon:2.11,lat:13.51},
    {name:'Nigeria',code:'NG',region:'West Africa',capital:'Abuja',lon:7.49,lat:9.06},
    {name:'Rwanda',code:'RW',region:'East Africa',capital:'Kigali',lon:30.06,lat:-1.94},
    {name:'São Tomé and Príncipe',code:'ST',region:'Central Africa',capital:'São Tomé',lon:6.73,lat:0.34},
    {name:'Senegal',code:'SN',region:'West Africa',capital:'Dakar',lon:-17.45,lat:14.69},
    {name:'Seychelles',code:'SC',region:'East Africa',capital:'Victoria',lon:55.45,lat:-4.62},
    {name:'Sierra Leone',code:'SL',region:'West Africa',capital:'Freetown',lon:-13.23,lat:8.48},
    {name:'Somalia',code:'SO',region:'East Africa',capital:'Mogadishu',lon:45.32,lat:2.05},
    {name:'South Africa',code:'ZA',region:'Southern Africa',capital:'Pretoria',lon:28.19,lat:-25.75},
    {name:'South Sudan',code:'SS',region:'East Africa',capital:'Juba',lon:31.58,lat:4.85},
    {name:'Sudan',code:'SD',region:'North Africa',capital:'Khartoum',lon:32.53,lat:15.50},
    {name:'Tanzania',code:'TZ',region:'East Africa',capital:'Dodoma',lon:35.75,lat:-6.16},
    {name:'Togo',code:'TG',region:'West Africa',capital:'Lomé',lon:1.22,lat:6.13},
    {name:'Tunisia',code:'TN',region:'North Africa',capital:'Tunis',lon:10.18,lat:36.81},
    {name:'Uganda',code:'UG',region:'East Africa',capital:'Kampala',lon:32.58,lat:0.35},
    {name:'Zambia',code:'ZM',region:'Southern Africa',capital:'Lusaka',lon:28.28,lat:-15.39},
    {name:'Zimbabwe',code:'ZW',region:'Southern Africa',capital:'Harare',lon:31.05,lat:-17.83}
  ];
  const map = document.querySelector('[data-atlas-map]');
  const markers = document.querySelector('[data-atlas-markers]');
  const tip = document.querySelector('[data-atlas-tip]');
  const selected = document.querySelector('[data-atlas-selected]');
  const search = document.querySelector('[data-country-search]');
  const results = document.querySelector('[data-search-results]');
  const clear = document.querySelector('[data-clear-search]');
  const openLink = document.querySelector('[data-atlas-open]');
  if (!map || !markers) return;

  const bounds = {minLon:-25,maxLon:60,minLat:-35,maxLat:38};
  const project = (lon,lat) => ({
    x: ((lon-bounds.minLon)/(bounds.maxLon-bounds.minLon))*100,
    y: ((bounds.maxLat-lat)/(bounds.maxLat-bounds.minLat))*100
  });
  const featured = new Set(['Ghana','Benin','Burkina Faso']);
  const getCountry = name => countries.find(c => c.name.toLowerCase() === name.toLowerCase());
  const href = c => `country.html?name=${encodeURIComponent(c.name)}`;
  let active = getCountry('Ghana');

  function updateTip(c) {
    if (!tip) return;
    tip.innerHTML = `<small>${c.region.toUpperCase()}</small><strong>${c.name}</strong><span>${c.capital} · ${c.featured ? 'Featured food story' : 'Explore food and culture'}</span>`;
  }
  function choose(c) {
    if (!c) return;
    active = c;
    markers.querySelectorAll('.atlas-marker').forEach(b => b.classList.toggle('is-active', b.dataset.country === c.name));
    if (selected) {
      selected.innerHTML = `<span class="selected-region">${c.region.toUpperCase()} · ${c.code}</span><h3>${c.name}</h3><p>${c.featured || `Capital: ${c.capital}. Open this notebook to explore the dishes, ingredients, markets and everyday food traditions of ${c.name}.`}</p><a class="button button-dark" href="${href(c)}" data-atlas-open>Open ${c.name} notebook <i class="arrow-icon" aria-hidden="true"></i></a>`;
    }
    if (openLink) openLink.href = href(c);
    updateTip(c);
  }
  function makeMarker(c) {
    const point = project(c.lon,c.lat);
    const btn = document.createElement('button');
    btn.type='button';
    btn.className=`atlas-marker${featured.has(c.name)?' is-featured':''}`;
    btn.style.left=`${point.x}%`;
    btn.style.top=`${point.y}%`;
    btn.dataset.country=c.name;
    btn.setAttribute('aria-label',`${c.name}, ${c.region}`);
    btn.title=`${c.name} · ${c.capital}`;
    btn.addEventListener('mouseenter',()=>updateTip(c));
    btn.addEventListener('focus',()=>updateTip(c));
    btn.addEventListener('click',()=>{ window.location.href=href(c); });
    markers.appendChild(btn);
  }
  countries.forEach(makeMarker);
  choose(active);

  function renderResults(query) {
    if (!results) return;
    const q=query.trim().toLowerCase();
    if (!q) { results.hidden=true; results.innerHTML=''; return; }
    const matches=countries.filter(c=>c.name.toLowerCase().includes(q)).slice(0,8);
    results.innerHTML=matches.length ? matches.map(c=>`<button type="button" class="atlas-result" data-result="${c.name}"><span>${c.name}</span><small>${c.region}</small><i class="arrow-icon" aria-hidden="true"></i></button>`).join('') : '<p class="atlas-no-results">No country found. Try another spelling.</p>';
    results.hidden=false;
    results.querySelectorAll('[data-result]').forEach(btn=>btn.addEventListener('click',()=>{
      const c=getCountry(btn.dataset.result);
      window.location.href=href(c);
    }));
  }
  if (search) search.addEventListener('input',()=>renderResults(search.value));
  if (clear) clear.addEventListener('click',()=>{ if(search) {search.value='';search.focus();} if(results){results.hidden=true;results.innerHTML='';} });
  document.addEventListener('click',e=>{
    if (results && search && !e.target.closest('.atlas-search') && !e.target.closest('.atlas-search-results')) results.hidden=true;
  });
})();
