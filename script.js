(function () {
  const SUPPORTED_LANGS = ["de", "en", "fr", "it"];
  const DEFAULT_LANG = "de";

  const translations = {
    de: {
      "nav.products": "Produkte",
      "nav.app": "App",
      "nav.about": "About",
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
      "contact.form.subject": "Betreff"
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
      "contact.form.subject": "Subject"
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
      "contact.form.subject": "Objet"
    },
    it: {
      "nav.products": "Prodotti",
      "nav.app": "App",
      "nav.about": "Chi siamo",
      "nav.contact": "Contatto",
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
      "contact.form.subject": "Oggetto"
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
