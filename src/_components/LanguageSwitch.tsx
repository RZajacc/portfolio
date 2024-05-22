"use client";

import { Locale } from "@/app/[lang]/dictionaries";
import { useRouter } from "next/navigation";

type Props = {
  lang: {
    en: string;
    de: string;
    pl: string;
  };
};

const SwitchLang = ({ lang }: Props) => {
  const router = useRouter();

  const switchLang = (lang: Locale) => {
    router.push(`/${lang}`);
  };

  return (
    <div id="lang" className="space-x-3 text-center">
      <button className="cursor-none" onClick={() => switchLang("en")}>
        {lang.en}
      </button>
      <button className="cursor-none" onClick={() => switchLang("de")}>
        {lang.de}
      </button>
      <button className="cursor-none" onClick={() => switchLang("pl")}>
        {lang.pl}
      </button>
    </div>
  );
};

export default SwitchLang;
