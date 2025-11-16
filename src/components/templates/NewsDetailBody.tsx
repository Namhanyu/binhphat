import { useEffect, useState } from "react";

export default function NewsDetail() {
  const [slug, setSlug] = useState(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      return url.includes("#") ? url.split("#")[1] : "";
    }
    return "";
  });

  const [data, setData] = useState<any>({
    date: "",
    title: "",
    content: "",
    related: [],
  });

  async function getNewsDetail(currentSlug: string) {
    if (!currentSlug) return;
    try {
      const res = await fetch(
        `${
          (import.meta as any).env.PUBLIC_API_URL
        }api/public/news/${currentSlug}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching news detail:", error);
      return null;
    }
  }

  useEffect(() => {
    // Handler for hash changes
    const handleHashChange = () => {
      const url = window.location.href;
      const newSlug = url.includes("#") ? url.split("#")[1] : "";
      setSlug(newSlug);
      getNewsDetail(newSlug);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initial fetch
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="container max-w-screen-2xl 3xl:!max-w-full 3xl:!px-[8vw] py-10">
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        <main>
          <article className="prose prose-neutral sm:max-w-none prose-headings:font-display prose-a:font-medium prose-a:text-primary prose-a:underline-offset-4 prose-figure:text-center max-w-2xl prose-img:mx-auto p-4 md:p-8 border-2 border-primary">
            <header className="grid gap-4 mb-8 justify-items-start">
              <div className="p-2 bg-primary text-white text-base font-semibold">
                {`${data.date.split("-")[1]}.${data.date.split("-")[2]}.${
                  data.date.split("-")[0]
                }`}
              </div>
              <h1 className="text-[32px] font-semibold break-words uppercase text-primary mb-0">
                {data.title}
              </h1>
            </header>

            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </article>
        </main>

        <aside>
          <div className="flex justify-between gap-4 items-center uppercase text-white bg-primary py-2 px-4 mb-4">
            <h2 className="font-semibold text-[18px]">Tin tức nổi bật</h2>
            <a className="text-[16px]" href="/tin-tuc">
              Xem thêm &gt;
            </a>
          </div>
          <ul className="border-y-2 grid divide-y-2">
            {data.related.map((article: any) => (
              <li className="group" key={article.slug}>
                <a
                  href={`/tin-tuc/vn/#${article.slug}`}
                  className="flex gap-6 py-4"
                >
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-24 h-16 object-cover flex-shrink-0 bg-neutral-200"
                  />

                  <div className="flex-1 flex flex-col justify-between items-start">
                    <div className="line-clamp-2 text-[18px] font-semibold text-black uppercase group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </div>{" "}
                    <div className="px-1 bg-primary text-white text-[10px] font-semibold">
                      {`${article.date.split("-")[1]}.${
                        article.date.split("-")[2]
                      }.${article.date.split("-")[0]}`}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
