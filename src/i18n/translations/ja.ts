import type { Translation } from "./ko";

export const ja: Translation = {
  meta: {
    title: "SecurePass - 安全なパスワード生成器",
    description: "強力で安全なパスワードを無料で生成します。大文字、小文字、数字、特殊文字を組み合わせたカスタムパスワードをブラウザで安全に作成できます。",
    ogDescription: "強力で安全なパスワードを無料で生成します。ブラウザで安全にカスタムパスワードを作成できます。",
  },
  nav: {
    passwordGenerator: "パスワード生成器",
    securityNews: "セキュリティニュース",
    theme: {
      system: "システム",
      light: "ライト",
      dark: "ダーク",
      mode: "モード",
    },
  },
  home: {
    title: "パスワード生成器",
    subtitle: "安全なパスワードを作成しましょう",
    placeholder: "生成ボタンをクリック",
    generatePassword: "パスワードを生成してください",
    generateButton: "パスワード生成",
    passwordLength: "パスワードの長さ",
    characterTypes: "文字の種類",
    footer: "生成されたパスワードはブラウザでのみ処理され、サーバーには送信されません",
    options: {
      uppercase: "大文字",
      lowercase: "小文字",
      numbers: "数字",
      symbols: "特殊文字",
    },
    strength: {
      veryStrong: "非常に強い",
      strong: "強い",
      medium: "普通",
      weak: "弱い",
      label: {
        veryStrong: "鉄壁！",
        strong: "頑丈！",
        medium: "もう少し強く...",
        weak: "危険！",
      },
    },
  },
  news: {
    title: "セキュリティニュース",
    subtitle: "パスワードとセキュリティに関する最新ニュースと情報",
    loading: "ニュースを読み込み中...",
    error: "ニュースを読み込めませんでした。後でもう一度お試しください。",
    errorGeneric: "ニュースの読み込み中にエラーが発生しました。",
    retry: "再試行",
    readMore: "詳細を見る",
    refresh: "更新",
    all: "すべて",
    noNews: "ニュースがありません。",
    justNow: "たった今",
    hoursAgo: "時間前",
    daysAgo: "日前",
    tips: {
      title: "安全なパスワード管理のヒント",
      tip1: "サイトごとに異なるパスワードを使用してください",
      tip2: "パスワードマネージャーの使用をお勧めします",
      tip3: "二要素認証(2FA)を有効にしてください",
      tip4: "定期的にパスワードを変更してください",
    },
  },
};
