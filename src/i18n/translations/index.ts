import { ko, type Translation } from "./ko";
import { en } from "./en";
import { zh } from "./zh";
import { ja } from "./ja";
import { hi } from "./hi";
import { fr } from "./fr";
import { pt } from "./pt";
import { de } from "./de";
import type { Locale } from "../config";

export const translations: Record<Locale, Translation> = {
  ko,
  en,
  zh,
  ja,
  hi,
  fr,
  pt,
  de,
};

export type { Translation };
