"use client";

import { Locale } from "@/app/[lang]/dictionaries";
import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {};

const SwitchLang: FC<Props> = () => {
  const router = useRouter();

  const switchLang = (lang: Locale) => {
    router.push(`/${lang}`);
  };

  return (
    <div id="lang" className="space-x-3 text-center">
      <button className="cursor-none" onClick={() => switchLang("en")}>
        English
      </button>
      <button className="cursor-none" onClick={() => switchLang("de")}>
        Deutch
      </button>
      <button className="cursor-none" onClick={() => switchLang("pl")}>
        Polski
      </button>
    </div>
  );
};

export default SwitchLang;
