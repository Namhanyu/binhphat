import { useEffect, useState } from "react";
import { useTranslations } from "../../../i18n/utils";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";

const sizeMap = [
  "lg",
  "",
  "",
  "md",
  "md",
  "",
  "",
  "",
  "",
  "lg",
  "",
  "md",
  "md",
  "",
  "",
  "",
  "lg",
  "",
  "",
  "md",
  "md",
  "",
  "",
  "",
];

export default function ProjectGrid({ lang }: { lang: "vi" | "en" }) {
  const t = useTranslations(lang);

  const [activeTab, setActiveTab] = useState(0);

  const [projects, setProjects] = useState<any[]>([]);

  function changeTab(index: number) {
    setActiveTab(index);
    fetchProjects(index);
  }

  function fetchProjects(category?: number) {
    fetch(
      `${(import.meta as any).env.PUBLIC_API_URL}api/public/projects?category=${
        category || ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch(() => {
        setProjects([]);
      });
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="project-list" className="py-24">
      <div className="container">
        <div className="flex items-center gap-4 md:gap-8 justify-center mb-8 md:mb-20">
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 0,
              }
            )}
            onClick={() => changeTab(0)}
          >
            {t("projects.all")}
          </div>
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 1,
              }
            )}
            onClick={() => changeTab(1)}
          >
            {t("projects.tab1")}
          </div>
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 2,
              }
            )}
            onClick={() => changeTab(2)}
          >
            {t("projects.tab2")}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-6 auto-rows-[280px] md:auto-rows-[100px] lg:auto-rows-[140px] gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              {...project}
              key={project.id}
              project={project}
              size={(sizeMap[index] as any) || "sm"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
