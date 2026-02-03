import type { Translation } from "./ko";

export const de: Translation = {
  meta: {
    title: "SecurePass - Sicherer Passwort-Generator",
    description: "Erstellen Sie kostenlos starke und sichere Passwörter. Erstellen Sie benutzerdefinierte Passwörter mit Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen sicher in Ihrem Browser.",
    ogDescription: "Erstellen Sie kostenlos starke und sichere Passwörter. Erstellen Sie benutzerdefinierte Passwörter sicher in Ihrem Browser.",
  },
  nav: {
    passwordGenerator: "Passwort-Generator",
    securityNews: "Sicherheitsnews",
    theme: {
      system: "System",
      light: "Hell",
      dark: "Dunkel",
      mode: "Modus",
    },
  },
  home: {
    title: "Passwort-Generator",
    subtitle: "Erstellen Sie sichere Passwörter",
    placeholder: "Klicken Sie auf Generieren",
    generatePassword: "Bitte generieren Sie ein Passwort",
    generateButton: "Passwort generieren",
    passwordLength: "Passwortlänge",
    characterTypes: "Zeichentypen",
    footer: "Generierte Passwörter werden nur in Ihrem Browser verarbeitet und nicht an Server gesendet",
    options: {
      uppercase: "Großbuchstaben",
      lowercase: "Kleinbuchstaben",
      numbers: "Zahlen",
      symbols: "Sonderzeichen",
    },
    strength: {
      veryStrong: "Sehr stark",
      strong: "Stark",
      medium: "Mittel",
      weak: "Schwach",
      label: {
        veryStrong: "Unknackbar!",
        strong: "Solide!",
        medium: "Verstärken...",
        weak: "Gefährlich!",
      },
    },
  },
  news: {
    title: "Sicherheitsnews",
    subtitle: "Aktuelle Nachrichten und Informationen zu Passwörtern und Sicherheit",
    loading: "Nachrichten werden geladen...",
    error: "Nachrichten konnten nicht geladen werden. Bitte versuchen Sie es später erneut.",
    errorGeneric: "Beim Laden der Nachrichten ist ein Fehler aufgetreten.",
    retry: "Erneut versuchen",
    readMore: "Weiterlesen",
    refresh: "Aktualisieren",
    all: "Alle",
    noNews: "Keine Nachrichten verfügbar.",
    justNow: "Gerade eben",
    hoursAgo: " Stunden",
    daysAgo: " Tagen",
    tips: {
      title: "Tipps für sichere Passwortverwaltung",
      tip1: "Verwenden Sie für jede Website ein anderes Passwort",
      tip2: "Erwägen Sie die Verwendung eines Passwort-Managers",
      tip3: "Aktivieren Sie die Zwei-Faktor-Authentifizierung (2FA)",
      tip4: "Ändern Sie Ihre Passwörter regelmäßig",
    },
  },
};
