import type { Translation } from "./ko";

export const en: Translation = {
  meta: {
    title: "SecurePass - Secure Password Generator",
    description: "Generate strong and secure passwords for free. Create customized passwords combining uppercase, lowercase, numbers, and special characters safely in your browser.",
    ogDescription: "Generate strong and secure passwords for free. Create customized passwords safely in your browser.",
  },
  nav: {
    passwordGenerator: "Password Generator",
    securityNews: "Security News",
    theme: {
      system: "System",
      light: "Light",
      dark: "Dark",
      mode: "mode",
    },
  },
  home: {
    title: "Password Generator",
    subtitle: "Create secure passwords",
    placeholder: "Click generate button",
    generatePassword: "Please generate a password",
    generateButton: "Generate Password",
    passwordLength: "Password Length",
    characterTypes: "Character Types",
    footer: "Generated passwords are processed only in your browser and are not sent to any server",
    options: {
      uppercase: "Uppercase",
      lowercase: "Lowercase",
      numbers: "Numbers",
      symbols: "Symbols",
    },
    strength: {
      veryStrong: "Very Strong",
      strong: "Strong",
      medium: "Medium",
      weak: "Weak",
      label: {
        veryStrong: "Fort Knox!",
        strong: "Solid!",
        medium: "Make it stronger...",
        weak: "Dangerous!",
      },
    },
  },
  news: {
    title: "Security News",
    subtitle: "Latest news and information about passwords and security",
    loading: "Loading news...",
    error: "Failed to load news. Please try again later.",
    errorGeneric: "An error occurred while loading news.",
    retry: "Retry",
    readMore: "Read more",
    refresh: "Refresh",
    all: "All",
    noNews: "No news available.",
    justNow: "Just now",
    hoursAgo: " hours ago",
    daysAgo: " days ago",
    tips: {
      title: "Safe Password Management Tips",
      tip1: "Use different passwords for each site",
      tip2: "Consider using a password manager",
      tip3: "Enable two-factor authentication (2FA)",
      tip4: "Change your passwords regularly",
    },
  },
};
