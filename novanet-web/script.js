/* ==========================================================
   Novanet LLC — script.js (vanilla JS, no build tools)
   ========================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Translations ---------- */
  var I18N = {
    en: {
      skip: "Skip to content",
      navServices: "Services", navProcess: "How we work", navCompany: "Company", navContact: "Contact",
      navCta: "Book a Call",
      heroEyebrow: "AI services agency",
      heroTitle: 'AI that works <span class="hl">inside your business.</span>',
      heroSub: "We build AI agents, chatbots and workflow automations for small and mid-sized businesses, so your team spends less time on repetitive work and more time growing.",
      heroCta1: "Book Your Free Strategy Call", heroCta2: "See Our Services",
      proof1: "Free 30-minute strategy call", proof2: "Clear proposal, no obligation", proof3: "English & Spanish",
      flowTitle: "Example workflow", flowRun: "Running", flowDone: "Completed", flowFoot: "End-to-end automation",
      flow1: "New inquiry arrives", flow1s: "Website, WhatsApp or email",
      flow2: "AI agent responds", flow2s: "Answers, qualifies and books",
      flow3: "Your CRM is updated", flow3s: "Data captured with no manual entry",
      flow4: "Your team is notified", flow4s: "Only when a person is needed",
      servEyebrow: "Services", servTitle: "AI solutions built around how your business works",
      s1t: "AI workflow automation", s1d: "Automate repetitive processes such as data entry, follow-ups, reporting and approvals.",
      tagAgents: "Most requested", tagBots: "24/7 support",
      f1t: "AI agents", f1d: "AI agents that do real work for your business around the clock: they qualify leads, follow up with customers, schedule meetings and keep your systems up to date.",
      f1b1: "Lead qualification & follow-ups", f1b2: "Scheduling & customer support", f1b3: "Connected to your CRM and tools",
      f2t: "AI chatbots", f2d: "Custom chatbots for your website, WhatsApp and social media, trained on your business information to answer instantly and turn conversations into customers.",
      f2b1: "Website, WhatsApp & Instagram", f2b2: "Trained on your own content", f2b3: "Hand-off to a person when needed",
      s3t: "AI integrations", s3d: "We connect AI to the tools you already use: CRMs, spreadsheets, email and e-commerce.",
      s4t: "AI consulting & training", s4d: "We find where AI adds real value and train your team to use it safely.",
      a1t: "AI-driven digital marketing", a1d: "Content creation and social media strategy powered by AI.",
      a2t: "Digital products", a2d: "Our own ebooks and online courses, sold through established platforms.",
      a3t: "Educational videos", a3d: "AI-assisted educational content on technology and productivity.",
      procEyebrow: "How we work", procTitle: "From first conversation to working solution",
      p1t: "Discover", p1d: "We review your processes and goals.",
      p2t: "Propose", p2d: "You receive a written proposal with scope, timeline and price.",
      p3t: "Build", p3d: "We implement, test and integrate the solution.",
      p4t: "Support", p4d: "We train your team and keep improving it with you.",
      midCta: "Not sure where to start? In 30 minutes we'll map your first automation, free.",
      coEyebrow: "Company", coTitle: "About Novanet LLC",
      coText: "Novanet LLC is a U.S. artificial intelligence services agency. We build AI agents, chatbots and automations that help small and mid-sized businesses work faster, serve their customers better and grow.",
      v1t: "Business first", v1d: "Every project starts with a concrete problem and a measurable goal.",
      v2t: "Bilingual team", v2d: "We work in English and Spanish with clients in the Americas and Spain.",
      v3t: "Responsible AI", v3d: "Privacy and security are part of every solution from day one.",
      faqTitle: "Frequently asked questions", faqSub: "Everything you need to know about AI agents, chatbots and how we work.", faqMore: "Still have questions? Email us",
      q1: "What is an AI agent?", a1: "An AI agent is software that understands requests and completes tasks on its own: answering customers, qualifying leads, booking meetings or updating your systems, with a person in the loop when needed.",
      q2: "What is the difference between a chatbot and an AI agent?", a2: "A chatbot answers questions in a conversation. An AI agent goes further: it takes actions across your tools, such as creating a record in your CRM or scheduling a call.",
      q3: "Who do you work with?", a3: "Small and mid-sized businesses and professionals who want to save time with AI, in English or Spanish.",
      q4: "Do you work remotely?", a4: "Yes. We work online with clients in the United States, Latin America and Spain.",
      q5: "How long does a project take?", a5: "It depends on the scope. A chatbot or a first automation can be ready in a few weeks, and every proposal includes a clear timeline.",
      ctaTitle: "Let's talk about what you want to automate.",
      ctaSub: "Tell us about your business. We reply within one business day with a first recommendation.",
      fmName: "Name", fmEmail: "Email", fmMsg: "What would you like to automate?",
      fmSend: "Get My Free Strategy Call", fmNote: "We reply within one business day.",
      fmError: "Please complete all fields (message of at least 10 characters) with a valid email.",
      fmSending: "Sending…",
      fmActivate: "This form is pending activation. Check the inbox and spam folder of info@novanetdigital.com for the FormSubmit email and click \"Activate Form\", then send again.",
      fmWait: "You just sent a message. Please wait a couple of minutes before sending another.",
      fmOk: "Thank you! Your message was sent. We'll get back to you within one business day.",
      fmFail: 'Something went wrong. Please email us at <a href="mailto:info@novanetdigital.com">info@novanetdigital.com</a>.',
      fmSubject: "Consultation request",
      legalTitle: "Legal",
      lPrivacy: "Privacy policy", lTerms: "Terms of service", lRefunds: "Refund policy",
      privacyText:
        "<p>This website is operated by Novanet LLC, a Wyoming limited liability company. We collect only the information you send us (such as your name, email and message) to answer inquiries, prepare proposals, deliver services and issue invoices.</p>" +
        "<p>We do not sell personal information. We share it only with providers that help us operate (email, hosting, payment platforms) or when required by law. Payments are processed by third-party platforms; we do not store card numbers.</p>" +
        "<p>To access, correct or delete your information, write to info@novanetdigital.com.</p>",
      termsText:
        "<p>Novanet LLC provides AI automation, chatbot, integration, consulting, training and AI-driven marketing services. Scope, deliverables, timeline and price are defined in a written proposal accepted by the client and billed by invoice.</p>" +
        "<p>Digital products are licensed for personal use and may not be resold. Novanet LLC does not hold, process or transfer funds on behalf of clients. Liability is limited to the amount paid for the related service. These terms are governed by the laws of the State of Wyoming.</p>",
      refundText:
        "<p><b>Digital products:</b> refunds may be requested within 7 days of purchase if the product has not been substantially used.</p>" +
        "<p><b>Services:</b> work already performed is not refundable. If a project is cancelled before work starts, any advance payment is refunded in full.</p>" +
        "<p>Requests: info@novanetdigital.com. Approved refunds are returned to the original payment method.</p>",
      rights: "All rights reserved.",
      title: "AI Agents & Chatbots for Small Businesses | Novanet LLC"
    },
    es: {
      skip: "Ir al contenido",
      navServices: "Servicios", navProcess: "Cómo trabajamos", navCompany: "Empresa", navContact: "Contacto",
      navCta: "Agenda una llamada",
      heroEyebrow: "Agencia de servicios de IA",
      heroTitle: 'Inteligencia artificial <span class="hl">que trabaja dentro de tu negocio.</span>',
      heroSub: "Creamos agentes de IA, chatbots y automatizaciones para pequeñas y medianas empresas, para que tu equipo dedique menos tiempo a tareas repetitivas y más a crecer.",
      heroCta1: "Agenda tu llamada estratégica gratis", heroCta2: "Ver servicios",
      proof1: "Llamada estratégica gratis de 30 min", proof2: "Propuesta clara, sin compromiso", proof3: "Español e inglés",
      flowTitle: "Flujo de ejemplo", flowRun: "En ejecución", flowDone: "Completado", flowFoot: "Automatización de punta a punta",
      flow1: "Llega una nueva consulta", flow1s: "Web, WhatsApp o correo",
      flow2: "El agente de IA responde", flow2s: "Contesta, califica y agenda",
      flow3: "Tu CRM se actualiza", flow3s: "Datos registrados sin digitar",
      flow4: "Tu equipo recibe el aviso", flow4s: "Solo cuando se necesita a una persona",
      servEyebrow: "Servicios", servTitle: "Soluciones de IA pensadas para cómo funciona tu negocio",
      s1t: "Automatización de procesos con IA", s1d: "Automatiza tareas repetitivas como registro de datos, seguimientos, reportes y aprobaciones.",
      tagAgents: "Lo más solicitado", tagBots: "Atención 24/7",
      f1t: "Agentes de IA", f1d: "Agentes de IA que hacen trabajo real para tu negocio a toda hora: califican prospectos, hacen seguimiento a clientes, agendan reuniones y mantienen tus sistemas al día.",
      f1b1: "Calificación y seguimiento de prospectos", f1b2: "Agenda y atención al cliente", f1b3: "Conectados a tu CRM y herramientas",
      f2t: "Chatbots con IA", f2d: "Chatbots a medida para tu web, WhatsApp y redes sociales, entrenados con la información de tu negocio para responder al instante y convertir conversaciones en clientes.",
      f2b1: "Web, WhatsApp e Instagram", f2b2: "Entrenados con tu propio contenido", f2b3: "Derivación a una persona cuando hace falta",
      s3t: "Integraciones de IA", s3d: "Conectamos la IA con las herramientas que ya usas: CRM, hojas de cálculo, correo y e-commerce.",
      s4t: "Consultoría y capacitación en IA", s4d: "Identificamos dónde la IA aporta valor real y capacitamos a tu equipo para usarla con seguridad.",
      a1t: "Marketing digital con IA", a1d: "Creación de contenido y estrategia de redes sociales con IA.",
      a2t: "Productos digitales", a2d: "Ebooks y cursos online propios, vendidos mediante plataformas reconocidas.",
      a3t: "Videos educativos", a3d: "Contenido educativo asistido por IA sobre tecnología y productividad.",
      procEyebrow: "Cómo trabajamos", procTitle: "De la primera conversación a una solución funcionando",
      p1t: "Diagnóstico", p1d: "Revisamos tus procesos y objetivos.",
      p2t: "Propuesta", p2d: "Recibes una propuesta escrita con alcance, plazos y precio.",
      p3t: "Implementación", p3d: "Construimos, probamos e integramos la solución.",
      p4t: "Soporte", p4d: "Capacitamos a tu equipo y seguimos mejorándola contigo.",
      midCta: "¿No sabes por dónde empezar? En 30 minutos definimos tu primera automatización, gratis.",
      coEyebrow: "Empresa", coTitle: "Sobre Novanet LLC",
      coText: "Novanet LLC es una agencia estadounidense de servicios de inteligencia artificial. Creamos agentes de IA, chatbots y automatizaciones que ayudan a pequeñas y medianas empresas a trabajar más rápido, atender mejor a sus clientes y crecer.",
      v1t: "Primero el negocio", v1d: "Cada proyecto parte de un problema concreto y un objetivo medible.",
      v2t: "Equipo bilingüe", v2d: "Trabajamos en español e inglés con clientes de América y España.",
      v3t: "IA responsable", v3d: "La privacidad y la seguridad forman parte de cada solución desde el primer día.",
      faqTitle: "Preguntas frecuentes", faqSub: "Todo lo que necesitas saber sobre agentes de IA, chatbots y cómo trabajamos.", faqMore: "¿Más preguntas? Escríbenos",
      q1: "¿Qué es un agente de IA?", a1: "Un agente de IA es un software que entiende solicitudes y completa tareas por sí solo: atiende clientes, califica prospectos, agenda reuniones o actualiza tus sistemas, con una persona supervisando cuando hace falta.",
      q2: "¿Qué diferencia hay entre un chatbot y un agente de IA?", a2: "Un chatbot responde preguntas en una conversación. Un agente de IA va más allá: ejecuta acciones en tus herramientas, como crear un registro en tu CRM o agendar una llamada.",
      q3: "¿Con quién trabajan?", a3: "Con pequeñas y medianas empresas y profesionales que quieren ahorrar tiempo con IA, en español o inglés.",
      q4: "¿Trabajan de forma remota?", a4: "Sí. Trabajamos en línea con clientes de Estados Unidos, Latinoamérica y España.",
      q5: "¿Cuánto dura un proyecto?", a5: "Depende del alcance. Un chatbot o una primera automatización puede estar lista en pocas semanas, y cada propuesta incluye plazos claros.",
      ctaTitle: "Conversemos sobre lo que quieres automatizar.",
      ctaSub: "Cuéntanos sobre tu negocio. Respondemos en un día hábil con una primera recomendación.",
      fmName: "Nombre", fmEmail: "Correo", fmMsg: "¿Qué te gustaría automatizar?",
      fmSend: "Quiero mi llamada gratuita", fmNote: "Respondemos en un día hábil.",
      fmError: "Completa todos los campos (mensaje de al menos 10 caracteres) con un correo válido.",
      fmSending: "Enviando…",
      fmActivate: "El formulario está pendiente de activación. Revisa la bandeja de entrada y el spam de info@novanetdigital.com, abre el correo de FormSubmit, pulsa \"Activate Form\" y vuelve a enviar.",
      fmWait: "Acabas de enviar un mensaje. Espera un par de minutos antes de enviar otro.",
      fmOk: "¡Gracias! Tu mensaje fue enviado. Te responderemos en un día hábil.",
      fmFail: 'Algo salió mal. Escríbenos a <a href="mailto:info@novanetdigital.com">info@novanetdigital.com</a>.',
      fmSubject: "Solicitud de consulta",
      legalTitle: "Información legal",
      lPrivacy: "Política de privacidad", lTerms: "Términos del servicio", lRefunds: "Política de reembolsos",
      privacyText:
        "<p>Este sitio es operado por Novanet LLC, sociedad de responsabilidad limitada de Wyoming. Solo recopilamos los datos que nos envías (como nombre, correo y mensaje) para responder consultas, preparar propuestas, prestar servicios y emitir facturas.</p>" +
        "<p>No vendemos datos personales. Solo los compartimos con proveedores que nos ayudan a operar (correo, hosting, plataformas de pago) o cuando la ley lo exige. Los pagos los procesan plataformas de terceros; no guardamos números de tarjeta.</p>" +
        "<p>Para acceder, corregir o eliminar tus datos, escribe a info@novanetdigital.com.</p>",
      termsText:
        "<p>Novanet LLC presta servicios de automatización con IA, chatbots, integraciones, consultoría, capacitación y marketing digital con IA. El alcance, entregables, plazos y precio se definen en una propuesta escrita aceptada por el cliente y se facturan.</p>" +
        "<p>Los productos digitales se licencian para uso personal y no pueden revenderse. Novanet LLC no custodia, procesa ni transfiere fondos por cuenta de sus clientes. La responsabilidad se limita al monto pagado por el servicio. Estos términos se rigen por las leyes del Estado de Wyoming.</p>",
      refundText:
        "<p><b>Productos digitales:</b> puedes solicitar reembolso dentro de los 7 días posteriores a la compra si el producto no ha sido utilizado sustancialmente.</p>" +
        "<p><b>Servicios:</b> el trabajo ya realizado no es reembolsable. Si un proyecto se cancela antes de empezar, el adelanto se devuelve completo.</p>" +
        "<p>Solicitudes: info@novanetdigital.com. Los reembolsos aprobados se devuelven al medio de pago original.</p>",
      rights: "Todos los derechos reservados.",
      title: "Agentes de IA y chatbots para pymes | Novanet LLC"
    }
  };

  // Free form-to-email service (FormSubmit). Activate once via the email it sends you.
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/info@novanetdigital.com";

  var STORE_KEY = "novanet-lang";
  var current = "en";

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* storage unavailable */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return String(nav).toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    current = lang;
    document.documentElement.lang = lang;
    document.title = dict.title;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (dict[k] != null) nodes[i].textContent = dict[k];
    }
    var html = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < html.length; j++) {
      var h = html[j].getAttribute("data-i18n-html");
      if (dict[h] != null) html[j].innerHTML = dict[h]; // trusted, static strings defined above
    }
    var btns = document.querySelectorAll(".lang button");
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute("aria-pressed", btns[b].getAttribute("data-lang") === lang ? "true" : "false");
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Hero workflow animation (looping sequence) ---------- */
  function initFlow() {
    var flow = document.querySelector(".flow");
    if (!flow) return;
    var steps = Array.prototype.slice.call(flow.querySelectorAll(".flow__step"));
    var pct = flow.querySelector(".flow__pct");
    var total = steps.length;

    // seq: -1 = idle, 0..total-1 = step running, total = all completed
    function render(seq) {
      steps.forEach(function (s, k) {
        s.classList.toggle("is-done", k < seq);
        s.classList.toggle("is-active", k === seq);
      });
      flow.classList.toggle("is-complete", seq >= total);
      var p = Math.max(0, Math.min(seq, total)) / total;
      flow.style.setProperty("--p", p);
      if (pct) pct.textContent = Math.round(p * 100) + "%";
    }

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { render(total); return; }

    var seq = -1, timer = null, running = false, inView = false;
    function tick() {
      render(seq);
      var delay = seq < 0 ? 700 : (seq < total ? 1700 : 2800);
      seq = seq >= total ? -1 : seq + 1;
      timer = setTimeout(tick, delay);
    }
    function start() { if (!running && inView && !document.hidden) { running = true; tick(); } }
    function stop() { running = false; clearTimeout(timer); }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) start(); else stop();
      }, { threshold: 0.2 }).observe(flow);
    } else { inView = true; start(); }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
  }

  /* ---------- Init ---------- */
  function init() {
    applyLang(detectLang());

    // Language toggle
    document.querySelector(".lang").addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-lang]");
      if (btn) applyLang(btn.getAttribute("data-lang"));
    });

    initFlow();

    // Year
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // Mobile menu
    var menuBtn = document.querySelector(".menu-btn");
    var nav = document.getElementById("nav");
    function closeMenu() { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    // Header shadow on scroll (passive, rAF-throttled)
    var header = document.getElementById("header");
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    }, { passive: true });

    // Reveal on scroll (stagger siblings)
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var groups = new Map();
      reveals.forEach(function (el) {
        var p = el.parentElement;
        var idx = groups.get(p) || 0;
        el.style.setProperty("--rd", Math.min(idx * 0.08, 0.4) + "s");
        groups.set(p, idx + 1);
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });

      // Active nav link
      var links = nav.querySelectorAll('a[href^="#"]');
      var map = {};
      links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var a = map[en.target.id];
          if (a && en.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("is-active"); });
            a.classList.add("is-active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      Object.keys(map).forEach(function (id) {
        var s = document.getElementById(id);
        if (s) spy.observe(s);
      });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // Footer legal links open the matching <details>
    document.querySelectorAll("[data-legal]").forEach(function (a) {
      a.addEventListener("click", function () {
        var d = document.getElementById(a.getAttribute("href").slice(1));
        if (d) d.open = true;
      });
    });
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.tagName === "DETAILS") target.open = true;
    }

    // Contact form -> prefilled email (no backend needed)
    var form = document.getElementById("contact-form");
    var note = document.getElementById("form-note");
    var formShownAt = Date.now();
    // Start the timer when the form is actually seen, not on page load.
    if ("IntersectionObserver" in window) {
      var fo = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { formShownAt = Date.now(); fo.disconnect(); }
      });
      fo.observe(form);
    }
    function nativeSubmit() {
      var d = I18N[current];
      form.elements._subject.value = "Novanet: " + d.fmSubject + " - " + form.elements.name.value.trim();
      form.elements._next.value = location.origin + location.pathname + "?sent=1#contact";
      HTMLFormElement.prototype.submit.call(form);
    }
    if (/[?&]sent=1/.test(location.search)) {
      note.textContent = I18N[current].fmOk;
      note.classList.add("is-ok");
      if (history.replaceState) history.replaceState(null, "", location.pathname + "#contact");
    }
    function fakeSuccess() {
      // Bots get a "success" so they don't retry; nothing is sent.
      form.reset();
      note.textContent = I18N[current].fmOk;
      note.classList.add("is-ok");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = I18N[current];
      var name = form.elements.name, email = form.elements.email, msg = form.elements.message;
      var ok = true;
      [name, email, msg].forEach(function (f) {
        var valid = f.value.trim().length >= Math.max(1, f.minLength || 0) && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.classList.toggle("is-invalid", !valid);
        f.setAttribute("aria-invalid", valid ? "false" : "true");
        if (!valid) ok = false;
      });
      if (!ok) { note.textContent = dict.fmError; return; }
      // ---- Anti-spam checks (silent for bots, friendly for people) ----
      // 1) Honeypot: hidden field only bots fill in.
      if (form.elements._honey && form.elements._honey.value) { fakeSuccess(); return; }
      // 2) Time trap: humans need more than 4 seconds to fill the form.
      if (Date.now() - formShownAt < 4000) { fakeSuccess(); return; }
      // 3) Content filter: too many links or typical spam patterns.
      var text = name.value + " " + msg.value;
      var links = (text.match(/https?:\/\/|www\./gi) || []).length;
      if (links > 1 || /<[a-z][\s\S]*>|\[url=|\b(viagra|casino|crypto ?airdrop|backlinks?|seo services|loan offer)\b/i.test(text)) {
        fakeSuccess(); return;
      }
      if (/https?:\/\/|www\./i.test(name.value)) { fakeSuccess(); return; }
      // 4) Rate limit: one message per 2 minutes per browser.
      var last = 0;
      try { last = Number(localStorage.getItem("novanet-last-send")) || 0; } catch (e2) { /* ignore */ }
      if (Date.now() - last < 120000) { note.textContent = dict.fmWait; return; }

      var btn = form.querySelector('button[type="submit"]');
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = dict.fmSending;
      note.textContent = "";

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          message: msg.value.trim(),
          language: current,
          _subject: "Novanet: " + dict.fmSubject + " - " + name.value.trim(),
          _replyto: email.value.trim(),
          _template: "table",
          _captcha: "false",
          _blacklist: "viagra, casino, backlinks, seo services, crypto airdrop, loan offer, porn"
        })
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; });
        })
        .then(function (res) {
          if (res.ok && String(res.d.success) === "true") {
            try { localStorage.setItem("novanet-last-send", String(Date.now())); } catch (e3) { /* ignore */ }
            form.reset();
            note.textContent = dict.fmOk;
            note.classList.add("is-ok");
            return;
          }
          var m = String((res.d && res.d.message) || "");
          if (window.console) console.warn("FormSubmit response:", res.d);
          if (/activat/i.test(m)) { note.textContent = dict.fmActivate; return; }
          throw new Error(m || "send failed");
        })
        .catch(function (err) {
          if (window.console) console.warn("Form send error:", err);
          // Network/CORS/blocked request: fall back to a normal form submission.
          if (err && err.name === "TypeError") { nativeSubmit(); return; }
          note.innerHTML = dict.fmFail; // static trusted string
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = label;
        });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
