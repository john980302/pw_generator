import type { Metadata } from "next";
import Script from "next/script";
import { locales, type Locale, translations, isValidLocale, defaultLocale } from "@/i18n";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/i18n/TranslationContext";

const SITE_URL = "https://pw-generator.pages.dev";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = translations[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.title,
      template: "%s | SecurePass",
    },
    description: t.meta.description,
    keywords: ["비밀번호 생성기", "password generator", "密码生成器", "パスワード生成器", "보안", "security", "암호 생성"],
    authors: [{ name: "SecurePass" }],
    creator: "SecurePass",
    publisher: "SecurePass",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
      url: `${SITE_URL}/${locale}`,
      siteName: "SecurePass",
      title: t.meta.title,
      description: t.meta.ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.ogDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ko: `${SITE_URL}/ko`,
        en: `${SITE_URL}/en`,
        zh: `${SITE_URL}/zh`,
        ja: `${SITE_URL}/ja`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = translations[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SecurePass",
            description: t.meta.description,
            url: `${SITE_URL}/${locale}`,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: locale === "ko" ? "KRW" : locale === "zh" ? "CNY" : locale === "ja" ? "JPY" : "USD",
            },
            inLanguage: locale,
            browserRequirements: "Requires JavaScript",
          }),
        }}
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9413866339812762"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Y8LV5192BX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y8LV5192BX');
        `}
      </Script>
      <ThemeProvider>
        <TranslationProvider locale={locale}>
          <Navbar />
          {children}
        </TranslationProvider>
      </ThemeProvider>
    </>
  );
}
