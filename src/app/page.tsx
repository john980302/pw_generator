"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBrowserLocale, defaultLocale } from "@/i18n";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    const locale = savedLocale || getBrowserLocale() || defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    </div>
  );
}
