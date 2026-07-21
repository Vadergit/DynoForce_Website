(function () {
  const SUPPORTED_LANGS = ["de", "en", "fr", "it"];
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      "manual.eyebrow": "DynoGrip Anleitung",
      "manual.hero.title": "Bedienungsanleitung für DynoGrip.",
      "manual.hero.lead": "Wähle die Sprache oben rechts aus. Danach wird hier automatisch die passende Anleitung angezeigt.",
      "manual.cta.read": "Anleitung lesen",
      "manual.cta.app": "Zur App",
      "manual.cta.download": "Manual als PDF herunterladen",
      "manual.highlight.load.label": "Belastung",
      "manual.highlight.load.value": "100 kg dauerhaft",
      "manual.highlight.battery.label": "Akku",
      "manual.highlight.battery.value": "160 h+ pro Ladung",
      "manual.highlight.connection.label": "Verbindung",
      "manual.highlight.connection.value": "Bluetooth Low Energy",
      "manual.toc.aria": "Inhaltsnavigation",
      "manual.toc.title": "Inhalt",
      "manual.toc.specs": "Spezifikationen",
      "manual.toc.start": "Start & Verbindung",
      "manual.toc.use": "Nutzung",
      "manual.toc.care": "Pflege & Sicherheit",
      "manual.toc.support": "Support",
      "nav.products": "Produkte",
      "nav.app": "App",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      "nav.shop": "Shop",
      "footer.note": "Präzise Kraftmessung mit intelligenter Software für alle, die Training nachvollziehbar, strukturiert und messbar machen wollen.",
      "footer.platform": "Plattform",
      "footer.downloads": "CAD & Downloads",
      "footer.wiki": "Wiki & Ressourcen",
      "footer.navigation": "Navigation",
      "footer.home": "Home",
      "product.downloads.dynogrip.copy": "CAD-Dateien, STL-Downloads und technische Hinweise zu Attachments findest du in der 3D-Bibliothek.",
      "product.downloads.dynogrip.link": "Zur 3D-Bibliothek",
      "product.downloads.dynopull.copy": "CAD-Dateien, STL-Downloads und technische Hinweise zu Griffen und Attachments findest du in der 3D-Bibliothek.",
      "product.downloads.dynopull.link": "Zur 3D-Bibliothek",
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
      "manual.eyebrow": "DynoGrip manual",
      "manual.hero.title": "User manual for DynoGrip.",
      "manual.hero.lead": "Select the language in the top right. The matching manual is shown here automatically.",
      "manual.cta.read": "Read manual",
      "manual.cta.app": "Open app page",
      "manual.cta.download": "Download manual as PDF",
      "manual.highlight.load.label": "Load",
      "manual.highlight.load.value": "100 kg continuous",
      "manual.highlight.battery.label": "Battery",
      "manual.highlight.battery.value": "160 h+ per charge",
      "manual.highlight.connection.label": "Connection",
      "manual.highlight.connection.value": "Bluetooth Low Energy",
      "manual.toc.aria": "Table of contents",
      "manual.toc.title": "Contents",
      "manual.toc.specs": "Specifications",
      "manual.toc.start": "Start & connection",
      "manual.toc.use": "Use",
      "manual.toc.care": "Care & safety",
      "manual.toc.support": "Support",
      "nav.products": "Products",
      "nav.app": "App",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.shop": "Shop",
      "footer.note": "Precise strength measurement with smart software for anyone who wants training to be clear, structured, and measurable.",
      "footer.platform": "Platform",
      "footer.downloads": "CAD & Downloads",
      "footer.wiki": "Wiki & Resources",
      "footer.navigation": "Navigation",
      "footer.home": "Home",
      "product.downloads.dynogrip.copy": "CAD files, STL downloads and technical notes for attachments are available in the 3D library.",
      "product.downloads.dynogrip.link": "Open 3D library",
      "product.downloads.dynopull.copy": "CAD files, STL downloads and technical notes for grips and attachments are available in the 3D library.",
      "product.downloads.dynopull.link": "Open 3D library",
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
      "manual.eyebrow": "Manuel DynoGrip",
      "manual.hero.title": "Mode d’emploi pour DynoGrip.",
      "manual.hero.lead": "Choisis la langue en haut à droite. Le manuel correspondant s’affiche automatiquement ici.",
      "manual.cta.read": "Lire le manuel",
      "manual.cta.app": "Voir l’app",
      "manual.cta.download": "Télécharger le manuel en PDF",
      "manual.highlight.load.label": "Charge",
      "manual.highlight.load.value": "100 kg en continu",
      "manual.highlight.battery.label": "Batterie",
      "manual.highlight.battery.value": "160 h+ par charge",
      "manual.highlight.connection.label": "Connexion",
      "manual.highlight.connection.value": "Bluetooth Low Energy",
      "manual.toc.aria": "Sommaire",
      "manual.toc.title": "Sommaire",
      "manual.toc.specs": "Spécifications",
      "manual.toc.start": "Démarrage & connexion",
      "manual.toc.use": "Utilisation",
      "manual.toc.care": "Entretien & sécurité",
      "manual.toc.support": "Support",
      "nav.products": "Produits",
      "nav.app": "App",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.shop": "Boutique",
      "footer.note": "Mesure précise de la force avec un logiciel intelligent pour rendre l'entraînement clair, structuré et mesurable.",
      "footer.platform": "Plateforme",
      "footer.downloads": "CAD et téléchargements",
      "footer.wiki": "Wiki & Ressources",
      "footer.navigation": "Navigation",
      "footer.home": "Accueil",
      "product.downloads.dynogrip.copy": "Les fichiers CAD, les téléchargements STL et les notes techniques sur les accessoires sont disponibles dans la bibliothèque 3D.",
      "product.downloads.dynogrip.link": "Ouvrir la bibliothèque 3D",
      "product.downloads.dynopull.copy": "Les fichiers CAD, les téléchargements STL et les notes techniques sur les poignées et accessoires sont disponibles dans la bibliothèque 3D.",
      "product.downloads.dynopull.link": "Ouvrir la bibliothèque 3D",
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
      "manual.eyebrow": "Manuale DynoGrip",
      "manual.hero.title": "Manuale utente per DynoGrip.",
      "manual.hero.lead": "Seleziona la lingua in alto a destra. Il manuale corrispondente viene mostrato automaticamente qui.",
      "manual.cta.read": "Leggi il manuale",
      "manual.cta.app": "Vai all’app",
      "manual.cta.download": "Scarica il manuale in PDF",
      "manual.highlight.load.label": "Carico",
      "manual.highlight.load.value": "100 kg continuo",
      "manual.highlight.battery.label": "Batteria",
      "manual.highlight.battery.value": "160 h+ per carica",
      "manual.highlight.connection.label": "Connessione",
      "manual.highlight.connection.value": "Bluetooth Low Energy",
      "manual.toc.aria": "Indice",
      "manual.toc.title": "Indice",
      "manual.toc.specs": "Specifiche",
      "manual.toc.start": "Avvio & connessione",
      "manual.toc.use": "Utilizzo",
      "manual.toc.care": "Cura & sicurezza",
      "manual.toc.support": "Supporto",
      "nav.products": "Prodotti",
      "nav.app": "App",
      "nav.about": "Chi siamo",
      "nav.contact": "Contatti",
      "nav.shop": "Shop",
      "footer.note": "Misurazione precisa della forza con software intelligente per un allenamento chiaro, strutturato e misurabile.",
      "footer.platform": "Piattaforma",
      "footer.downloads": "CAD e download",
      "footer.wiki": "Wiki e risorse",
      "footer.navigation": "Navigazione",
      "footer.home": "Home",
      "product.downloads.dynogrip.copy": "File CAD, download STL e note tecniche sugli attachment sono disponibili nella libreria 3D.",
      "product.downloads.dynogrip.link": "Apri libreria 3D",
      "product.downloads.dynopull.copy": "File CAD, download STL e note tecniche su impugnature e attachment sono disponibili nella libreria 3D.",
      "product.downloads.dynopull.link": "Apri libreria 3D",
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
        if (parent.closest("[data-no-auto-translate], [data-i18n], [data-i18n-placeholder], [data-i18n-attr], .lang-switcher")) {
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
      if (node.closest("[data-no-auto-translate], [data-i18n-attr], .lang-switcher")) return;

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

  function buildManualToc(activeSection) {
    const tocLinks = document.querySelector(".manual-toc-links");
    if (!tocLinks || !activeSection) return;

    tocLinks.innerHTML = "";
    activeSection.querySelectorAll("h3").forEach((heading, index) => {
      if (!heading.id) {
        const sectionLang = activeSection.getAttribute("data-manual-lang") || DEFAULT_LANG;
        heading.id = `manual-${sectionLang}-section-${index + 1}`;
      }

      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      link.addEventListener("click", (event) => {
        event.preventDefault();
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${heading.id}`);
      });
      tocLinks.appendChild(link);
    });
  }

  function applyManualLanguage(lang) {
    const manualSections = document.querySelectorAll("[data-manual-lang]");
    if (!manualSections.length) return;

    let activeSection = null;
    manualSections.forEach((section) => {
      const isActive = section.getAttribute("data-manual-lang") === lang;
      section.hidden = !isActive;
      section.setAttribute("aria-hidden", String(!isActive));
      if (isActive) activeSection = section;
    });

    buildManualToc(activeSection);
  }

  function createLanguageSelector(activeLang) {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const navActions = document.createElement("div");
    navActions.className = "nav-actions";

    const shopLink = document.createElement("a");
    shopLink.className = "shop-link";
    shopLink.href = "https://shop.dynoforce.ch/shop/";
    shopLink.target = "_blank";
    shopLink.rel = "noopener noreferrer";
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
      applyManualLanguage(lang);
      applyAutoPageTranslation(lang);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    navActions.appendChild(shopLink);
    navActions.appendChild(wrapper);
    nav.appendChild(navActions);
  }


  function getActiveManualLanguage() {
    const activeManual = document.querySelector("[data-manual-lang]:not([hidden])");
    if (activeManual) return activeManual.getAttribute("data-manual-lang") || DEFAULT_LANG;

    const storedLang = localStorage.getItem("dynoforce-lang");
    if (SUPPORTED_LANGS.includes(storedLang)) return storedLang;

    return detectLanguage();
  }

  function pdfEscape(text) {
    return String(text)
      .replace(/\\/g, "\\\\")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)");
  }

  function normalizePdfText(text) {
    return String(text)
      .replace(/\s+/g, " ")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201c\u201d]/g, '"')
      .replace(/[\u2013\u2014]/g, "-")
      .replace(/\u2026/g, "...")
      .trim();
  }

  function wrapPdfText(text, maxChars) {
    const words = normalizePdfText(text).split(" ").filter(Boolean);
    const lines = [];
    let current = "";

    words.forEach((word) => {
      if (!current) {
        current = word;
        return;
      }
      if (`${current} ${word}`.length > maxChars) {
        lines.push(current);
        current = word;
      } else {
        current = `${current} ${word}`;
      }
    });

    if (current) lines.push(current);
    return lines;
  }

  function collectManualPdfBlocks(article) {
    const blocks = [];
    const languageLabel = article.querySelector(".manual-lang-label")?.textContent || "";
    if (languageLabel) blocks.push({ type: "meta", text: languageLabel });

    article.querySelectorAll("h2, h3, p, li, tr").forEach((node) => {
      if (node.matches("tr")) {
        const cells = Array.from(node.children).map((cell) => normalizePdfText(cell.textContent));
        if (cells.length) blocks.push({ type: "row", text: cells.join(": ") });
        return;
      }

      if (node.closest("tr")) return;

      const text = normalizePdfText(node.textContent);
      if (!text) return;
      const type = node.tagName.toLowerCase();
      blocks.push({ type, text });
    });

    return blocks;
  }

  function createManualPdfBytes(article, lang) {
    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const marginX = 54;
    const topY = 790;
    const bottomY = 56;
    const maxChars = 92;
    const blocks = collectManualPdfBlocks(article);
    const pages = [];
    let commands = [];
    let y = topY;

    function addPage() {
      if (commands.length) {
        commands.push("ET");
        pages.push(commands.join("\n"));
      }
      commands = ["BT", "/F1 10 Tf", "0 g"];
      y = topY;
    }

    function ensureSpace(height) {
      if (y - height < bottomY) addPage();
    }

    function addLine(text, x, size, leading) {
      ensureSpace(leading);
      commands.push(`/F1 ${size} Tf`);
      commands.push(`1 0 0 1 ${x} ${y.toFixed(2)} Tm (${pdfEscape(text)}) Tj`);
      y -= leading;
    }

    addPage();
    addLine("DynoGrip Manual", marginX, 20, 28);
    addLine(`${new Date().toISOString().slice(0, 10)} - ${lang.toUpperCase()}`, marginX, 9, 22);

    blocks.forEach((block) => {
      const isTitle = block.type === "h2";
      const isHeading = block.type === "h3";
      const isList = block.type === "li";
      const isMeta = block.type === "meta";
      const isRow = block.type === "row";
      const fontSize = isTitle ? 16 : isHeading ? 13 : isMeta ? 10 : 9.5;
      const leading = isTitle ? 22 : isHeading ? 18 : 13;
      const indent = isList ? 14 : isRow ? 10 : 0;
      const prefix = isList ? "- " : isRow ? "- " : "";

      if (isTitle || isHeading) y -= 6;
      wrapPdfText(`${prefix}${block.text}`, maxChars - Math.round(indent / 3)).forEach((line, index) => {
        addLine(index > 0 && prefix ? `  ${line}` : line, marginX + indent, fontSize, leading);
      });
      if (!isList && !isRow) y -= 4;
    });

    commands.push("ET");
    pages.push(commands.join("\n"));

    const objects = [];
    objects.push("<< /Type /Catalog /Pages 2 0 R >>");
    objects.push(`<< /Type /Pages /Kids [${pages.map((_, index) => `${index + 4} 0 R`).join(" ")}] /Count ${pages.length} >>`);
    objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");

    pages.forEach((content, index) => {
      const contentObjectNumber = pages.length + 4 + index;
      objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`);
    });

    pages.forEach((content) => {
      objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    });

    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => {
      pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
    });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    return new Uint8Array(Array.from(pdf, (char) => char.charCodeAt(0) & 0xff));
  }

  function downloadManualPdf(lang) {
    applyManualLanguage(lang);
    const article = document.querySelector(`[data-manual-lang="${lang}"]`);
    if (!article) return false;

    const bytes = createManualPdfBytes(article, lang);
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `DynoGrip-Manual-${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  }

  function setupManualPdfDownload() {
    document.querySelectorAll("[data-manual-print]").forEach((button) => {
      button.addEventListener("click", () => {
        const lang = getActiveManualLanguage();
        if (!downloadManualPdf(lang)) window.print();
      });
    });
  }

  function setupDynoGripColorPicker() {
    document.querySelectorAll("[data-color-picker]").forEach((picker) => {
      const image = picker.querySelector("[data-color-image]");
      const name = picker.querySelector("[data-color-name]");
      const stage = picker.querySelector("[data-color-stage]");
      const swatches = Array.from(picker.querySelectorAll(".color-swatch"));

      if (!image || !name || !stage || !swatches.length) return;

      swatches.forEach((swatch) => {
        const nextImage = new Image();
        nextImage.src = swatch.dataset.image;

        swatch.addEventListener("click", () => {
          if (swatch.classList.contains("is-active")) return;

          swatches.forEach((button) => {
            const isSelected = button === swatch;
            button.classList.toggle("is-active", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
          });

          const selectedName = swatch.dataset.name;
          const selectedImage = swatch.dataset.image;
          stage.style.setProperty("--selected-color", swatch.dataset.color);
          name.textContent = selectedName;
          image.classList.add("is-changing");

          window.setTimeout(() => {
            image.src = selectedImage;
            image.alt = `DynoGrip in ${selectedName}`;
            image.onload = () => image.classList.remove("is-changing");
            if (image.complete) image.classList.remove("is-changing");
          }, 140);
        });
      });
    });
  }

  const lang = detectLanguage();
  loadTranslationCache();
  createLanguageSelector(lang);
  setupManualPdfDownload();
  setupDynoGripColorPicker();
  applyTranslations(lang);
  applyManualLanguage(lang);
  applyAutoPageTranslation(lang);

})();
