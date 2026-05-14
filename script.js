(function () {
  const SUPPORTED_LANGS = ["de", "en", "fr", "it"];
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      "nav.products": "Produkte",
      "nav.app": "App",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      "nav.shop": "Shop",
      "footer.note": "Präzise Kraftmessung mit intelligenter Software für alle, die Training nachvollziehbar, strukturiert und messbar machen wollen.",
      "footer.platform": "Plattform",
      "footer.wiki": "Wiki & Ressourcen",
      "footer.navigation": "Navigation",
      "footer.home": "Home",
      "lang.label": "Sprache",
      "contact.form.name": "Name",
      "contact.form.email": "E-Mail",
      "contact.form.message": "Nachricht",
      "contact.form.submit": "Nachricht per E-Mail senden",
      "contact.form.subject": "Betreff",
      "contact.hero.title": "Fragen, Interesse oder Zusammenarbeit?",
      "contact.hero.lead": "Du möchtest mehr über DynoGrip, DynoPull oder die App erfahren, ein Modul ausprobieren oder über eine Zusammenarbeit sprechen? Dann melde dich direkt.",
      "contact.direct.title": "Direkter Kontakt",
      "contact.direct.copy": "Für Produktinteresse, Rückfragen, Projektanfragen oder Zusammenarbeit kannst du direkt Kontakt aufnehmen.",
      "contact.label.email": "E-Mail",
      "contact.label.website": "Website",
      "contact.label.availableFor": "Möglich für",
      "contact.availableFor.items": "Produktanfragen, App-Fragen, Verfügbarkeit und Zusammenarbeit",
      "contact.form.title": "Kontaktformular",
      "contact.form.intro": "Noch nicht bereit",
      "contact.form.name.placeholder": "Dein Name",
      "contact.form.email.placeholder": "deine@email.ch",
      "contact.form.subject.placeholder": "Worum geht es?",
      "contact.form.message.placeholder": "Beschreibe dein Anliegen kurz",
      "contact.form.note": "Die Funktion zum Senden des Formulars ist momentan nicht implementiert.",
      "contact.integration.title": "Der offene DynoForce Ansatz: Vom Gerät zur gesamten Plattform.",
      "contact.integration.copy": "Wir sehen DynoForce nicht nur als Produkt, sondern als wissenschaftliches Ökosystem. Für Experten – Forscher, Therapeuten und Forschungskliniken – entwickeln wir die Technologie für Ihre Bedürfnisse.",
      "contact.integration.dev.eyebrow": "🛠️ Skalierbare Entwicklung",
      "contact.integration.dev.title": "Unsere API: Ihr Schlüssel zur Individualisierung.",
      "contact.integration.dev.copy": "Unser System ist modular und über eine offene API zugänglich. Entwickeln Sie eigene Programme, Protokolle oder Schnittstellen zu bestehenden Managementsystemen (PMS). Wir stellen die Daten, Sie definieren die Anwendung.",
      "contact.integration.research.eyebrow": "💻 Für Entwickler und Forschung",
      "contact.integration.research.title": "Python & die Entwicklungsumgebung.",
      "contact.integration.research.copy": "Profitieren Sie von unserer umfassenden Python-Library. Alle Ressourcen und die API-Schnittstelle finden Sie in unserem offenen Repository.",
      "contact.integration.cta.repo": "Direkt ins Entwickler-Repository",
      "contact.integration.cta.partner": "Partnerschaft anfragen"
    },
    en: {
      "nav.products": "Products",
      "nav.app": "App",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.shop": "Shop",
      "footer.note": "Precise strength measurement with smart software for anyone who wants training to be clear, structured, and measurable.",
      "footer.platform": "Platform",
      "footer.wiki": "Wiki & Resources",
      "footer.navigation": "Navigation",
      "footer.home": "Home",
      "lang.label": "Language",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.submit": "Send message via email",
      "contact.form.subject": "Subject",
      "contact.hero.title": "Questions, interest, or collaboration?",
      "contact.hero.lead": "Would you like to learn more about DynoGrip, DynoPull, or the app, test a module, or talk about a collaboration? Get in touch directly.",
      "contact.direct.title": "Direct contact",
      "contact.direct.copy": "You can contact us directly for product interest, questions, project requests, or collaboration.",
      "contact.label.email": "Email",
      "contact.label.website": "Website",
      "contact.label.availableFor": "Available for",
      "contact.availableFor.items": "Product inquiries, app questions, availability, and collaboration",
      "contact.form.title": "Contact form",
      "contact.form.intro": "Not ready yet",
      "contact.form.name.placeholder": "Your name",
      "contact.form.email.placeholder": "your@email.com",
      "contact.form.subject.placeholder": "What is this about?",
      "contact.form.message.placeholder": "Briefly describe your request",
      "contact.form.note": "The form submission feature is currently not implemented.",
      "contact.integration.title": "The open DynoForce approach: from device to full platform.",
      "contact.integration.copy": "We see DynoForce not just as a product, but as a scientific ecosystem. For experts—researchers, therapists, and research clinics—we develop technology tailored to your needs.",
      "contact.integration.dev.eyebrow": "🛠️ Scalable development",
      "contact.integration.dev.title": "Our API: your key to customization.",
      "contact.integration.dev.copy": "Our system is modular and accessible via an open API. Build your own programs, protocols, or interfaces to existing management systems (PMS). We provide the data, you define the application.",
      "contact.integration.research.eyebrow": "💻 For developers and research",
      "contact.integration.research.title": "Python & development environment.",
      "contact.integration.research.copy": "Benefit from our comprehensive Python library. You can find all resources and the API interface in our open repository.",
      "contact.integration.cta.repo": "Go to developer repository",
      "contact.integration.cta.partner": "Request partnership"
    },
    fr: {
      "nav.products": "Produits",
      "nav.app": "App",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.shop": "Boutique",
      "footer.note": "Mesure précise de la force avec un logiciel intelligent pour rendre l'entraînement clair, structuré et mesurable.",
      "footer.platform": "Plateforme",
      "footer.wiki": "Wiki & Ressources",
      "footer.navigation": "Navigation",
      "footer.home": "Accueil",
      "lang.label": "Langue",
      "contact.form.name": "Nom",
      "contact.form.email": "E-mail",
      "contact.form.message": "Message",
      "contact.form.submit": "Envoyer le message par e-mail",
      "contact.form.subject": "Objet",
      "contact.hero.title": "Questions, intérêt ou collaboration ?",
      "contact.hero.lead": "Vous souhaitez en savoir plus sur DynoGrip, DynoPull ou l’application, tester un module ou discuter d’une collaboration ? Contactez-nous directement.",
      "contact.direct.title": "Contact direct",
      "contact.direct.copy": "Pour un intérêt produit, des questions, des demandes de projet ou une collaboration, vous pouvez nous contacter directement.",
      "contact.label.email": "E-mail",
      "contact.label.website": "Site web",
      "contact.label.availableFor": "Disponible pour",
      "contact.availableFor.items": "Demandes produits, questions sur l’application, disponibilité et collaboration",
      "contact.form.title": "Formulaire de contact",
      "contact.form.intro": "Pas encore prêt",
      "contact.form.name.placeholder": "Votre nom",
      "contact.form.email.placeholder": "votre@email.com",
      "contact.form.subject.placeholder": "De quoi s'agit-il ?",
      "contact.form.message.placeholder": "Décrivez brièvement votre demande",
      "contact.form.note": "La fonction d’envoi du formulaire n’est actuellement pas implémentée.",
      "contact.integration.title": "L’approche ouverte de DynoForce : de l’appareil à la plateforme complète.",
      "contact.integration.copy": "Nous voyons DynoForce non seulement comme un produit, mais comme un écosystème scientifique. Pour les experts — chercheurs, thérapeutes et cliniques de recherche — nous développons une technologie adaptée à vos besoins.",
      "contact.integration.dev.eyebrow": "🛠️ Développement évolutif",
      "contact.integration.dev.title": "Notre API : votre clé pour la personnalisation.",
      "contact.integration.dev.copy": "Notre système est modulaire et accessible via une API ouverte. Développez vos propres programmes, protocoles ou interfaces vers des systèmes de gestion existants (PMS). Nous fournissons les données, vous définissez l’application.",
      "contact.integration.research.eyebrow": "💻 Pour les développeurs et la recherche",
      "contact.integration.research.title": "Python et l’environnement de développement.",
      "contact.integration.research.copy": "Profitez de notre bibliothèque Python complète. Vous trouverez toutes les ressources et l’interface API dans notre dépôt ouvert.",
      "contact.integration.cta.repo": "Accéder au dépôt développeur",
      "contact.integration.cta.partner": "Demander un partenariat"
    },
    it: {
      "nav.products": "Prodotti",
      "nav.app": "App",
      "nav.about": "Chi siamo",
      "nav.contact": "Contatti",
      "nav.shop": "Shop",
      "footer.note": "Misurazione precisa della forza con software intelligente per un allenamento chiaro, strutturato e misurabile.",
      "footer.platform": "Piattaforma",
      "footer.wiki": "Wiki e risorse",
      "footer.navigation": "Navigazione",
      "footer.home": "Home",
      "lang.label": "Lingua",
      "contact.form.name": "Nome",
      "contact.form.email": "E-mail",
      "contact.form.message": "Messaggio",
      "contact.form.submit": "Invia messaggio via e-mail",
      "contact.form.subject": "Oggetto",
      "contact.hero.title": "Domande, interesse o collaborazione?",
      "contact.hero.lead": "Vuoi saperne di più su DynoGrip, DynoPull o sull’app, provare un modulo o parlare di una collaborazione? Contattaci direttamente.",
      "contact.direct.title": "Contatto diretto",
      "contact.direct.copy": "Per interesse verso il prodotto, domande, richieste di progetto o collaborazioni, puoi contattarci direttamente.",
      "contact.label.email": "E-mail",
      "contact.label.website": "Sito web",
      "contact.label.availableFor": "Disponibile per",
      "contact.availableFor.items": "Richieste prodotto, domande sull’app, disponibilità e collaborazione",
      "contact.form.title": "Modulo di contatto",
      "contact.form.intro": "Non ancora pronto",
      "contact.form.name.placeholder": "Il tuo nome",
      "contact.form.email.placeholder": "tuo@email.com",
      "contact.form.subject.placeholder": "Di cosa si tratta?",
      "contact.form.message.placeholder": "Descrivi brevemente la tua richiesta",
      "contact.form.note": "La funzione di invio del modulo al momento non è implementata.",
      "contact.integration.title": "L’approccio aperto DynoForce: dal dispositivo all’intera piattaforma.",
      "contact.integration.copy": "Vediamo DynoForce non solo come un prodotto, ma come un ecosistema scientifico. Per esperti — ricercatori, terapisti e cliniche di ricerca — sviluppiamo tecnologie su misura per le vostre esigenze.",
      "contact.integration.dev.eyebrow": "🛠️ Sviluppo scalabile",
      "contact.integration.dev.title": "La nostra API: la tua chiave per la personalizzazione.",
      "contact.integration.dev.copy": "Il nostro sistema è modulare e accessibile tramite API aperta. Sviluppa programmi, protocolli o interfacce verso sistemi di gestione esistenti (PMS). Noi forniamo i dati, tu definisci l’applicazione.",
      "contact.integration.research.eyebrow": "💻 Per sviluppatori e ricerca",
      "contact.integration.research.title": "Python e ambiente di sviluppo.",
      "contact.integration.research.copy": "Approfitta della nostra libreria Python completa. Tutte le risorse e l’interfaccia API sono disponibili nel nostro repository aperto.",
      "contact.integration.cta.repo": "Vai al repository sviluppatori",
      "contact.integration.cta.partner": "Richiedi partnership"
    }
  };

  function detectLanguage() {
    const saved = localStorage.getItem("dynoforce-lang");
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    const browserLang = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
  }

  function t(lang, key) {
    return translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? "";
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      if (value) {
        node.setAttribute("placeholder", value);
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const attrMapping = node.getAttribute("data-i18n-attr");
      if (!attrMapping) return;

      attrMapping.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((item) => item?.trim());
        if (!attr || !key) return;
        const value = t(lang, key);
        if (value) {
          node.setAttribute(attr, value);
        }
      });
    });
  }

  const TRANSLATABLE_ATTRS = ["alt", "title", "aria-label", "placeholder"];
  const CACHE_STORAGE_KEY = "dynoforce-translation-cache-v2";
  const MAX_CONCURRENT_TRANSLATIONS = 8;
  const translationCache = new Map();
  let activeTranslationRun = 0;

  function loadTranslationCache() {
    try {
      const raw = localStorage.getItem(CACHE_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;
      Object.entries(parsed).forEach(([key, value]) => {
        if (typeof value === "string") {
          translationCache.set(key, value);
        }
      });
    } catch (_) {
      // ignore invalid cache payloads
    }
  }

  function persistTranslationCache() {
    try {
      const payload = Object.fromEntries(translationCache.entries());
      localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(payload));
    } catch (_) {
      // storage can fail in private mode, continue without persistence
    }
  }

  function getCacheKey(lang, text) {
    return `${lang}::${text}`;
  }

  async function translateText(text, lang) {
    const normalized = text.trim();
    if (!normalized || lang === DEFAULT_LANG) return normalized;

    const cacheKey = getCacheKey(lang, normalized);
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey);
    }

    const endpoint = "https://translate.googleapis.com/translate_a/single";
    const params = new URLSearchParams({
      client: "gtx",
      sl: "auto",
      tl: lang,
      dt: "t",
      q: normalized
    });

    try {
      const response = await fetch(`${endpoint}?${params.toString()}`);
      if (!response.ok) throw new Error("translation failed");
      const data = await response.json();
      const translated = Array.isArray(data?.[0])
        ? data[0].map((part) => part?.[0] || "").join("")
        : normalized;
      const finalValue = translated || normalized;
      translationCache.set(cacheKey, finalValue);
      return finalValue;
    } catch (_) {
      return normalized;
    }
  }

  async function warmTranslationCache(texts, lang) {
    const queue = [...new Set(texts.filter(Boolean))].filter((text) => {
      const normalized = text.trim();
      return normalized && !translationCache.has(getCacheKey(lang, normalized));
    });

    if (!queue.length) return;

    const workers = Array.from({
      length: Math.min(MAX_CONCURRENT_TRANSLATIONS, queue.length)
    }, async () => {
      while (queue.length) {
        const currentText = queue.shift();
        if (!currentText) continue;
        await translateText(currentText, lang);
      }
    });

    await Promise.all(workers);
    persistTranslationCache();
  }

  function collectTranslatableTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node?.nodeValue) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest("[data-i18n], [data-i18n-placeholder], [data-i18n-attr], .lang-switcher")) {
          return NodeFilter.FILTER_REJECT;
        }
        const text = node.nodeValue.trim();
        if (!text) return NodeFilter.FILTER_REJECT;
        if (!/[A-Za-zÄÖÜäöüß]/.test(text)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    let current;
    while ((current = walker.nextNode())) {
      const trimmed = current.nodeValue.trim();
      if (!current.__originalText) current.__originalText = trimmed;
      nodes.push(current);
    }
    return nodes;
  }

  function collectTranslatableAttributes() {
    const items = [];
    document.querySelectorAll("*").forEach((node) => {
      if (node.closest("[data-i18n-attr], .lang-switcher")) return;

      TRANSLATABLE_ATTRS.forEach((attr) => {
        const value = node.getAttribute?.(attr);
        if (!value || !/[A-Za-zÄÖÜäöüß]/.test(value)) return;
        if (!node.__originalAttrs) node.__originalAttrs = {};
        if (!node.__originalAttrs[attr]) node.__originalAttrs[attr] = value;
        items.push({ node, attr, text: node.__originalAttrs[attr] });
      });
    });

    const metaDescription = document.querySelector('meta[name="description"]:not([data-i18n-attr])');
    if (metaDescription) {
      const value = metaDescription.getAttribute("content");
      if (value && /[A-Za-zÄÖÜäöüß]/.test(value)) {
        if (!metaDescription.__originalAttrs) metaDescription.__originalAttrs = {};
        if (!metaDescription.__originalAttrs.content) metaDescription.__originalAttrs.content = value;
        items.push({ node: metaDescription, attr: "content", text: metaDescription.__originalAttrs.content });
      }
    }

    return items;
  }

  async function applyAutoPageTranslation(lang) {
    const runId = ++activeTranslationRun;
    const textNodes = collectTranslatableTextNodes();
    const attributes = collectTranslatableAttributes();
    const titleElement = document.querySelector("title:not([data-i18n])");
    const originalTitle = titleElement ? titleElement.textContent?.trim() : "";
    if (titleElement && originalTitle && !titleElement.__originalText) {
      titleElement.__originalText = originalTitle;
    }

    if (lang === DEFAULT_LANG) {
      textNodes.forEach((node) => {
        if (node.__originalText) node.nodeValue = node.__originalText;
      });
      attributes.forEach(({ node, attr }) => {
        const original = node.__originalAttrs?.[attr];
        if (original) node.setAttribute(attr, original);
      });
      if (titleElement?.__originalText) {
        titleElement.textContent = titleElement.__originalText;
      }
      return;
    }

    await warmTranslationCache([
      ...textNodes.map((node) => node.__originalText),
      ...attributes.map((item) => item.text),
      titleElement?.__originalText || ""
    ], lang);

    if (runId !== activeTranslationRun) return;

    for (const node of textNodes) {
      const translated = await translateText(node.__originalText, lang);
      if (runId !== activeTranslationRun) return;
      const current = node.nodeValue;
      const leading = current.match(/^\s*/)?.[0] || "";
      const trailing = current.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    }

    for (const { node, attr, text } of attributes) {
      const translated = await translateText(text, lang);
      if (runId !== activeTranslationRun) return;
      node.setAttribute(attr, translated);
    }

    if (titleElement?.__originalText) {
      const translatedTitle = await translateText(titleElement.__originalText, lang);
      if (runId !== activeTranslationRun) return;
      titleElement.textContent = translatedTitle;
    }
  }

  function createLanguageSelector(activeLang) {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const navActions = document.createElement("div");
    navActions.className = "nav-actions";

    const shopLink = document.createElement("a");
    shopLink.className = "shop-link";
    shopLink.href = "http://shop.dynoforce.ch/shop/";
    shopLink.setAttribute("data-i18n", "nav.shop");
    shopLink.textContent = "Shop";

    const wrapper = document.createElement("div");
    wrapper.className = "lang-switcher";

    const label = document.createElement("label");
    label.className = "lang-label";
    label.setAttribute("for", "language-select");
    label.setAttribute("data-i18n", "lang.label");

    const select = document.createElement("select");
    select.id = "language-select";
    select.className = "lang-select";

    const options = [
      { code: "de", label: "Deutsch" },
      { code: "en", label: "English" },
      { code: "fr", label: "Français" },
      { code: "it", label: "Italiano" }
    ];

    options.forEach(({ code, label: text }) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = text;
      if (code === activeLang) option.selected = true;
      select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
      const lang = event.target.value;
      localStorage.setItem("dynoforce-lang", lang);
      applyTranslations(lang);
      applyAutoPageTranslation(lang);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    navActions.appendChild(shopLink);
    navActions.appendChild(wrapper);
    nav.appendChild(navActions);
  }

  const lang = detectLanguage();
  loadTranslationCache();
  createLanguageSelector(lang);
  applyTranslations(lang);
  applyAutoPageTranslation(lang);

})();
