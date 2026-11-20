(() => {
  const params = new URLSearchParams(window.location.search);
  const rawName = params.get('name') || 'Ghana';
  const countries = [{"name":"Algeria","code":"DZ","region":"North Africa","capital":"Algiers"},{"name":"Angola","code":"AO","region":"Central Africa","capital":"Luanda"},{"name":"Benin","code":"BJ","region":"West Africa","capital":"Porto-Novo"},{"name":"Botswana","code":"BW","region":"Southern Africa","capital":"Gaborone"},{"name":"Burkina Faso","code":"BF","region":"West Africa","capital":"Ouagadougou"},{"name":"Burundi","code":"BI","region":"East Africa","capital":"Gitega"},{"name":"Cabo Verde","code":"CV","region":"West Africa","capital":"Praia"},{"name":"Cameroon","code":"CM","region":"Central Africa","capital":"Yaoundé"},{"name":"Central African Republic","code":"CF","region":"Central Africa","capital":"Bangui"},{"name":"Chad","code":"TD","region":"Central Africa","capital":"N’Djamena"},{"name":"Comoros","code":"KM","region":"East Africa","capital":"Moroni"},{"name":"Congo","code":"CG","region":"Central Africa","capital":"Brazzaville"},{"name":"Côte d’Ivoire","code":"CI","region":"West Africa","capital":"Yamoussoukro"},{"name":"Djibouti","code":"DJ","region":"East Africa","capital":"Djibouti"},{"name":"DR Congo","code":"CD","region":"Central Africa","capital":"Kinshasa"},{"name":"Egypt","code":"EG","region":"North Africa","capital":"Cairo"},{"name":"Equatorial Guinea","code":"GQ","region":"Central Africa","capital":"Malabo"},{"name":"Eritrea","code":"ER","region":"East Africa","capital":"Asmara"},{"name":"Eswatini","code":"SZ","region":"Southern Africa","capital":"Mbabane"},{"name":"Ethiopia","code":"ET","region":"East Africa","capital":"Addis Ababa"},{"name":"Gabon","code":"GA","region":"Central Africa","capital":"Libreville"},{"name":"Gambia","code":"GM","region":"West Africa","capital":"Banjul"},{"name":"Ghana","code":"GH","region":"West Africa","capital":"Accra"},{"name":"Guinea","code":"GN","region":"West Africa","capital":"Conakry"},{"name":"Guinea-Bissau","code":"GW","region":"West Africa","capital":"Bissau"},{"name":"Kenya","code":"KE","region":"East Africa","capital":"Nairobi"},{"name":"Lesotho","code":"LS","region":"Southern Africa","capital":"Maseru"},{"name":"Liberia","code":"LR","region":"West Africa","capital":"Monrovia"},{"name":"Libya","code":"LY","region":"North Africa","capital":"Tripoli"},{"name":"Madagascar","code":"MG","region":"East Africa","capital":"Antananarivo"},{"name":"Malawi","code":"MW","region":"Southern Africa","capital":"Lilongwe"},{"name":"Mali","code":"ML","region":"West Africa","capital":"Bamako"},{"name":"Mauritania","code":"MR","region":"West Africa","capital":"Nouakchott"},{"name":"Mauritius","code":"MU","region":"East Africa","capital":"Port Louis"},{"name":"Morocco","code":"MA","region":"North Africa","capital":"Rabat"},{"name":"Mozambique","code":"MZ","region":"Southern Africa","capital":"Maputo"},{"name":"Namibia","code":"NA","region":"Southern Africa","capital":"Windhoek"},{"name":"Niger","code":"NE","region":"West Africa","capital":"Niamey"},{"name":"Nigeria","code":"NG","region":"West Africa","capital":"Abuja"},{"name":"Rwanda","code":"RW","region":"East Africa","capital":"Kigali"},{"name":"São Tomé and Príncipe","code":"ST","region":"Central Africa","capital":"São Tomé"},{"name":"Senegal","code":"SN","region":"West Africa","capital":"Dakar"},{"name":"Seychelles","code":"SC","region":"East Africa","capital":"Victoria"},{"name":"Sierra Leone","code":"SL","region":"West Africa","capital":"Freetown"},{"name":"Somalia","code":"SO","region":"East Africa","capital":"Mogadishu"},{"name":"South Africa","code":"ZA","region":"Southern Africa","capital":"Pretoria"},{"name":"South Sudan","code":"SS","region":"East Africa","capital":"Juba"},{"name":"Sudan","code":"SD","region":"North Africa","capital":"Khartoum"},{"name":"Tanzania","code":"TZ","region":"East Africa","capital":"Dodoma"},{"name":"Togo","code":"TG","region":"West Africa","capital":"Lomé"},{"name":"Tunisia","code":"TN","region":"North Africa","capital":"Tunis"},{"name":"Uganda","code":"UG","region":"East Africa","capital":"Kampala"},{"name":"Zambia","code":"ZM","region":"Southern Africa","capital":"Lusaka"},{"name":"Zimbabwe","code":"ZW","region":"Southern Africa","capital":"Harare"}];
  const country = countries.find(item => item.name.toLowerCase() === rawName.toLowerCase()) || countries.find(item => item.name === 'Ghana');
  const name = country.name;
  const stories = {
    'Ghana': {
      intro: 'A table shaped by generosity, bold flavours and the joy of sharing.',
      description: 'Ghanaian food stories move from the morning waakye seller to family pots of jollof and the familiar comfort of kenkey. Each dish carries a different rhythm of the country, from the market to the home kitchen.',
      dishes: [{name:'Waakye',image:'countryGhanaWaakye',note:'A much-loved rice and beans dish often enjoyed with a generous mix of accompaniments.'},{name:'Kenkey',image:'countryGhanaKenkey',note:'A fermented maize staple with a place in everyday meals and coastal food culture.'},{name:'Jollof rice',image:'countryGhanaJollof',note:'A celebratory one-pot favourite with regional variations and loyal fans.'}]
    },
    'Benin': {
      intro: 'A West African food story with its own ingredients, methods and traditions.',
      description: 'Benin brings together coastal influences, market flavours and dishes rooted in local ingredients. Amiwo is one of the Beninese foods featured in Chef Abbys’ public food storytelling, inviting a closer look at the region’s kitchens.',
      dishes: [{name:'Amiwo',image:'countryBeninAmiwo',note:'A rich corn-based dish that has featured in Chef Abbys’ exploration of African cuisine.'}]
    },
    'Burkina Faso': {
      intro: 'A food culture where local ingredients tell stories of land and community.',
      description: 'Burkina Faso’s food traditions are shaped by grains, leafy vegetables and the everyday knowledge passed between cooks. Babenda is one of the dishes Chef Abbys has brought to a wider audience through her cooking videos.',
      dishes: [{name:'Babenda',image:'countryBurkinaBabenda',note:'A traditional leafy dish featured in Chef Abbys’ African food storytelling.'}]
    },
    'Nigeria': {
      intro: 'A vast food landscape, alive with regional tastes and strong culinary identities.',
      description: 'Nigeria’s food culture spans many communities and landscapes. Its kitchens bring together grains, roots, peppers, leafy vegetables and richly layered stews, with each region adding its own character to the table.',
      dishes: [{name:'A place for food stories',image:'countryNigeriaTable',note:'Explore the ingredients, markets and home cooking traditions that make each region distinct.'}]
    },
    'Senegal': {
      intro: 'Coastal flavours, shared bowls and food traditions with deep roots.',
      description: 'Senegal’s food culture is shaped by the Atlantic coast, local grains and the pleasure of eating together. Dakar’s markets and kitchens offer a rich starting point for discovering the country through its food.',
      dishes: [{name:'A place for food stories',image:'countrySenegalTable',note:'Follow the ingredients, dishes and people that give Senegalese food its character.'}]
    },
    'Côte d’Ivoire': {
      intro: 'A lively food culture shaped by regional ingredients and everyday creativity.',
      description: 'Côte d’Ivoire brings together a wide range of food traditions, from cassava and plantain to grains, fish and sauces. Its markets and shared meals offer a vivid way into the country’s everyday life.',
      dishes: [{name:'A place for food stories',image:'countryIvoryCoastTable',note:'Explore local ingredients and the food traditions that move from market stalls to family tables.'}]
    },
    'Togo': {
      intro: 'A West African table shaped by neighbourhood markets and family cooking.',
      description: 'Togo’s food culture sits within a rich West African exchange of ingredients and cooking traditions. Lomé is a natural place to begin exploring its markets, street food and everyday meals.',
      dishes: [{name:'A place for food stories',image:'countryTogoMarket',note:'Discover the ingredients, market culture and recipes that shape everyday life.'}]
    },
    'Cabo Verde': {
      intro: 'Island food traditions shaped by the sea, the seasons and a layered history.',
      description: 'Cabo Verde’s kitchens reflect island life and the movement of people across the Atlantic. Seafood, corn, beans and slow-cooked dishes are part of a food culture shaped by place and memory.',
      dishes: [{name:'A place for food stories',image:'countryCaboVerdeCoast',note:'Follow the island ingredients and dishes that connect food with place.'}]
    }
  };
  const story = stories[name] || {
    intro: `A closer look at the food culture of ${name}.`,
    description: `Begin in ${country.capital}, then follow the tastes, ingredients and everyday food traditions of ${name}. This notebook brings together the places, people and dishes that make the country’s table its own.`,
    dishes: [{name:'Markets and everyday food',image:'countryFallbackMarket',note:`A window into the ingredients and everyday food culture of ${name}.`},{name:'Ingredients with a story',image:'countryFallbackIngredients',note:'Discover the produce and flavours that shape local cooking.'},{name:'At the family table',image:'countryFallbackTable',note:'Food traditions are often best understood through the meals people share.'}]
  };
  document.querySelectorAll('[data-country-name]').forEach(element => element.textContent = name);
  const code = document.querySelector('[data-country-code]');
  if (code) code.textContent = country.code;
  const intro = document.querySelector('[data-country-intro]');
  if (intro) intro.textContent = story.intro;
  const description = document.querySelector('[data-country-description]');
  if (description) description.textContent = story.description;
  const heading = document.querySelector('[data-country-heading]');
  if (heading) heading.textContent = `A taste of ${name}.`;
  const status = document.querySelector('[data-country-status]');
  if (status) status.textContent = `${country.region} · Capital: ${country.capital}`;
  const dishNote = document.querySelector('[data-dishes-note]');
  if (dishNote) dishNote.textContent = `A few ways into the food and culture of ${name}.`;
  const image = document.querySelector('[data-country-hero-image]');
  if (image) {
    image.dataset.image = story.dishes[0]?.image || 'market';
    const source = window.CHEF_ABBYS_IMAGES?.[image.dataset.image];
    if (source) image.src = source;
  }
  const list = document.querySelector('[data-country-dishes]');
  if (list) {
    list.innerHTML = story.dishes.map((dish, index) => `
      <a class="editorial-card country-dish-card" href="recipes.html">
        <div class="card-image"><img data-image="${dish.image}" alt="${dish.name} and food from ${name}"></div>
        <div class="card-body"><span class="meta-line">${index === 0 && stories[name] ? 'A dish to know' : country.region}</span><h3>${dish.name}</h3><p>${dish.note}</p></div>
      </a>`).join('');
    list.querySelectorAll('[data-image]').forEach(element => {
      const source = window.CHEF_ABBYS_IMAGES?.[element.dataset.image];
      if (source) element.src = source;
    });
  }
  const title = document.querySelector('title');
  if (title) title.textContent = `${name} Country Notebook | Chef Abbys World`;
  document.title = `${name} Country Notebook | Chef Abbys World`;
})();
