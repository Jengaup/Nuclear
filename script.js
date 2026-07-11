/* ============================================================
   Nuclear Alternative Project — interactivity
   ============================================================ */

/* ---------- Spanish translations ---------- */
const I18N = {
  skip: "Saltar al contenido",
  nav_about: "Nosotros", nav_challenge: "El Reto", nav_work: "Trabajo",
  nav_tech: "Tecnología", nav_sites: "Emplazamientos", nav_faq: "Preguntas",
  nav_involved: "Participa", nav_donate: "Donar",
  nav_film: "Video", nav_resources: "Recursos",

  film_eyebrow: "Película de archivo",
  film_title: "La historia nuclear de Puerto Rico, en película",
  film_lead: "La energía nuclear en Puerto Rico no es nueva. Este documental de 1967 sigue al reactor BONUS — la central Boiling Nuclear Superheat en Rincón — una planta pionera construida en la isla. Es la historia sobre la que se construye la visión actual de reactores avanzados.",
  film_cap: "FIG. 02 — Reactor BONUS · Rincón, Puerto Rico · 1967",
  film_watch: "Ver en YouTube ↗",

  res_eyebrow: "Recursos y Noticias",
  res_title: "Explora la investigación",
  res_lead: "Todo lo que NAP ha publicado, además de cobertura del Departamento de Energía de EE. UU. y laboratorios nacionales. Todos los enlaces abren las fuentes oficiales.",
  res1_t: "Biblioteca de recursos", res1_p: "La biblioteca pública de NAP con datos e informes sobre energía nuclear para Puerto Rico.",
  res2_t: "Estudio de viabilidad del DOE", res2_p: "El resumen del Departamento de Energía sobre el estudio de viabilidad de SMR y microrreactores.",
  res3_t: "Idaho National Laboratory", res3_p: "«Llevando energía resiliente a Puerto Rico con microrreactores».",
  res4_t: "Nuestro Trabajo", res4_p: "Los proyectos, fases y avances de NAP hacia la energía nuclear avanzada para la isla.",
  res5_t: "Nuclear para Puerto Rico", res5_p: "Por qué la nuclear avanzada encaja con las necesidades de energía y resiliencia de la isla.",
  res6_t: "Nosotros y el Equipo", res6_p: "Conoce a los ingenieros puertorriqueños detrás del Nuclear Alternative Project.",

  fig_label: "FIG. 01 — REACTOR AVANZADO",
  ann_core: "NÚCLEO", ann_containment: "CONTENCIÓN", ann_footprint: "HUELLA COMPACTA",
  news_kicker: "Señal · Boletín", cta_kicker: "Canal abierto",
  tb_status_l: "Estado", tb_status_v: "Organización sin fines de lucro 501(c)(3)",
  tb_est_l: "Fundada", tb_loc_l: "Ubicación", tb_loc_v: "Puerto Rico · EE.UU.",

  hero_eyebrow: "Sin fines de lucro · Fundada en 2015 · Por ingenieros puertorriqueños",
  hero_title_1: "Energía limpia y resiliente",
  hero_title_2: "diseñada para Puerto Rico",
  hero_sub: "Somos una organización sin fines de lucro que une a ingenieros puertorriqueños de toda la industria nuclear de EE. UU. con una sola misión: estudiar y educar sobre los reactores nucleares avanzados como una alternativa de energía limpia, confiable y resiliente para la isla.",
  hero_cta1: "Conoce nuestro trabajo",
  hero_cta2: "Apoya la misión",
  stat_74: "de las plantas eléctricas de Puerto Rico podrían reemplazarse con SMR",
  stat_grant: "en fondos del DOE otorgados para un estudio de emplazamiento (Fase 2)",
  stat_sites: "emplazamientos candidatos identificados bajo criterios de la NRC",
  stat_year: "el año en que nuestros ingenieros se unieron",

  about_eyebrow: "Quiénes somos",
  about_title: "Ingenieros de la isla, para la isla",
  about_p1: "El Nuclear Alternative Project (NAP) es una organización sin fines de lucro 501(c)(3) creada por un grupo de ingenieros puertorriqueños que trabajan en la industria nuclear de EE. UU. Nos unimos en torno a una creencia compartida: Puerto Rico merece un futuro energético limpio, asequible y lo suficientemente fuerte para resistir la próxima tormenta.",
  about_p2: "Nuestra misión es educar a las comunidades de Puerto Rico sobre la energía nuclear de una manera que facilite el intercambio libre y abierto de información, para que las decisiones sobre el futuro energético de la isla se tomen con hechos, no con miedo.",
  about_quote: "«Un Puerto Rico fuerte y moderno, impulsado por una cartera de energía limpia que incluya la nuclear.»",
  about_photo_cap: "El equipo de NAP — ingenieros puertorriqueños detrás de la misión",
  value1_t: "Educar", value1_p: "Información clara y honesta sobre la energía nuclear avanzada para comunidades, estudiantes y líderes.",
  value2_t: "Estudiar", value2_p: "Investigación rigurosa de viabilidad y emplazamiento financiada por el DOE y fundamentada en la ingeniería.",
  value3_t: "Empoderar", value3_p: "Dar a los puertorriqueños las herramientas para forjar un futuro energético resiliente y autosuficiente.",

  challenge_eyebrow: "El Reto",
  challenge_title: "Una red eléctrica al límite",
  challenge_lead: "Cuando el huracán María azotó en 2017, dejó al descubierto lo frágil que es la envejecida red eléctrica de Puerto Rico, dependiente de combustibles fósiles. Reconstruir con más fuerza significa repensar cómo la isla genera su energía.",
  ch1_t: "Combustibles fósiles importados", ch1_p: "La isla depende en gran medida del petróleo y el gas importados, exponiendo a familias e industria a precios eléctricos altos y volátiles.",
  ch2_t: "Vulnerable a las tormentas", ch2_p: "Las plantas centralizadas y las largas líneas de transmisión se caen con facilidad, dejando comunidades a oscuras durante semanas tras un huracán.",
  ch3_t: "Metas de energía limpia", ch3_p: "Puerto Rico se ha comprometido con un 100% de electricidad renovable, una meta que necesita energía firme y libre de carbono para ser confiable día y noche.",
  ch4_t: "Resiliencia por diseño", ch4_p: "El camino a seguir es una red de microrredes que mantengan funcionando hospitales, agua y hogares cuando la red principal falle.",

  work_eyebrow: "Nuestro Trabajo",
  work_title: "De una idea a un esfuerzo nacional de investigación",
  work_lead: "Lo que comenzó como ingenieros voluntarios compartiendo una visión es hoy un programa de varios años financiado por el Departamento de Energía de EE. UU. y apoyado por laboratorios nacionales.",
  tl1_t: "El equipo se une", tl1_p: "Ingenieros puertorriqueños que trabajan en la industria nuclear de EE. UU. se unen en torno a una misión común: estudiar reactores avanzados para la isla.",
  tl2_t: "Subvención de viabilidad del DOE", tl2_p: "La Oficina de Energía Nuclear del Departamento de Energía de EE. UU. financia al NAP para estudiar las condiciones del mercado, el marco legal, la infraestructura existente y la percepción pública.",
  tl3_t: "Estudio de viabilidad histórico", tl3_p: "El NAP publica el «Estudio Preliminar de Viabilidad de SMR y Microrreactores para Puerto Rico», concluyendo que los reactores pequeños podrían reemplazar hasta el 74% de las plantas eléctricas de la isla, siendo viable económica y técnicamente.",
  tl4_t: "Fase 2: estudio de emplazamiento", tl4_p: "Con más de 1,6 millones de dólares en fondos adicionales del DOE, el NAP avanza a un estudio de idoneidad de emplazamientos, identificando dos sitios candidatos usando criterios de la Comisión Reguladora Nuclear (NRC).",

  tech_eyebrow: "La Tecnología",
  tech_title: "Reactores avanzados, a la medida de una isla",
  tech_lead: "La energía nuclear moderna no son las plantas gigantes del pasado. Los reactores avanzados son más pequeños, se fabrican en serie y están diseñados para ser intrínsecamente seguros: perfectos para la red y la geografía de Puerto Rico.",
  tech1_badge: "Reactor Modular Pequeño", tech1_p: "Reactores de hasta ~300 MW por unidad, fabricados en plantas y enviados al sitio. Escalables según la demanda e ideales para reemplazar plantas fósiles en retiro.",
  tech1_l1: "Fabricado en serie y escalable", tech1_l2: "Energía firme sin carbono 24/7", tech1_l3: "Se combina con solar y eólica",
  tech2_badge: "Microrreactor", tech2_p: "Reactores muy pequeños (a menudo menos de 20 MW) que pueden alimentar un hospital, un pueblo o una microrred, y seguir funcionando cuando la red principal falla.",
  tech2_l1: "Perfecto para microrredes", tech2_l2: "Transportable y de despliegue rápido", tech2_l3: "Años de combustible sin recarga",
  tech3_badge: "Por qué encaja", tech3_h: "Resiliencia", tech3_p: "Los reactores avanzados distribuidos complementan una red dominada por la solar, estabilizan los precios para la economía manufacturera y siguen en pie durante la temporada de huracanes.",
  tech3_l1: "Diseño resistente a tormentas", tech3_l2: "Precios eléctricos estables", tech3_l3: "Independencia energética",

  sites_eyebrow: "Emplazamientos Candidatos",
  sites_title: "Dos ubicaciones en estudio",
  sites_lead: "Aplicando criterios de la Comisión Reguladora Nuclear (geología y sismología, clima, población, impacto ambiental y seguridad), el NAP ha identificado dos sitios prometedores en la isla.",
  site1_t: "Costa Norte · cerca de Manatí", site1_p: "Cerca de un centro industrial establecido en la costa norte de la isla.",
  site2_t: "Costa Este · Roosevelt Roads", site2_p: "La antigua Estación Naval Roosevelt Roads, con infraestructura y acceso existentes.",
  map_note: "Mapa ilustrativo, solo como referencia.",

  faq_eyebrow: "Respuestas Directas",
  faq_title: "La nuclear, con honestidad",
  faq_lead: "Las preguntas que más nos hacen, respondidas sin rodeos.",
  faq1_q: "¿Es segura la energía nuclear?", faq1_a: "La nuclear es una de las formas más seguras de generar electricidad. Los reactores avanzados añaden características de seguridad pasiva que apagan el reactor de forma natural, sin operadores ni energía externa, haciendo que un accidente grave sea extremadamente improbable.",
  faq2_q: "¿Y los desechos nucleares?", faq2_a: "Los reactores modernos producen pequeños volúmenes de desechos que se contienen y monitorean de forma segura. Muchos diseños avanzados usan el combustible de forma mucho más eficiente, y el total de desechos de décadas de operación es notablemente compacto.",
  faq3_q: "¿Pueden los reactores resistir un huracán?", faq3_a: "Sí. Los reactores están entre las estructuras más resistentes a tormentas jamás construidas, diseñadas para soportar vientos extremos, inundaciones y sismos, y para seguir entregando energía cuando el resto de la red está caída.",
  faq4_q: "¿Esto reemplaza la solar y la eólica?", faq4_a: "No, las complementa. La nuclear avanzada aporta energía firme las 24 horas que se combina con la creciente solar de Puerto Rico para crear una red limpia que sigue siendo confiable incluso de noche o durante tormentas.",
  faq5_q: "¿Esto realmente va a pasar?", faq5_a: "El trabajo del NAP es investigación y educación. Cualquier despliegue requeriría estudios extensos, participación comunitaria y aprobación regulatoria. Nuestro papel es aportar los hechos para que Puerto Rico decida por sí mismo.",

  inv_eyebrow: "Participa",
  inv_title: "Ayuda a construir el futuro energético de Puerto Rico",
  inv_lead: "Como organización sin fines de lucro, funcionamos con el apoyo de la comunidad. Hay un lugar para todos en esta misión.",
  inv1_t: "Donar", inv1_p: "Financia investigación y educación independientes. Cada aporte a nuestra 501(c)(3) es deducible de impuestos.", inv1_cta: "Donar",
  inv2_t: "Voluntariado", inv2_p: "Ingenieros, educadores, traductores y organizadores comunitarios: nos encantaría contar con tu talento.", inv2_cta: "Únete",
  inv3_t: "Corre la voz", inv3_p: "Comparte nuestra investigación, invítanos a hablar o inicia una conversación en tu comunidad.", inv3_cta: "Saber más",
  news_t: "Mantente informado", news_p: "Recibe actualizaciones ocasionales sobre nuestra investigación y el futuro energético de Puerto Rico.",
  news_label: "Correo electrónico", news_btn: "Suscribirse",

  cta_title: "¿Preguntas sobre la nuclear para Puerto Rico?",
  cta_p: "Siempre nos alegra conversar con comunidades, estudiantes, periodistas y quienes toman decisiones.",

  foot_tag: "Una organización sin fines de lucro que estudia y educa sobre la energía nuclear avanzada para Puerto Rico.",
  foot_explore: "Explorar", foot_connect: "Conecta", foot_org: "Organización",
  foot_501: "Organización sin fines de lucro 501(c)(3)", foot_pr: "Puerto Rico · Estados Unidos",
  foot_rights: "Todos los derechos reservados.",
  foot_disc: "Sitio independiente creado por la comunidad, celebrando la misión del NAP."
};

/* store English originals on first load */
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });

let lang = localStorage.getItem("nap-lang") || "en";

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  const dict = l === "es" ? I18N : EN;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = l === "es" ? "EN" : "ES";
  localStorage.setItem("nap-lang", l);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLang(lang === "es" ? "en" : "es");
});

/* ---------- Theme ---------- */
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("nap-theme")
  || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.documentElement.setAttribute("data-theme", savedTheme);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("nap-theme", next);
});

/* ---------- Mobile nav ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Header shadow + back-to-top ---------- */
const header = document.querySelector(".site-header");
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
  toTop.classList.toggle("show", window.scrollY > 600);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Animated counters ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const plain = el.dataset.plain === "true";
  const dur = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target * eased;
    el.textContent = plain
      ? Math.round(val).toString()
      : prefix + val.toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = plain ? target.toString() : prefix + target.toFixed(decimals) + suffix;
  }
  requestAnimationFrame(tick);
}
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); countObserver.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-num").forEach(el => countObserver.observe(el));

/* ---------- Newsletter (demo, no backend) ---------- */
const newsForm = document.getElementById("news-form");
newsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("news-email");
  const msg = document.getElementById("news-msg");
  if (!input.value || !input.checkValidity()) {
    msg.textContent = lang === "es" ? "Por favor introduce un correo válido." : "Please enter a valid email.";
    return;
  }
  msg.textContent = lang === "es"
    ? "¡Gracias! Te mantendremos informado."
    : "Thanks! We'll keep you posted.";
  input.value = "";
});

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Init language ---------- */
applyLang(lang);
