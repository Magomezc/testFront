/**
 * Dice and Brush — Main JavaScript
 * Features:
 *   - Sticky header scroll behaviour
 *   - Mobile hamburger menu
 *   - Active nav link on scroll (Intersection Observer)
 *   - Language toggle (ES / EN) with i18n dictionary
 *   - Smooth anchor scroll with header offset
 *   - Close mobile nav on link click
 */

/* ============================================================
   i18n DICTIONARY
   ============================================================ */
const i18n = {
  es: {
    /* Meta */
    'meta.title':       'Dice and Brush | Tienda de Warhammer en Bogotá, Colombia',
    'meta.description': 'Dice and Brush: la tienda especializada en Warhammer y wargaming competitivo en Bogotá, Colombia. Torneos GT, Kill Team, distribuidores oficiales de Games Workshop.',

    /* Nav */
    'nav.skip':      'Ir al contenido principal',
    'nav.home':      'Inicio',
    'nav.about':     'Nosotros',
    'nav.events':    'Eventos',
    'nav.community': 'Comunidad',
    'nav.products':  'Productos',
    'nav.contact':   'Contáctanos',

    /* Hero */
    'hero.badge':     'Bogotá, Colombia',
    'hero.titleMain': 'Dice & Brush',
    'hero.titleSub':  'Wargaming Competitivo',
    'hero.tagline':   'Tienda de wargaming en Bogotá, Colombia.<br />Especializados en Warhammer y juego competitivo.',
    'hero.cta1':      'Ver Eventos',
    'hero.cta2':      'Únete a la Comunidad',
    'hero.ind1':      'Torneos GT',
    'hero.ind2':      'Golden Tickets',
    'hero.ind3':      'Distribuidores GW',

    /* About */
    'about.tag':         'Nuestra Historia',
    'about.title':       'Más Que una Tienda.<br />Una Forja de Campeones.',
    'about.lead':        'Dice and Brush nació en Bogotá con una misión clara: elevar el wargaming competitivo en Colombia al siguiente nivel.',
    'about.p1':          'Somos distribuidores oficiales de <strong>Games Workshop</strong> y el epicentro de la escena competitiva de <strong>Warhammer 40K</strong>, <strong>Age of Sigmar</strong> y <strong>Kill Team</strong> en Colombia. Organizamos torneos con formato <strong>GT (Grand Tournament)</strong> y entregamos <strong>Golden Tickets</strong> para clasificaciones internacionales.',
    'about.p2':          'Aquí no solo compras miniaturas — entrenas, compites, mejoras y forjas lazos con una comunidad que comparte tu pasión por el juego de alto nivel.',
    'about.stat1':       'Jugadores activos',
    'about.stat2':       'Torneos organizados',
    'about.stat3':       'Tienda GW en Colombia',
    'about.pillar1Title':'Juego Competitivo',
    'about.pillar1Text': 'Enfoque en torneos GT de alto nivel y formación de jugadores para competencia internacional.',
    'about.pillar2Title':'Golden Tickets',
    'about.pillar2Text': 'Organizamos eventos clasificatorios con Golden Tickets hacia torneos mundiales de Warhammer.',
    'about.pillar3Title':'Comunidad Real',
    'about.pillar3Text': 'Una comunidad sólida, activa y en constante crecimiento ubicada en el corazón de Bogotá.',

    /* Events */
    'events.tag':      'Calendario',
    'events.title':    'Próximos Eventos',
    'events.subtitle': 'Torneos, ligas y eventos competitivos en Bogotá',
    'events.featured': 'Destacado',
    'events.type40k':  'Warhammer 40,000',
    'events.typeAoS':  'Age of Sigmar',
    'events.typeKT':   'Kill Team',
    'events.ev1Title': 'GT Bogotá Open 2025',
    'events.ev1Date':  '15–16 Marzo 2025',
    'events.ev1Desc':  'Grand Tournament oficial de Warhammer 40K. Formato ITC. Clasificatorio para Golden Ticket. Cupos limitados.',
    'events.ev1d1':    '📍 Bogotá, Colombia',
    'events.ev1d2':    '⚔️ 2000 pts — Formato ITC',
    'events.ev1d3':    '🏆 Golden Ticket en juego',
    'events.ev2Title': 'AoS Grand Tournament',
    'events.ev2Date':  '5–6 Abril 2025',
    'events.ev2Desc':  'Torneo GT de Age of Sigmar, el más grande de Colombia. Competencia de élite con los mejores jugadores del país.',
    'events.ev2d1':    '📍 Bogotá, Colombia',
    'events.ev2d2':    '⚔️ Formato GHB oficial',
    'events.ev2d3':    '🎖️ Premios especiales',
    'events.ev3Title': 'Liga Kill Team — Temporada 1',
    'events.ev3Date':  'Febrero – Mayo 2025',
    'events.ev3Desc':  'Liga competitiva de Kill Team con formato de liguilla y eliminatorias. Perfecta para iniciarte en el juego competitivo.',
    'events.ev3d1':    '📍 Dice and Brush — Bogotá',
    'events.ev3d2':    '📅 Cada sábado',
    'events.ev3d3':    '🎯 Nivel abierto',
    'events.register': 'Registrarse',
    'events.moreCopy': '¿Quieres ver todos los torneos, ligas y actividades de la tienda?',
    'events.moreCta':  'Ver Calendario Completo',

    /* Community */
    'community.tag':        'Comunidad',
    'community.title':      'La Comunidad que te Lleva al Top',
    'community.subtitle':   'Únete a cientos de jugadores que ya compiten al más alto nivel desde Bogotá',
    'community.waTitle':    'Comunidad WhatsApp',
    'community.waText':     'Más de 200 jugadores activos en nuestra comunidad de WhatsApp. Estrategias, listas, meta-análisis y organización de partidas en tiempo real.',
    'community.waCta':      'Únete al Grupo',
    'community.trainTitle': 'Entrenamiento Competitivo',
    'community.trainText':  'Sesiones de entrenamiento, análisis de listas y preparación táctica con los mejores jugadores del país. Desde principiante hasta pro.',
    'community.pathTitle':  'Tu camino al torneo internacional',
    'community.step1Title': 'Únete a la comunidad',
    'community.step1Text':  'Conéctate con jugadores en Bogotá y empieza a jugar.',
    'community.step2Title': 'Participa en ligas locales',
    'community.step2Text':  'Liga Kill Team y torneos de práctica en nuestra tienda.',
    'community.step3Title': 'Compite en GTs',
    'community.step3Text':  'Grand Tournaments con Golden Tickets para internacionales.',
    'community.step4Title': 'Clasifica a nivel mundial',
    'community.step4Text':  'Representa a Colombia en los torneos internacionales de Warhammer.',

    /* Why */
    'why.tag':    'Por Qué Elegirnos',
    'why.title':  'El Estándar más Alto del Wargaming en Colombia',
    'why.r1Title':'Distribuidores Oficiales',
    'why.r1Text': 'Somos distribuidores oficiales de <strong>Games Workshop</strong> en Colombia. Accede a los mejores productos al mejor precio con garantía oficial.',
    'why.r2Title':'Eventos Competitivos Organizados',
    'why.r2Text': 'Torneos GT con formato oficial, ligas regulares y eventos especiales con premios y Golden Tickets para clasificaciones internacionales.',
    'why.r3Title':'Comunidad Real en Bogotá',
    'why.r3Text': 'Una comunidad activa, apasionada y en constante crecimiento. El wargaming competitivo en Colombia tiene su hogar aquí.',
    'why.r4Title':'Enfoque en Mejorar',
    'why.r4Text': 'Entrenamiento táctico, análisis de meta y preparación seria para llevar tu nivel de juego al máximo posible.',
    'why.r5Title':'Representamos a Colombia',
    'why.r5Text': 'Llevamos jugadores colombianos a torneos internacionales. Bogotá ya es un referente del wargaming competitivo en Latinoamérica.',
    'why.r6Title':'Pintura y Hobby',
    'why.r6Text': 'Talleres de pintura, asesoría y todo lo que necesitas para tener el ejército más épico sobre la mesa.',

    /* Products */
    'products.tag':      'Tienda',
    'products.title':    'Productos',
    'products.soon':     'En Construcción',
    'products.soonText': 'Nuestra tienda online estará disponible muy pronto. Por ahora, visítanos físicamente en Bogotá o contáctanos para consultar disponibilidad de productos.',
    'products.cta':      'Consultar Disponibilidad',
    'products.cat1':     'Warhammer 40K',
    'products.cat2':     'Age of Sigmar',
    'products.cat3':     'Kill Team',
    'products.cat4':     'Pinturas y Hobby',
    'products.cat5':     'Libros y Reglas',
    'products.cat6':     'Accesorios',

    /* Location */
    'location.tag':       'Ubicación',
    'location.title':     'Encuéntranos en Bogotá',
    'location.addrLabel': 'Dirección',
    'location.addr':      'Bogotá, Colombia<br /><em>Dirección exacta vía WhatsApp</em>',
    'location.addrNote':  '(Dirección exacta vía WhatsApp)',
    'location.hoursLabel':'Horarios',
    'location.hours':     'Lun – Vie: 10:00 – 20:00<br />Sáb – Dom: 10:00 – 18:00',
    'location.contactLabel':'Contacto',
    'location.waStore':   'WhatsApp Tienda',
    'location.seoText':   'La única tienda especializada en <strong>Warhammer en Bogotá</strong> con torneos GT, Golden Tickets y comunidad activa. El mejor lugar para el <strong>wargaming competitivo en Colombia</strong>. <strong>Distribuidores oficiales de Games Workshop</strong> en Colombia.',
    'location.mapCta':    'Ver en Google Maps',

    /* Contact */
    'contact.tag':             'Contáctanos',
    'contact.title':           'Hablemos',
    'contact.subtitle':        'Estamos en Bogotá y listos para ayudarte. Elige tu canal favorito.',
    'contact.waStoreTitle':    'WhatsApp Tienda',
    'contact.waStoreText':     'Consultas de productos, disponibilidad y pedidos.',
    'contact.waStoreCta':      'Escribir ahora →',
    'contact.waCommunityTitle':'Comunidad WhatsApp',
    'contact.waCommunityText': 'Únete a más de 200 jugadores activos en Bogotá.',
    'contact.waCommunityCta':  'Unirse al grupo →',
    'contact.igTitle':         'Instagram',
    'contact.igText':          'Síguenos para torneos, pinturas y novedades del hobby.',
    'contact.locTitle':        'Visítanos en Bogotá',
    'contact.locText':         'Tienda física en Bogotá, Colombia. Escríbenos para obtener la dirección exacta y horarios de atención.',
    'contact.locCta':          'Pedir dirección →',

    /* Footer */
    'footer.tagline':    'Wargaming Competitivo — Bogotá, Colombia',
    'footer.copy':       '© 2025 Dice and Brush. Bogotá, Colombia. Distribuidores oficiales de Games Workshop.',
    'footer.disclaimer': 'Games Workshop, Warhammer, Warhammer 40,000, Age of Sigmar y Kill Team son marcas registradas de Games Workshop Ltd.',
  },

  en: {
    /* Meta */
    'meta.title':       'Dice and Brush | Warhammer Store in Bogotá, Colombia',
    'meta.description': 'Dice and Brush: the premier Warhammer and competitive wargaming store in Bogotá, Colombia. GT tournaments, Kill Team, official Games Workshop distributor.',

    /* Nav */
    'nav.skip':      'Skip to main content',
    'nav.home':      'Home',
    'nav.about':     'About',
    'nav.events':    'Events',
    'nav.community': 'Community',
    'nav.products':  'Products',
    'nav.contact':   'Contact',

    /* Hero */
    'hero.badge':     'Bogotá, Colombia',
    'hero.titleMain': 'Dice & Brush',
    'hero.titleSub':  'Competitive Wargaming',
    'hero.tagline':   'Wargaming store in Bogotá, Colombia.<br />Specialists in Warhammer and competitive play.',
    'hero.cta1':      'View Events',
    'hero.cta2':      'Join the Community',
    'hero.ind1':      'GT Tournaments',
    'hero.ind2':      'Golden Tickets',
    'hero.ind3':      'Official GW Distributor',

    /* About */
    'about.tag':         'Our Story',
    'about.title':       'More Than a Store.<br />A Champions\' Forge.',
    'about.lead':        'Dice and Brush was born in Bogotá with a clear mission: to elevate competitive wargaming in Colombia to the next level.',
    'about.p1':          'We are official <strong>Games Workshop</strong> distributors and the heart of the competitive <strong>Warhammer 40K</strong>, <strong>Age of Sigmar</strong> and <strong>Kill Team</strong> scene in Colombia. We run <strong>GT (Grand Tournament)</strong> format events and award <strong>Golden Tickets</strong> for international qualifications.',
    'about.p2':          'Here you don\'t just buy miniatures — you train, compete, improve and forge bonds with a community that shares your passion for high-level play.',
    'about.stat1':       'Active players',
    'about.stat2':       'Tournaments organized',
    'about.stat3':       'GW Store in Colombia',
    'about.pillar1Title':'Competitive Play',
    'about.pillar1Text': 'Focus on high-level GT tournaments and player development for international competition.',
    'about.pillar2Title':'Golden Tickets',
    'about.pillar2Text': 'We run qualifying events with Golden Tickets for Warhammer world tournaments.',
    'about.pillar3Title':'Real Community',
    'about.pillar3Text': 'A solid, active and constantly growing community in the heart of Bogotá.',

    /* Events */
    'events.tag':      'Calendar',
    'events.title':    'Upcoming Events',
    'events.subtitle': 'Tournaments, leagues and competitive events in Bogotá',
    'events.featured': 'Featured',
    'events.type40k':  'Warhammer 40,000',
    'events.typeAoS':  'Age of Sigmar',
    'events.typeKT':   'Kill Team',
    'events.ev1Title': 'GT Bogotá Open 2025',
    'events.ev1Date':  'March 15–16, 2025',
    'events.ev1Desc':  'Official Warhammer 40K Grand Tournament. ITC format. Golden Ticket qualifying event. Limited spots.',
    'events.ev1d1':    '📍 Bogotá, Colombia',
    'events.ev1d2':    '⚔️ 2000 pts — ITC format',
    'events.ev1d3':    '🏆 Golden Ticket on the line',
    'events.ev2Title': 'AoS Grand Tournament',
    'events.ev2Date':  'April 5–6, 2025',
    'events.ev2Desc':  'Age of Sigmar Grand Tournament, the biggest in Colombia. Elite competition with the country\'s top players.',
    'events.ev2d1':    '📍 Bogotá, Colombia',
    'events.ev2d2':    '⚔️ Official GHB format',
    'events.ev2d3':    '🎖️ Special prizes',
    'events.ev3Title': 'Kill Team League — Season 1',
    'events.ev3Date':  'February – May 2025',
    'events.ev3Desc':  'Competitive Kill Team league with round-robin and playoff format. Perfect for getting started in competitive play.',
    'events.ev3d1':    '📍 Dice and Brush — Bogotá',
    'events.ev3d2':    '📅 Every Saturday',
    'events.ev3d3':    '🎯 Open skill level',
    'events.register': 'Register',
    'events.moreCopy': 'Want to see all tournaments, leagues and store events?',
    'events.moreCta':  'View Full Calendar',

    /* Community */
    'community.tag':        'Community',
    'community.title':      'The Community That Takes You to the Top',
    'community.subtitle':   'Join hundreds of players already competing at the highest level from Bogotá',
    'community.waTitle':    'WhatsApp Community',
    'community.waText':     'Over 200 active players in our WhatsApp community. Strategy, lists, meta analysis and game organisation in real time.',
    'community.waCta':      'Join the Group',
    'community.trainTitle': 'Competitive Training',
    'community.trainText':  'Training sessions, list analysis and tactical preparation with the best players in the country. From beginner to pro.',
    'community.pathTitle':  'Your path to the international tournament',
    'community.step1Title': 'Join the community',
    'community.step1Text':  'Connect with players in Bogotá and start playing.',
    'community.step2Title': 'Join local leagues',
    'community.step2Text':  'Kill Team league and practice tournaments at our store.',
    'community.step3Title': 'Compete at GTs',
    'community.step3Text':  'Grand Tournaments with Golden Tickets for international events.',
    'community.step4Title': 'Qualify worldwide',
    'community.step4Text':  'Represent Colombia at international Warhammer tournaments.',

    /* Why */
    'why.tag':    'Why Choose Us',
    'why.title':  'The Highest Standard of Wargaming in Colombia',
    'why.r1Title':'Official Distributor',
    'why.r1Text': 'We are official <strong>Games Workshop</strong> distributors in Colombia. Get the best products at the best price with official warranty.',
    'why.r2Title':'Organised Competitive Events',
    'why.r2Text': 'Official format GT tournaments, regular leagues and special events with prizes and Golden Tickets for international qualifications.',
    'why.r3Title':'Real Community in Bogotá',
    'why.r3Text': 'An active, passionate and constantly growing community. Competitive wargaming in Colombia has its home here.',
    'why.r4Title':'Focus on Improvement',
    'why.r4Text': 'Tactical training, meta analysis and serious preparation to take your game to the highest possible level.',
    'why.r5Title':'We Represent Colombia',
    'why.r5Text': 'We take Colombian players to international tournaments. Bogotá is already a reference for competitive wargaming in Latin America.',
    'why.r6Title':'Painting & Hobby',
    'why.r6Text': 'Painting workshops, advice and everything you need to have the most epic army on the table.',

    /* Products */
    'products.tag':      'Store',
    'products.title':    'Products',
    'products.soon':     'Under Construction',
    'products.soonText': 'Our online store will be available soon. In the meantime, visit us in person in Bogotá or contact us to check product availability.',
    'products.cta':      'Check Availability',
    'products.cat1':     'Warhammer 40K',
    'products.cat2':     'Age of Sigmar',
    'products.cat3':     'Kill Team',
    'products.cat4':     'Paints & Hobby',
    'products.cat5':     'Books & Rules',
    'products.cat6':     'Accessories',

    /* Location */
    'location.tag':        'Location',
    'location.title':      'Find Us in Bogotá',
    'location.addrLabel':  'Address',
    'location.addr':       'Bogotá, Colombia<br /><em>Exact address via WhatsApp</em>',
    'location.addrNote':   '(Exact address via WhatsApp)',
    'location.hoursLabel': 'Hours',
    'location.hours':      'Mon – Fri: 10:00 – 20:00<br />Sat – Sun: 10:00 – 18:00',
    'location.contactLabel':'Contact',
    'location.waStore':    'WhatsApp Store',
    'location.seoText':    'The only store specialising in <strong>Warhammer in Bogotá</strong> with GT tournaments, Golden Tickets and an active community. The best place for <strong>competitive wargaming in Colombia</strong>. <strong>Official Games Workshop distributors</strong> in Colombia.',
    'location.mapCta':     'View on Google Maps',

    /* Contact */
    'contact.tag':             'Contact',
    'contact.title':           'Let\'s Talk',
    'contact.subtitle':        'We\'re in Bogotá and ready to help. Choose your preferred channel.',
    'contact.waStoreTitle':    'WhatsApp Store',
    'contact.waStoreText':     'Product queries, availability and orders.',
    'contact.waStoreCta':      'Message now →',
    'contact.waCommunityTitle':'WhatsApp Community',
    'contact.waCommunityText': 'Join over 200 active players in Bogotá.',
    'contact.waCommunityCta':  'Join the group →',
    'contact.igTitle':         'Instagram',
    'contact.igText':          'Follow us for tournaments, painting and hobby news.',
    'contact.locTitle':        'Visit Us in Bogotá',
    'contact.locText':         'Physical store in Bogotá, Colombia. Message us for the exact address and opening hours.',
    'contact.locCta':          'Get directions →',

    /* Footer */
    'footer.tagline':    'Competitive Wargaming — Bogotá, Colombia',
    'footer.copy':       '© 2025 Dice and Brush. Bogotá, Colombia. Official Games Workshop distributor.',
    'footer.disclaimer': 'Games Workshop, Warhammer, Warhammer 40,000, Age of Sigmar and Kill Team are trademarks of Games Workshop Ltd.',
  }
};


/* ============================================================
   STATE
   ============================================================ */
let currentLang = 'es';
let mobileNavOpen = false;


/* ============================================================
   DOM ELEMENTS
   ============================================================ */
const header     = document.getElementById('site-header');
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');
const langToggle = document.getElementById('lang-toggle');
const langLabel  = document.getElementById('lang-label');
const langAlt    = document.getElementById('lang-alt');


/* ============================================================
   HEADER SCROLL BEHAVIOUR
   ============================================================ */
function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // run once on load


/* ============================================================
   HAMBURGER / MOBILE NAV
   ============================================================ */
function toggleMobileNav(open) {
  mobileNavOpen = open;
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  mobileNav.classList.toggle('open', open);
  mobileNav.setAttribute('aria-hidden', String(!open));
  // Prevent body scroll when nav is open
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
  toggleMobileNav(!mobileNavOpen);
});

// Close on link click
mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    toggleMobileNav(false);
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (mobileNavOpen && !header.contains(e.target)) {
    toggleMobileNav(false);
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNavOpen) {
    toggleMobileNav(false);
    hamburger.focus();
  }
});


/* ============================================================
   ACTIVE NAV ON SCROLL (Intersection Observer)
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link, .mobile-nav-link');

const observerOptions = {
  root: null,
  rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '72px'} 0px -60% 0px`,
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isMatch = href === `#${id}`;
        link.classList.toggle('active', isMatch);
        link.setAttribute('aria-current', isMatch ? 'page' : 'false');
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));


/* ============================================================
   SMOOTH SCROLL WITH HEADER OFFSET
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerHeight = header.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    // Update URL without jumping
    if (history.pushState) {
      history.pushState(null, null, targetId);
    }
  });
});


/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function applyTranslations(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // Use innerHTML to support <strong>, <em>, <br> in translations
      el.innerHTML = dict[key];
    }
  });

  // Update <html lang> attribute
  document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');

  // Update <title>
  if (dict['meta.title']) {
    document.title = dict['meta.title'];
  }

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }

  // Update lang toggle labels
  if (lang === 'es') {
    langLabel.textContent = 'ES';
    langAlt.textContent   = 'EN';
  } else {
    langLabel.textContent = 'EN';
    langAlt.textContent   = 'ES';
  }

  // Store preference
  try {
    localStorage.setItem('dab-lang', lang);
  } catch (_) {
    // localStorage not available — ignore
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyTranslations(currentLang);
}

langToggle.addEventListener('click', toggleLanguage);

// Load stored preference on page load
(function initLang() {
  try {
    const stored = localStorage.getItem('dab-lang');
    if (stored && (stored === 'es' || stored === 'en')) {
      currentLang = stored;
    }
  } catch (_) {
    // ignore
  }
  applyTranslations(currentLang);
})();


/* ============================================================
   CARD ENTRANCE ANIMATIONS (lightweight)
   Uses IntersectionObserver to add 'visible' class
   CSS handles the actual animation (no JS animation library needed)
   ============================================================ */
const animatedEls = document.querySelectorAll(
  '.event-card, .why-card, .pillar, .community-card, .contact-card, .prod-cat, .path-step'
);

// Add initial hidden state via JS (so non-JS users still see content)
animatedEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
});

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      animObserver.unobserve(entry.target); // animate once
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1,
});

animatedEls.forEach(el => animObserver.observe(el));
