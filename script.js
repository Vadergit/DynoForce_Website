(function () {
  const SUPPORTED_LANGS = ["de", "en", "fr", "it"];
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      "nav.products": "Produkte",
      "nav.app": "App",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
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
      "contact.integration.cta.partner": "Partnerschaft anfragen",
      "contact.meta.title": "Kontakt — DynoForce",
      "contact.meta.description": "Kontakt zu DynoForce für Fragen zu DynoGrip, DynoPull, App, Verfügbarkeit und Zusammenarbeit.",
      "aria.brand.home": "DynoForce Startseite",
      "aria.nav.main": "Hauptnavigation"
    },
    en: {
      "nav.products": "Products",
      "nav.app": "App",
      "nav.about": "About",
      "nav.contact": "Contact",
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
      "contact.integration.cta.partner": "Request partnership",
      "contact.meta.title": "Contact — DynoForce",
      "contact.meta.description": "Contact DynoForce for questions about DynoGrip, DynoPull, app availability, and collaboration.",
      "aria.brand.home": "DynoForce home page",
      "aria.nav.main": "Main navigation"
    },
    fr: {
      "nav.products": "Produits",
      "nav.app": "App",
      "nav.about": "À propos",
      "nav.contact": "Contact",
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
      "contact.integration.cta.partner": "Demander un partenariat",
      "contact.meta.title": "Contact — DynoForce",
      "contact.meta.description": "Contactez DynoForce pour toute question sur DynoGrip, DynoPull, l’app, la disponibilité et la collaboration.",
      "aria.brand.home": "Page d’accueil DynoForce",
      "aria.nav.main": "Navigation principale"
    },
    it: {
      "nav.products": "Prodotti",
      "nav.app": "App",
      "nav.about": "Chi siamo",
      "nav.contact": "Contatti",
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
      "contact.integration.cta.partner": "Richiedi partnership",
      "contact.meta.title": "Contatti — DynoForce",
      "contact.meta.description": "Contatta DynoForce per domande su DynoGrip, DynoPull, app, disponibilità e collaborazioni.",
      "aria.brand.home": "Home page DynoForce",
      "aria.nav.main": "Navigazione principale"
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

  function createLanguageSelector(activeLang) {
    const nav = document.querySelector(".nav");
    if (!nav) return;

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
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    nav.appendChild(wrapper);
  }

  const lang = detectLanguage();
  createLanguageSelector(lang);
  applyTranslations(lang);

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subjectInput = document.getElementById("subject");
      const subjectText = subjectInput ? subjectInput.value.trim() : "";
      const message = document.getElementById("message").value.trim();

      const currentLang = localStorage.getItem("dynoforce-lang") || lang;
      const subjects = {
        de: "Anfrage über dynoforce.ch",
        en: "Request via dynoforce.ch",
        fr: "Demande via dynoforce.ch",
        it: "Richiesta tramite dynoforce.ch"
      };

      const bodyLabels = {
        de: { name: "Name", email: "E-Mail", message: "Nachricht" },
        en: { name: "Name", email: "Email", message: "Message" },
        fr: { name: "Nom", email: "E-mail", message: "Message" },
        it: { name: "Nome", email: "E-mail", message: "Messaggio" }
      };

      const labels = bodyLabels[currentLang] || bodyLabels.de;
      const computedSubject = subjectText || (subjects[currentLang] || subjects.de);
      const subject = encodeURIComponent(computedSubject);
      const body = encodeURIComponent(
        labels.name + ": " + name + "\n" +
        labels.email + ": " + email + "\n\n" +
        labels.message + ":\n" + message
      );
      window.location.href = "mailto:info@dynoforce.ch?subject=" + subject + "&body=" + body;
    });
  }
})();
