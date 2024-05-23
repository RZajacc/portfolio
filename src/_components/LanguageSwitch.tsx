"use client";
import { Locale } from "@/app/[lang]/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

type Props = {};

const SwitchLang = ({}: Props) => {
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
    <div className="space-x-1 text-center">
      <select
        value={currentLang}
        onChange={handleLangSel}
        className=" rounded-sm bg-slate-600 py-1"
      >
        {/* Depending on the browser it will render either flag or contry code */}
        <option value="en">&#x1F1EC;&#x1F1E7;</option>
        <option value="de">&#x1F1E9;&#x1F1EA;</option>
        <option value="pl">&#x1F1F5;&#x1F1F1;</option>
      </select>
    </div>
  );
};

export default SwitchLang;
