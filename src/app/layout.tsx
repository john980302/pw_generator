import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://pw-generator.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SecurePass - 안전한 비밀번호 생성기",
    template: "%s | SecurePass",
  },
  description: "강력하고 안전한 비밀번호를 무료로 생성하세요. 대문자, 소문자, 숫자, 특수문자를 조합한 맞춤형 비밀번호를 브라우저에서 안전하게 만들 수 있습니다.",
  keywords: ["비밀번호 생성기", "password generator", "보안", "암호 생성", "랜덤 비밀번호", "강력한 비밀번호"],
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
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "SecurePass",
    title: "SecurePass - 안전한 비밀번호 생성기",
    description: "강력하고 안전한 비밀번호를 무료로 생성하세요. 브라우저에서 안전하게 맞춤형 비밀번호를 만들 수 있습니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecurePass - 안전한 비밀번호 생성기",
    description: "강력하고 안전한 비밀번호를 무료로 생성하세요.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "u0tfgRyLeo2Li6KlMeemDknjVo2D_tgKwG7v4EgEcBc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "SecurePass",
              description: "강력하고 안전한 비밀번호를 무료로 생성하세요. 브라우저에서 안전하게 맞춤형 비밀번호를 만들 수 있습니다.",
              url: SITE_URL,
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
              inLanguage: "ko",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
