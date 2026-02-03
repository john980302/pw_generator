"use client";

import { useState, useEffect } from "react";
import { ExternalLink, RefreshCw, AlertCircle, Clock, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
}

interface RSSFeed {
  name: string;
  url: string;
  category: string;
}

interface CachedData {
  articles: FeedItem[];
  timestamp: number;
}

const RSS_FEEDS: RSSFeed[] = [
  {
    name: "The Hacker News",
    url: "https://feeds.feedburner.com/TheHackersNews",
    category: "Security News",
  },
  {
    name: "Krebs on Security",
    url: "https://krebsonsecurity.com/feed/",
    category: "Security Analysis",
  },
  {
    name: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/feed/",
    category: "Security News",
  },
];

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json?rss_url=";

const CACHE_KEY = "securepass_news_cache";
const CACHE_DURATION = 60 * 60 * 1000;

function getCache(): CachedData | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data: CachedData = JSON.parse(cached);
    const now = Date.now();

    if (now - data.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

function setCache(articles: FeedItem[]): void {
  try {
    const data: CachedData = {
      articles,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // localStorage capacity exceeded, ignore
  }
}

function stripHtml(html: string): string {
  if (typeof window === "undefined") return html;
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

interface RSS2JsonResponse {
  status: string;
  items: Array<{
    title: string;
    link: string;
    pubDate: string;
    description: string;
  }>;
}

async function fetchRSS(feed: RSSFeed): Promise<FeedItem[]> {
  try {
    const response = await fetch(
      RSS2JSON_API + encodeURIComponent(feed.url)
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: RSS2JsonResponse = await response.json();

    if (data.status !== "ok") {
      throw new Error("RSS fetch failed");
    }

    return data.items.slice(0, 5).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: stripHtml(item.description).slice(0, 200) + "...",
      source: feed.name,
    }));
  } catch (error) {
    console.error(`Error fetching ${feed.name}:`, error);
    return [];
  }
}

export default function NewsFeed() {
  const { t, locale } = useTranslation();
  const [articles, setArticles] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<string>("all");

  const formatDate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffHours < 1) return t.news.justNow;
      if (diffHours < 24) return `${diffHours}${t.news.hoursAgo}`;
      if (diffDays < 7) return `${diffDays}${t.news.daysAgo}`;

      return date.toLocaleDateString(locale === "ko" ? "ko-KR" : locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const loadFeeds = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);

    if (!forceRefresh) {
      const cached = getCache();
      if (cached) {
        setArticles(cached.articles);
        setLoading(false);
        return;
      }
    }

    try {
      const results = await Promise.all(
        RSS_FEEDS.map((feed) => fetchRSS(feed))
      );

      const allItems = results.flat();

      allItems.sort((a, b) => {
        const dateA = new Date(a.pubDate).getTime();
        const dateB = new Date(b.pubDate).getTime();
        return dateB - dateA;
      });

      setArticles(allItems);

      if (allItems.length > 0) {
        setCache(allItems);
      }

      if (allItems.length === 0) {
        setError(t.news.error);
      }
    } catch {
      setError(t.news.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredArticles = selectedSource === "all"
    ? articles
    : articles.filter((a) => a.source === selectedSource);

  const sources = ["all", ...RSS_FEEDS.map((f) => f.name)];

  return (
    <div className="space-y-6">
      {/* Filter & Refresh */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {sources.map((source) => (
            <button
              key={source}
              onClick={() => setSelectedSource(source)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                selectedSource === source
                  ? "bg-violet-500 text-white"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              }`}
            >
              {source === "all" ? t.news.all : source}
            </button>
          ))}
        </div>
        <Button
          onClick={() => loadFeeds(true)}
          disabled={loading}
          variant="outline"
          size="sm"
          className="border-slate-300 bg-slate-100/50 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          {t.news.refresh}
        </Button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <RefreshCw className="h-8 w-8 animate-spin text-violet-500" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">{t.news.loading}</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 py-8">
          <AlertCircle className="h-8 w-8 text-red-400" />
          <p className="mt-4 text-red-400">{error}</p>
          <Button
            onClick={() => loadFeeds(true)}
            variant="outline"
            size="sm"
            className="mt-4 border-red-500/50 hover:bg-red-500/20"
          >
            {t.news.retry}
          </Button>
        </div>
      )}

      {/* Articles Grid */}
      {!loading && !error && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredArticles.map((article, index) => (
            <a
              key={`${article.link}-${index}`}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 bg-white/50 p-5 transition-all hover:border-violet-500/50 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
                  {article.source}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="h-3 w-3" />
                  {formatDate(article.pubDate)}
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-violet-600 transition-colors line-clamp-2 dark:text-white dark:group-hover:text-violet-400">
                {article.title}
              </h3>
              <p className="mb-3 text-sm text-slate-500 line-clamp-2 dark:text-slate-400">
                {article.description}
              </p>
              <div className="flex items-center gap-1 text-xs text-violet-400">
                <span>{t.news.readMore}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredArticles.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Newspaper className="h-12 w-12 text-slate-400 dark:text-slate-600" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">{t.news.noNews}</p>
        </div>
      )}
    </div>
  );
}
