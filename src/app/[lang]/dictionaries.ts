import "server-only";

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  pl: () => import("./dictionaries/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
