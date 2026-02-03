"use client";

import { Newspaper, Shield } from "lucide-react";
import NewsFeed from "@/components/NewsFeed";
import { useTranslation } from "@/i18n";

export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white pt-20 pb-8 px-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-4 shadow-lg shadow-violet-500/25">
            <Newspaper className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">{t.news.title}</h1>
          <p className="text-slate-600 dark:text-slate-400">
            {t.news.subtitle}
          </p>
        </div>

        {/* Security Tips */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-500/20 p-3">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-slate-900 dark:text-white">
                {t.news.tips.title}
              </h2>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• {t.news.tips.tip1}</li>
                <li>• {t.news.tips.tip2}</li>
                <li>• {t.news.tips.tip3}</li>
                <li>• {t.news.tips.tip4}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* News Feed */}
        <NewsFeed />
      </div>
    </div>
  );
}
