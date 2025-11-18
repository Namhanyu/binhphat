import { useEffect, useState } from "react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function NewsList() {
  const [newsItems, setNewsItems] = useState<any[]>([]);

  function fetchNews() {
    fetch(`${(import.meta as any).env.PUBLIC_API_URL}api/public/news`)
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
    <div className="mb-10 grid md:grid-cols-2 gap-6 max-sm:mt-10">
      {newsItems.map((item) => (
        <a
          className="sm:mt-10 group md:[&:nth-child(even)]:-mt-4"
          href={`/tin-tuc/vn/#${item.slug}`}
          key={item.slug}
        >
          <div className="overflow-hidden aspect-[570/336] flex bg-neutral-200">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="px-4 sm:px-8 py-4 flex items-center gap-5 bg-sky-100 group-hover:bg-primary transition-colors duration-300 w-full sm:w-4/5 max-sm:max-w-[400px] -mt-8 z-10 relative sm:rounded-tr-[50px]">
            <div className="text-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
              <div className="text-[11px] leading-none">
                {`${item.date.split("-")[1]}-${item.date.split("-")[0]}`}
              </div>
              <div className="text-[35px] leading-none font-bold">
                {item.date.split("T")[0].split("-")[2]}
              </div>
            </div>
            <div className="w-px h-10 bg-neutral-300" />
            <div className="text-base font-semibold line-clamp-2 uppercase text-black group-hover:text-white transition-colors duration-300">
              {item.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
