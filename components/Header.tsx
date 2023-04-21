import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Github from "./GitHub";

export default function Header() {
  const t = useTranslations("Index");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-5 sm:px-4 px-2">
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1
          style={{ color: "steelblue", fontWeight: "bold", fontSize: "38px" }}
        >
          众言
        </h1>
        <h2 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          {t("title")}
        </h2>
      </div>
      <div className="flex gap-2">
        {otherLocale && (
          <div className="relative font-medium text-black-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
            <Link href={route} locale={otherLocale}>
              {t("switchLocale", { locale: otherLocale })}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
