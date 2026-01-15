import { useEffect, useState } from "react";
import JobCard from "../organisms/recruitment/JobCard";

export default function JobList() {
  const [jobItems, setJobItems] = useState<any[]>([]);

  function fetchJobs() {
    fetch(`${(import.meta as any).env.PUBLIC_API_URL}api/public/recruitments`)
      .then((res) => res.json())
      .then((data) => {
        setJobItems(data);
      })
      .catch((error) => {
        console.error("Error fetching job items:", error);
      });
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="space-y-4 container">
      <div className="space-y-8 my-10">
        {jobItems.map((job) => (
          <a
            key={job.slug}
            href={`/tuyen-dung/chi-tiet/#/${job.slug}`}
            className="flex flex-col gap-6"
          >
            <JobCard {...job} />
          </a>
        ))}
      </div>
    </div>
  );
}
