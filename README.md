# Chef Abbys World

A responsive, multi-page static website concept for Chef Abbys. The design takes its visual cues from the supplied references: warm dark cocoa, parchment and clay colours, expressive editorial type, strong photography, magazine-style grids and one bold split-panel collage inspired by the “Inside Africa” reference.

## Run locally

This is a static HTML/CSS/JavaScript prototype. Open `index.html` directly for a quick look or serve the directory with a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Pages

- `index.html`  /  homepage and entry point to the ecosystem
- `about.html`  /  biography, mission, values and milestones
- `explore-africa.html`  /  interactive 54-country Africa atlas, country search and food stories
- `country.html`  /  dynamic country notebooks (opens with `?name=Ghana`, `?name=Benin` and other country names)
- `food-journey.html`  /  travel diary and announced West Africa Food Tour itinerary
- `recipes.html`  /  searchable, filterable recipe library
- `recipe-detail.html`  /  example recipe detail and serving controls
- `casof.html`  /  Chef Abbys School of Food academy and interest form
- `course-detail.html`  /  course detail and interest form
- `student-dashboard.html`  /  student learning space
- `journal.html`  /  news, food stories, press and events
- `story.html`  /  editorial article about the announced West Africa Food Tour
- `big-street-feast.html`  /  community initiative, impact and involvement form
- `work-with-me.html`  /  partnerships, media kit and enquiry form
- `contact.html`  /  contact routing and general enquiry form
- `studio.html`  /  private-looking CMS/editorial workspace concept for the team

## Images

All public-site image references are centralised in `images.js` under `window.CHEF_ABBYS_IMAGES`. Keep the key names as they are and replace the Unsplash URL values with local paths such as `images/chef-portrait.jpg` when the approved photography is ready. Each image in the HTML has a `data-image` key or `data-bg-image` key that maps to this registry.

The three supplied moodboard images are preserved in `images/` as `reference-inside-africa.jpg`, `reference-editorial-layout.jpg` and `reference-food-book.jpg`. They are references for the build and are not used as live content photography.

## Important before launch

This is a visual and interaction prototype, not a finished production system.

- The Unsplash images are temporary editorial photography. Replace them with photographs approved by Chef Abbys and her team.
- Most forms currently show a frontend success message only. Connect them to a secure backend, inbox or CRM and add spam protection before launch. The Team Studio draft feature stores drafts in the browser only.
- The newsletter form needs a mailing-list provider.
- The academy and course pages present a possible learning experience. Confirm real programmes, prices, curriculum and enrolment details with the team before launch.
- Recipe photography, ingredient quantities, cooking times and methods are editorial examples. Use Chef Abbys' approved and tested recipes before launch.
- The Journal uses editable editorial entries. Add future public event dates only when they are confirmed by the team.
- The Big Street Feast page uses public reporting for more than 20,000 people fed at the first edition and more than 50,000 people reached at the 2026 edition. Reconfirm impact figures with the organisers before launch.
- The West Africa Food Tour page describes the six-country itinerary as announced. It does not claim that every stop has been completed.
- Confirm the official brand name, biography, social handles, partnerships, audience statistics, rates, contact addresses and management workflow with the team.
- The Team Studio is a non-secure visual prototype. Production requires authentication, staff roles, audit history, server-side validation and a proper content management backend.
- Update SEO metadata, domain references, analytics, privacy/cookie notices and legal pages before public launch.

## Research notes used for this concept

Public-facing reference points checked on 20 November 2026 include Chef Abbys' TIME100 Creators 2025 recognition and African Food Tourist positioning; the August 2026 announcement of a six-country West Africa Food Tour naming Nigeria, Liberia, Togo, Senegal, Cabo Verde and Côte d'Ivoire; and October 2026 public commentary about Big Street Feast around World Food Day. These are used as editorial context, not as a claim that the website is authorised or officially endorsed by Chef Abbys.

The site is an independent pitch concept. Present it as a proposed design, not as an official Chef Abbys property, until the owner or management team approves it.
