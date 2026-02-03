import type { Translation } from "./ko";

export const pt: Translation = {
  meta: {
    title: "SecurePass - Gerador de senhas seguro",
    description: "Gere senhas fortes e seguras gratuitamente. Crie senhas personalizadas combinando maiúsculas, minúsculas, números e caracteres especiais com segurança no seu navegador.",
    ogDescription: "Gere senhas fortes e seguras gratuitamente. Crie senhas personalizadas com segurança no seu navegador.",
  },
  nav: {
    passwordGenerator: "Gerador de senhas",
    securityNews: "Notícias de segurança",
    theme: {
      system: "Sistema",
      light: "Claro",
      dark: "Escuro",
      mode: "modo",
    },
  },
  home: {
    title: "Gerador de senhas",
    subtitle: "Crie senhas seguras",
    placeholder: "Clique em gerar",
    generatePassword: "Por favor, gere uma senha",
    generateButton: "Gerar senha",
    passwordLength: "Comprimento da senha",
    characterTypes: "Tipos de caracteres",
    footer: "As senhas geradas são processadas apenas no seu navegador e não são enviadas para nenhum servidor",
    options: {
      uppercase: "Maiúsculas",
      lowercase: "Minúsculas",
      numbers: "Números",
      symbols: "Símbolos",
    },
    strength: {
      veryStrong: "Muito forte",
      strong: "Forte",
      medium: "Médio",
      weak: "Fraco",
      label: {
        veryStrong: "Inquebrável!",
        strong: "Sólido!",
        medium: "Fortaleça mais...",
        weak: "Perigoso!",
      },
    },
  },
  news: {
    title: "Notícias de segurança",
    subtitle: "Últimas notícias e informações sobre senhas e segurança",
    loading: "Carregando notícias...",
    error: "Não foi possível carregar as notícias. Tente novamente mais tarde.",
    errorGeneric: "Ocorreu um erro ao carregar as notícias.",
    retry: "Tentar novamente",
    readMore: "Leia mais",
    refresh: "Atualizar",
    all: "Todos",
    noNews: "Nenhuma notícia disponível.",
    justNow: "Agora mesmo",
    hoursAgo: " horas atrás",
    daysAgo: " dias atrás",
    tips: {
      title: "Dicas para gerenciamento seguro de senhas",
      tip1: "Use uma senha diferente para cada site",
      tip2: "Considere usar um gerenciador de senhas",
      tip3: "Ative a autenticação de dois fatores (2FA)",
      tip4: "Altere suas senhas regularmente",
    },
  },
};
