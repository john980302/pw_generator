import type { Translation } from "./ko";

export const fr: Translation = {
  meta: {
    title: "SecurePass - Générateur de mots de passe sécurisé",
    description: "Générez gratuitement des mots de passe forts et sécurisés. Créez des mots de passe personnalisés combinant majuscules, minuscules, chiffres et caractères spéciaux en toute sécurité dans votre navigateur.",
    ogDescription: "Générez gratuitement des mots de passe forts et sécurisés. Créez des mots de passe personnalisés en toute sécurité dans votre navigateur.",
  },
  nav: {
    passwordGenerator: "Générateur de mots de passe",
    securityNews: "Actualités sécurité",
    theme: {
      system: "Système",
      light: "Clair",
      dark: "Sombre",
      mode: "mode",
    },
  },
  home: {
    title: "Générateur de mots de passe",
    subtitle: "Créez des mots de passe sécurisés",
    placeholder: "Cliquez sur générer",
    generatePassword: "Veuillez générer un mot de passe",
    generateButton: "Générer le mot de passe",
    passwordLength: "Longueur du mot de passe",
    characterTypes: "Types de caractères",
    footer: "Les mots de passe générés sont traités uniquement dans votre navigateur et ne sont envoyés à aucun serveur",
    options: {
      uppercase: "Majuscules",
      lowercase: "Minuscules",
      numbers: "Chiffres",
      symbols: "Symboles",
    },
    strength: {
      veryStrong: "Très fort",
      strong: "Fort",
      medium: "Moyen",
      weak: "Faible",
      label: {
        veryStrong: "Imprenable !",
        strong: "Solide !",
        medium: "À renforcer...",
        weak: "Dangereux !",
      },
    },
  },
  news: {
    title: "Actualités sécurité",
    subtitle: "Dernières nouvelles et informations sur les mots de passe et la sécurité",
    loading: "Chargement des actualités...",
    error: "Impossible de charger les actualités. Veuillez réessayer plus tard.",
    errorGeneric: "Une erreur s'est produite lors du chargement des actualités.",
    retry: "Réessayer",
    readMore: "Lire la suite",
    refresh: "Actualiser",
    all: "Tout",
    noNews: "Aucune actualité disponible.",
    justNow: "À l'instant",
    hoursAgo: " heures",
    daysAgo: " jours",
    tips: {
      title: "Conseils pour une gestion sécurisée des mots de passe",
      tip1: "Utilisez un mot de passe différent pour chaque site",
      tip2: "Envisagez d'utiliser un gestionnaire de mots de passe",
      tip3: "Activez l'authentification à deux facteurs (2FA)",
      tip4: "Changez régulièrement vos mots de passe",
    },
  },
};
