import type { Translation } from "./ko";

export const zh: Translation = {
  meta: {
    title: "SecurePass - 安全密码生成器",
    description: "免费生成强大而安全的密码。在浏览器中安全地创建包含大写字母、小写字母、数字和特殊字符的自定义密码。",
    ogDescription: "免费生成强大而安全的密码。在浏览器中安全地创建自定义密码。",
  },
  nav: {
    passwordGenerator: "密码生成器",
    securityNews: "安全新闻",
    theme: {
      system: "系统",
      light: "浅色",
      dark: "深色",
      mode: "模式",
    },
  },
  home: {
    title: "密码生成器",
    subtitle: "创建安全的密码",
    placeholder: "点击生成按钮",
    generatePassword: "请生成密码",
    generateButton: "生成密码",
    passwordLength: "密码长度",
    characterTypes: "字符类型",
    footer: "生成的密码仅在浏览器中处理，不会发送到任何服务器",
    options: {
      uppercase: "大写字母",
      lowercase: "小写字母",
      numbers: "数字",
      symbols: "特殊字符",
    },
    strength: {
      veryStrong: "非常强",
      strong: "强",
      medium: "中等",
      weak: "弱",
      label: {
        veryStrong: "铜墙铁壁！",
        strong: "坚固！",
        medium: "再强一点...",
        weak: "危险！",
      },
    },
  },
  news: {
    title: "安全新闻",
    subtitle: "密码和安全相关的最新新闻和信息",
    loading: "正在加载新闻...",
    error: "无法加载新闻。请稍后重试。",
    errorGeneric: "加载新闻时发生错误。",
    retry: "重试",
    readMore: "查看详情",
    refresh: "刷新",
    all: "全部",
    noNews: "没有新闻。",
    justNow: "刚刚",
    hoursAgo: "小时前",
    daysAgo: "天前",
    tips: {
      title: "安全密码管理提示",
      tip1: "为每个网站使用不同的密码",
      tip2: "建议使用密码管理器",
      tip3: "启用双重身份验证(2FA)",
      tip4: "定期更换密码",
    },
  },
};
