export default function LangSwitch({ lang }: { lang: "en" | "vi" }) {
  const viUrl = new URL(window.location.href);
  const enUrl = new URL(window.location.href);

  const enToViMap: Record<string, string> = {
    "/en": "/",
    "/en/about": "/gioi-thieu",
    "/en/about/": "/gioi-thieu",
    "/en/news": "/tin-tuc",
    "/en/news/": "/tin-tuc",
    "/en/news/detail/": "/tin-tuc/chi-tiet/",
    "/en/operations": "/linh-vuc-hoat-dong",
    "/en/operations/": "/linh-vuc-hoat-dong",
    "/en/projects": "/du-an",
    "/en/projects/": "/du-an",
    "/en/projects/detail/": "/du-an/chi-tiet/",
    "/en/recruitment": "/tuyen-dung",
    "/en/recruitment/": "/tuyen-dung",
    "/en/recruitment/detail/": "/tuyen-dung/chi-tiet/",
    "/en/contact": "/lien-he",
    "/en/contact/": "/lien-he",
  };

  // Mapping Vietnamese routes to English routes
  const viToEnMap: Record<string, string> = {
    "/": "/en",
    "/gioi-thieu": "/en/about",
    "/gioi-thieu/": "/en/about",
    "/tin-tuc": "/en/news",
    "/tin-tuc/": "/en/news",
    "/tin-tuc/chi-tiet/": "/en/news/detail/",
    "/linh-vuc-hoat-dong": "/en/operations",
    "/linh-vuc-hoat-dong/": "/en/operations",
    "/du-an": "/en/projects",
    "/du-an/": "/en/projects",
    "/du-an/chi-tiet/": "/en/projects/detail/",
    "/tuyen-dung": "/en/recruitment",
    "/tuyen-dung/": "/en/recruitment",
    "/tuyen-dung/chi-tiet/": "/en/recruitment/detail/",
    "/lien-he": "/en/contact",
    "/lien-he/": "/en/contact",
  };

  const pathname = window.location.pathname;

  if (lang === "en") {
    viUrl.pathname =
      enToViMap[pathname] || pathname.replace(/^\/en/, "") || "/";
    viUrl.hash = window.location.hash;
  } else {
    enUrl.pathname = viToEnMap[pathname] || "/en" + pathname;
    enUrl.hash = window.location.hash;
  }

  return (
    <div
      className="flex items-center gap-2 3xl:gap-[0.5vw] text-sm z-50 font-semibold"
      id="lang"
    >
      <a href={viUrl.href}>VI</a>
      <span>/</span>
      <a href={enUrl.href}>EN</a>
    </div>
  );
}
