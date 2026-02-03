"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Copy, Check, RefreshCw, Lock } from "lucide-react";

const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// 비밀번호 강도에 따른 캐릭터 컴포넌트
function StrengthCharacter({ strength }: { strength: string }) {
  if (strength === "Very Strong") {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
            {/* 강력한 방패 캐릭터 */}
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* 빛나는 효과 */}
            <circle cx="60" cy="60" r="50" fill="#10b981" opacity="0.2" filter="url(#glow)" />
            {/* 방패 몸체 */}
            <path d="M60 15 L95 30 L95 60 Q95 95 60 105 Q25 95 25 60 L25 30 Z"
                  fill="url(#shieldGradient)" stroke="#047857" strokeWidth="3"/>
            {/* 체크마크 */}
            <path d="M45 55 L55 70 L80 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {/* 눈 */}
            <circle cx="45" cy="45" r="4" fill="#047857"/>
            <circle cx="75" cy="45" r="4" fill="#047857"/>
            {/* 미소 */}
            <path d="M45 75 Q60 90 75 75" stroke="#047857" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* 빛나는 별 */}
            <polygon points="100,20 102,26 108,26 103,30 105,36 100,32 95,36 97,30 92,26 98,26" fill="#fbbf24"/>
          </svg>
        </div>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">철벽 보안!</span>
      </div>
    );
  }

  if (strength === "Strong") {
    return (
      <div className="flex flex-col items-center gap-2">
        <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
          {/* 강한 자물쇠 캐릭터 */}
          <defs>
            <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          {/* 자물쇠 고리 */}
          <path d="M40 50 L40 35 Q40 15 60 15 Q80 15 80 35 L80 50"
                stroke="#1e40af" strokeWidth="8" fill="none" strokeLinecap="round"/>
          {/* 자물쇠 몸체 */}
          <rect x="30" y="50" width="60" height="50" rx="8" fill="url(#lockGradient)" stroke="#1e40af" strokeWidth="2"/>
          {/* 눈 */}
          <circle cx="48" cy="70" r="5" fill="white"/>
          <circle cx="72" cy="70" r="5" fill="white"/>
          <circle cx="49" cy="71" r="2" fill="#1e40af"/>
          <circle cx="73" cy="71" r="2" fill="#1e40af"/>
          {/* 자신감 있는 미소 */}
          <path d="M48 85 Q60 95 72 85" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* 엄지척 */}
          <ellipse cx="100" cy="75" rx="8" ry="12" fill="#fcd34d" transform="rotate(-20 100 75)"/>
          <rect x="95" y="82" width="10" height="15" rx="3" fill="#fcd34d" transform="rotate(-20 100 90)"/>
        </svg>
        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">튼튼해요!</span>
      </div>
    );
  }

  if (strength === "Medium") {
    return (
      <div className="flex flex-col items-center gap-2">
        <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
          {/* 보통 자물쇠 - 살짝 걱정되는 표정 */}
          <defs>
            <linearGradient id="mediumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {/* 자물쇠 고리 - 살짝 열린 */}
          <path d="M40 50 L40 35 Q40 15 60 15 Q80 15 80 35 L80 45"
                stroke="#92400e" strokeWidth="8" fill="none" strokeLinecap="round"/>
          {/* 자물쇠 몸체 */}
          <rect x="30" y="50" width="60" height="50" rx="8" fill="url(#mediumGradient)" stroke="#92400e" strokeWidth="2"/>
          {/* 눈 - 걱정스러운 */}
          <circle cx="48" cy="70" r="5" fill="white"/>
          <circle cx="72" cy="70" r="5" fill="white"/>
          <circle cx="49" cy="72" r="2" fill="#92400e"/>
          <circle cx="73" cy="72" r="2" fill="#92400e"/>
          {/* 걱정스러운 눈썹 */}
          <line x1="42" y1="60" x2="54" y2="63" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
          <line x1="78" y1="60" x2="66" y2="63" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
          {/* 불안한 입 */}
          <path d="M50 88 Q60 82 70 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* 땀방울 */}
          <ellipse cx="90" cy="55" rx="4" ry="6" fill="#60a5fa"/>
        </svg>
        <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">좀 더 강하게...</span>
      </div>
    );
  }

  // Weak
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* 약한 자물쇠 - 부서질 것 같은 */}
        <defs>
          <linearGradient id="weakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        {/* 부서진 자물쇠 고리 */}
        <path d="M40 50 L40 35 Q40 20 55 17"
              stroke="#991b1b" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M80 45 L80 35 Q80 20 65 17"
              stroke="#991b1b" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* 금이 간 자물쇠 몸체 */}
        <rect x="30" y="50" width="60" height="50" rx="8" fill="url(#weakGradient)" stroke="#991b1b" strokeWidth="2"/>
        {/* 금 */}
        <path d="M55 50 L52 65 L58 75 L54 100" stroke="#991b1b" strokeWidth="2" fill="none"/>
        {/* 눈 - X자 눈 */}
        <g stroke="white" strokeWidth="3" strokeLinecap="round">
          <line x1="43" y1="65" x2="53" y2="75"/>
          <line x1="53" y1="65" x2="43" y2="75"/>
          <line x1="67" y1="65" x2="77" y2="75"/>
          <line x1="77" y1="65" x2="67" y2="75"/>
        </g>
        {/* 울상 입 */}
        <path d="M48 90 Q60 82 72 90" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* 붕대 */}
        <rect x="85" y="40" width="20" height="8" rx="2" fill="#fef3c7" transform="rotate(-30 95 44)"/>
        <line x1="87" y1="41" x2="87" y2="47" stroke="#d97706" strokeWidth="1" transform="rotate(-30 95 44)"/>
        <line x1="91" y1="41" x2="91" y2="47" stroke="#d97706" strokeWidth="1" transform="rotate(-30 95 44)"/>
        {/* 위험 표시 */}
        <polygon points="15,25 25,45 5,45" fill="#fbbf24" stroke="#92400e" strokeWidth="1"/>
        <text x="15" y="42" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">!</text>
      </svg>
      <span className="text-red-600 dark:text-red-400 font-bold text-sm">위험해요!</span>
    </div>
  );
}

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let chars = "";
    if (options.uppercase) chars += CHAR_SETS.uppercase;
    if (options.lowercase) chars += CHAR_SETS.lowercase;
    if (options.numbers) chars += CHAR_SETS.numbers;
    if (options.symbols) chars += CHAR_SETS.symbols;

    if (!chars) {
      setPassword("");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const result = Array.from(array, (num) => chars[num % chars.length]).join(
      ""
    );
    setPassword(result);
    setCopied(false);
  }, [length, options]);

  // 길이나 옵션 변경 시 자동 생성
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPasswordStrength = () => {
    const activeOptions = Object.values(options).filter(Boolean).length;
    if (length >= 20 && activeOptions >= 4) return { label: "Very Strong", color: "bg-emerald-500", barColor: "from-emerald-500 to-green-400" };
    if (length >= 16 && activeOptions >= 3) return { label: "Strong", color: "bg-blue-500", barColor: "from-blue-500 to-cyan-400" };
    if (length >= 12 && activeOptions >= 2) return { label: "Medium", color: "bg-amber-500", barColor: "from-amber-500 to-yellow-400" };
    return { label: "Weak", color: "bg-red-500", barColor: "from-red-500 to-orange-400" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white pt-20 pb-4 px-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:pt-24 md:px-8 md:pb-8">
      <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-4 shadow-lg shadow-violet-500/25">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            비밀번호 생성기
          </h1>
          <p className="text-slate-600 dark:text-slate-400 md:text-lg">
            안전한 비밀번호를 만들어보세요
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-8">

          {/* Password Section - Character + Input */}
          <div className="mb-6 flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {/* Character Display */}
            <div className="flex-shrink-0">
              {password ? (
                <div className="animate-in fade-in zoom-in duration-300">
                  <StrengthCharacter strength={strength.label} />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <svg width="100" height="100" viewBox="0 0 120 120" className="opacity-30">
                    <rect x="30" y="50" width="60" height="50" rx="8" fill="#475569" stroke="#334155" strokeWidth="2"/>
                    <path d="M40 50 L40 35 Q40 15 60 15 Q80 15 80 35 L80 50" stroke="#334155" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <circle cx="60" cy="75" r="8" fill="#334155"/>
                  </svg>
                  <span className="text-slate-400 dark:text-slate-500 text-sm">비밀번호를 생성해주세요</span>
                </div>
              )}
            </div>

            {/* Password Display */}
            <div className="w-full flex-1 space-y-3">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    readOnly
                    value={password}
                    placeholder="생성 버튼을 클릭하세요"
                    className="h-14 w-full rounded-xl border-slate-300 bg-slate-100/50 pr-4 font-mono text-base text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 md:h-16 md:text-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-xl border-slate-300 bg-slate-100/50 transition-all hover:border-violet-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700 md:h-16 md:w-16"
                  onClick={copyToClipboard}
                  disabled={!password}
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                  )}
                </Button>
              </div>

              {/* Strength Bar */}
              {password && (
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className={`h-full bg-gradient-to-r ${strength.barColor} transition-all duration-500`}
                      style={{
                        width: `${strength.label === "Very Strong" ? 100 : strength.label === "Strong" ? 75 : strength.label === "Medium" ? 50 : 25}%`,
                      }}
                    />
                  </div>
                  <span className={`text-sm font-medium ${
                    strength.label === "Very Strong" ? "text-emerald-600 dark:text-emerald-400" :
                    strength.label === "Strong" ? "text-blue-600 dark:text-blue-400" :
                    strength.label === "Medium" ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400"
                  }`}>
                    {strength.label === "Very Strong" ? "매우 강함" :
                     strength.label === "Strong" ? "강함" :
                     strength.label === "Medium" ? "보통" : "약함"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Length Slider */}
          <div className="mb-6 rounded-2xl bg-slate-100/50 p-4 dark:bg-slate-800/50 md:p-6">
            <div className="mb-3 flex items-center justify-between">
              <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                비밀번호 길이
              </Label>
              <span className="rounded-lg bg-violet-500/20 px-3 py-1 font-mono text-sm font-bold text-violet-400">
                {length}
              </span>
            </div>
            <Slider
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
              min={4}
              max={64}
              step={1}
              className="py-2"
            />
            <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-slate-500">
              <span>4</span>
              <span>64</span>
            </div>
          </div>

          {/* Options */}
          <div className="mb-6 space-y-3">
            <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              문자 종류
            </Label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {(
                [
                  ["uppercase", "대문자", "A-Z", "🔤"],
                  ["lowercase", "소문자", "a-z", "🔡"],
                  ["numbers", "숫자", "0-9", "🔢"],
                  ["symbols", "특수문자", "!@#", "✨"],
                ] as const
              ).map(([key, label, hint, emoji]) => (
                <div
                  key={key}
                  role="button"
                  tabIndex={0}
                  onClick={() => setOptions((prev) => ({ ...prev, [key]: !prev[key] }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
                    }
                  }}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all ${
                    options[key]
                      ? "border-violet-500 bg-violet-500/10"
                      : "border-slate-300 bg-slate-100/30 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800/30 dark:hover:border-slate-600"
                  }`}
                >
                  <span className="text-xl">{emoji}</span>
                  <div className="flex flex-col items-start">
                    <span className={`text-sm font-medium ${options[key] ? "text-violet-600 dark:text-violet-300" : "text-slate-700 dark:text-slate-300"}`}>
                      {label}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{hint}</span>
                  </div>
                  <div className="ml-auto">
                    <Switch
                      checked={options[key]}
                      onCheckedChange={() => setOptions((prev) => ({ ...prev, [key]: !prev[key] }))}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={generatePassword}
            disabled={!Object.values(options).some(Boolean)}
            className="h-14 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-base font-bold shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-purple-500 hover:shadow-violet-500/40 disabled:opacity-50 md:h-16 md:text-lg"
            size="lg"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            비밀번호 생성
          </Button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
          생성된 비밀번호는 브라우저에서만 처리되며 서버로 전송되지 않습니다
        </p>
      </div>
    </div>
  );
}
