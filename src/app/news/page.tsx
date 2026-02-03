import { Newspaper, Shield } from "lucide-react";
import NewsFeed from "@/components/NewsFeed";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white pt-20 pb-8 px-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-4 shadow-lg shadow-violet-500/25">
            <Newspaper className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">보안 뉴스</h1>
          <p className="text-slate-600 dark:text-slate-400">
            비밀번호 및 보안 관련 최신 뉴스와 정보
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
                안전한 비밀번호 관리 팁
              </h2>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• 각 사이트마다 다른 비밀번호를 사용하세요</li>
                <li>• 비밀번호 관리자 사용을 권장합니다</li>
                <li>• 2단계 인증(2FA)을 활성화하세요</li>
                <li>• 정기적으로 비밀번호를 변경하세요</li>
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
