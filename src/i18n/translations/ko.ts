export const ko = {
  meta: {
    title: "SecurePass - 안전한 비밀번호 생성기",
    description: "강력하고 안전한 비밀번호를 무료로 생성하세요. 대문자, 소문자, 숫자, 특수문자를 조합한 맞춤형 비밀번호를 브라우저에서 안전하게 만들 수 있습니다.",
    ogDescription: "강력하고 안전한 비밀번호를 무료로 생성하세요. 브라우저에서 안전하게 맞춤형 비밀번호를 만들 수 있습니다.",
  },
  nav: {
    passwordGenerator: "비밀번호 생성기",
    securityNews: "보안 뉴스",
    theme: {
      system: "시스템",
      light: "라이트",
      dark: "다크",
      mode: "모드",
    },
  },
  home: {
    title: "비밀번호 생성기",
    subtitle: "안전한 비밀번호를 만들어보세요",
    placeholder: "생성 버튼을 클릭하세요",
    generatePassword: "비밀번호를 생성해주세요",
    generateButton: "비밀번호 생성",
    passwordLength: "비밀번호 길이",
    characterTypes: "문자 종류",
    footer: "생성된 비밀번호는 브라우저에서만 처리되며 서버로 전송되지 않습니다",
    options: {
      uppercase: "대문자",
      lowercase: "소문자",
      numbers: "숫자",
      symbols: "특수문자",
    },
    strength: {
      veryStrong: "매우 강함",
      strong: "강함",
      medium: "보통",
      weak: "약함",
      label: {
        veryStrong: "철벽 보안!",
        strong: "튼튼해요!",
        medium: "좀 더 강하게...",
        weak: "위험해요!",
      },
    },
  },
  news: {
    title: "보안 뉴스",
    subtitle: "비밀번호 및 보안 관련 최신 뉴스와 정보",
    loading: "뉴스를 불러오는 중...",
    error: "뉴스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.",
    errorGeneric: "뉴스를 불러오는 중 오류가 발생했습니다.",
    retry: "다시 시도",
    readMore: "자세히 보기",
    refresh: "새로고침",
    all: "전체",
    noNews: "뉴스가 없습니다.",
    justNow: "방금 전",
    hoursAgo: "시간 전",
    daysAgo: "일 전",
    tips: {
      title: "안전한 비밀번호 관리 팁",
      tip1: "각 사이트마다 다른 비밀번호를 사용하세요",
      tip2: "비밀번호 관리자 사용을 권장합니다",
      tip3: "2단계 인증(2FA)을 활성화하세요",
      tip4: "정기적으로 비밀번호를 변경하세요",
    },
  },
};

export type Translation = typeof ko;
