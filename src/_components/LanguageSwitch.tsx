"use client";
import { Locale } from "@/app/[lang]/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

  // Handling selecting language
  const path = usePathname();
  const loc = path.split("/")[1] as Locale;
  const [currentLang, setCurrentLang] = useState<Locale>(loc);
  const handleLangSel = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentLang(e.target.value as Locale);
    switchLang(e.target.value as Locale);
  };
  return (
    <div id="lang" className="space-x-1 text-center">
      {/* TEST */}
      {currentLang === "pl" && (
        <span className="fi fi-pl fis rounded-full"></span>
      )}
      {currentLang === "en" && (
        <span className="fi fi-gb fis rounded-full"></span>
      )}
      {currentLang === "de" && (
        <span className="fi fi-de fis rounded-full"></span>
      )}
      <select
        value={currentLang}
        onChange={handleLangSel}
        className=" rounded-sm bg-slate-500 py-1"
      >
        <option value="en">&#x1F1EC;&#x1F1E7;</option>
        <option value="de">&#x1F1E9;&#x1F1EA;</option>
        <option value="pl">&#x1F1F5;&#x1F1F1;</option>
      </select>
    </div>
  );
};

export default SwitchLang;
