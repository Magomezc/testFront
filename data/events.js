/**
 * Dice and Brush — Events & Gallery Configuration
 *
 * HOW TO USE
 * ──────────
 * Events
 *   • Add an object to the `events` array to create a new event.
 *   • Set `active: false` to hide it without deleting it.
 *   • Set `enrollUrl` to a Google Forms link to enable the enroll button.
 *     Leave it as an empty string ("") to show the button as disabled.
 *   • `price` is optional — omit the field to hide the price row.
 *
 * Gallery
 *   • Drop images into assets/gallery/ and reference them in the `gallery` array.
 *   • A placeholder icon is shown automatically when an image is missing.
 */
window.DICE_EVENTS = {

  /* ═══════════════════════════════════════════════════════════
     EVENTS
     ───────────────────────────────────────────────────────────
     Fields:
       id          {string}   Unique slug
       active      {boolean}  false = hidden from the page
       featured    {boolean}  Shows "Destacado / Featured" badge
       type        {string}   "wh40k" | "aos" | "killteam" | "other"
       title       {object}   { es, en }
       date        {string}   ISO start date "YYYY-MM-DD"
       dateEnd     {string}   ISO end date   "YYYY-MM-DD" (optional)
       dateLabel   {object}   { es, en } human-readable date range
       price       {string}   e.g. "COP 120.000" — omit to hide price row
       description {object}   { es, en }
       details     {string[]} Bullet lines displayed below description
       enrollUrl   {string}   Google Form URL — empty string = disabled button
  ══════════════════════════════════════════════════════════════ */
  events: [
    {
      id: "gt-bogota-open-2025",
      active: true,
      featured: true,
      type: "wh40k",
      title: {
        es: "GT Bogotá Open 2025",
        en: "GT Bogotá Open 2025"
      },
      date: "2025-03-15",
      dateEnd: "2025-03-16",
      dateLabel: {
        es: "15–16 Marzo 2025",
        en: "March 15–16, 2025"
      },
      price: "COP 120.000",
      description: {
        es: "Grand Tournament oficial de Warhammer 40K. Formato ITC. Clasificatorio para Golden Ticket. Cupos limitados.",
        en: "Official Warhammer 40K Grand Tournament. ITC format. Golden Ticket qualifying event. Limited spots."
      },
      details: [
        "📍 Bogotá, Colombia",
        "⚔️ 2000 pts — Formato ITC",
        "🏆 Golden Ticket en juego"
      ],
      enrollUrl: ""  // ← paste your Google Form URL here to enable the button
    },
    {
      id: "aos-gt-2025",
      active: true,
      featured: false,
      type: "aos",
      title: {
        es: "AoS Grand Tournament",
        en: "AoS Grand Tournament"
      },
      date: "2025-04-05",
      dateEnd: "2025-04-06",
      dateLabel: {
        es: "5–6 Abril 2025",
        en: "April 5–6, 2025"
      },
      price: "COP 100.000",
      description: {
        es: "Torneo GT de Age of Sigmar, el más grande de Colombia. Competencia de élite con los mejores jugadores del país.",
        en: "Age of Sigmar Grand Tournament, the biggest in Colombia. Elite competition with the country's top players."
      },
      details: [
        "📍 Bogotá, Colombia",
        "⚔️ Formato GHB oficial",
        "🎖️ Premios especiales"
      ],
      enrollUrl: ""  // ← paste your Google Form URL here to enable the button
    },
    {
      id: "kill-team-liga-t1-2025",
      active: true,
      featured: false,
      type: "killteam",
      title: {
        es: "Liga Kill Team — Temporada 1",
        en: "Kill Team League — Season 1"
      },
      date: "2025-02-01",
      dateEnd: "2025-05-31",
      dateLabel: {
        es: "Febrero – Mayo 2025",
        en: "February – May 2025"
      },
      price: "COP 50.000",
      description: {
        es: "Liga competitiva de Kill Team con formato de liguilla y eliminatorias. Perfecta para iniciarte en el juego competitivo.",
        en: "Competitive Kill Team league with round-robin and playoff format. Perfect for getting started in competitive play."
      },
      details: [
        "📍 Dice and Brush — Bogotá",
        "📅 Cada sábado",
        "🎯 Nivel abierto"
      ],
      enrollUrl: ""  // ← paste your Google Form URL here to enable the button
    }
  ],

  /* ═══════════════════════════════════════════════════════════
     GALLERY
     ───────────────────────────────────────────────────────────
     Fields:
       image       {string} Path relative to site root
                            e.g. "assets/gallery/gt2024.jpg"
       title       {object} { es, en }
       description {object} { es, en }
       date        {object} { es, en } (optional)
  ══════════════════════════════════════════════════════════════ */
  gallery: [
    {
      image: "assets/gallery/event-gt-2024.jpg",
      title: { es: "GT Bogotá 2024", en: "GT Bogotá 2024" },
      description: {
        es: "El Grand Tournament más grande del año reunió a los mejores jugadores de Colombia en una jornada épica de Warhammer 40K.",
        en: "The biggest Grand Tournament of the year brought together the best players in Colombia for an epic Warhammer 40K event."
      },
      date: { es: "Noviembre 2024", en: "November 2024" }
    },
    {
      image: "assets/gallery/event-killteam-2024.jpg",
      title: { es: "Liga Kill Team 2024", en: "Kill Team League 2024" },
      description: {
        es: "Semanas de competencia intensa, estrategia y camaradería en nuestra primera liga oficial de Kill Team.",
        en: "Weeks of intense competition, strategy and camaraderie in our first official Kill Team league."
      },
      date: { es: "Agosto – Octubre 2024", en: "August – October 2024" }
    },
    {
      image: "assets/gallery/event-painting-2024.jpg",
      title: { es: "Taller de Pintura 2024", en: "Painting Workshop 2024" },
      description: {
        es: "Nuestros talleres de pintura reúnen a hobbyistas de todos los niveles para aprender técnicas y compartir la pasión por las miniaturas.",
        en: "Our painting workshops bring together hobbyists of all levels to learn techniques and share the passion for miniatures."
      },
      date: { es: "Septiembre 2024", en: "September 2024" }
    },
    {
      image: "assets/gallery/event-aos-2024.jpg",
      title: { es: "AoS Open 2024", en: "AoS Open 2024" },
      description: {
        es: "El primer Grand Tournament de Age of Sigmar en Colombia, un hito histórico para el wargaming en Bogotá.",
        en: "The first Age of Sigmar Grand Tournament in Colombia, a historic milestone for wargaming in Bogotá."
      },
      date: { es: "Julio 2024", en: "July 2024" }
    }
  ]
};
