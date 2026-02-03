"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Lock, Newspaper, Menu, X, Sun, Moon, Monitor } from "lucide-react";

const navItems = [
  { href: "/", label: "비밀번호 생성기", icon: Lock },
  { href: "/news", label: "보안 뉴스", icon: Newspaper },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-5 w-5" />;
    if (theme === "system") return <Monitor className="h-5 w-5" />;
    if (theme === "light") return <Sun className="h-5 w-5" />;
    return <Moon className="h-5 w-5" />;
  };

  const getThemeLabel = () => {
    if (!mounted) return "시스템";
    if (theme === "system") return "시스템";
    if (theme === "light") return "라이트";
    return "다크";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 p-2">
              <Lock className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">SecurePass</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-500/20 text-violet-600 dark:text-violet-400"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={cycleTheme}
              className="ml-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              title={`현재: ${getThemeLabel()}`}
            >
              {getThemeIcon()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-500/20 text-violet-600 dark:text-violet-400"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={cycleTheme}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {getThemeIcon()}
              {getThemeLabel()} 모드
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
