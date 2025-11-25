import clsx from "clsx";
import { useEffect, useState } from "react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function NewListSection() {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [newsDetailUrl, setNewsDetailUrl] = useState("/tin-tuc");

  useEffect(() => {
    const isEnglish = window.location.pathname.startsWith("/en");
    setNewsDetailUrl(isEnglish ? "/en/news/detail" : "/tin-tuc/chi-tiet");
  }, []);

  function fetchNews() {
    fetch(
      `${(import.meta as any).env.PUBLIC_API_URL}api/public/news?is_featured=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
      })
      .catch((error) => {
        console.error("Error fetching news items:", error);
      });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-rows-[repeat(2,_280px)] 3xl:grid-rows-[repeat(2,_17.5vw)] md:grid-rows-[280px_280px] max-md:grid-rows-[repeat(4,_280px)] gap-2">
      {newsItems.map((item, index) => (
        <a
          href={`${newsDetailUrl}/#/${item.slug}`}
          className={clsx(
            "group relative overflow-hidden cursor-pointer block",
            "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-40 after:pointer-events-none after:bg-gradient-to-t after:from-primary after:to-primary/0",
            "3xl:after:h-[10vw]",
            {
              "xl:col-span-2 xl:row-span-2": index === 0,
              "xl:col-span-2": index === 1,
            }
          )}
          key={item.slug}
        >
          <div
            className="bg-cover absolute inset-0 bg-center group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${item.image_url})` }}
          />
          <div
            className={clsx(
              "grid gap-2 relative p-6 pr-10 justify-items-start items-end h-full content-end z-10 text-white",
              "3xl:gap-[0.5vw] 3xl:p-[1.5vw] 3xl:pr-[2.5vw]",
              {
                "xl:max-w-[80%]": index === 0,
                "xl:max-w-[60%]": index === 1,
              }
            )}
          >
            <div className="bg-white text-primary uppercase text-xs px-2 leading-4 3xl:px-[0.5vw] 3xl:leading-snug font-semibold">
              {item.is_featured ? "Tin nổi bật" : "Tin mới"}
            </div>
            <div
              className={clsx("font-bold uppercase line-clamp-2", {
                "xl:text-xl 3xl:text-[1.25vw] 3xl:leading-snug": index === 0,
              })}
            >
              {item.title}
            </div>
            {index === 0 && (
              <div className="max-xl:hidden text-xs line-clamp-3">
                {item.description}
              </div>
            )}
            <div className="text-sm">Bình Phát - {formatDate(item.date)}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
