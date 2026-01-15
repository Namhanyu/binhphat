import { useEffect, useState } from "react";
import "./news.module.css";
import JobLayout from "./JobLayout";

export default function JobDetail() {
  const [slug, setSlug] = useState(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      const s = url.includes("#/") ? url.split("#/")[1] : "";
      return s;
    }
    return "";
  });

  const [data, setData] = useState<any>({
    date: "",
    title: "",
    content: "",
    related: [],
  });

  async function getJobDetail(currentSlug: string) {
    if (!currentSlug) return;
    try {
      const res = await fetch(
        `${
          (import.meta as any).env.PUBLIC_API_URL
        }api/public/recruitments/${currentSlug}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching job detail:", error);
      return null;
    }
  }

  useEffect(() => {
    // Handler for hash changes
    const handleHashChange = () => {
      const url = window.location.href;
      const newSlug = url.includes("#/") ? url.split("#/")[1] : "";
      setSlug(newSlug);
      getJobDetail(newSlug);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initial fetch
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return <JobLayout job={data} relatedJobs={data.related} />;
}
