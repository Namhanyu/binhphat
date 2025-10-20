import { useState } from "react";
import { useTranslations } from "../../../i18n/utils";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";

export default function ProjectGrid({
  projects,
  sizeMap,
  lang,
}: {
  projects: any[];
  sizeMap: string[];
  lang: "vi" | "en";
}) {
  const t = useTranslations(lang);

  const [activeTab, setActiveTab] = useState(3);

  const half = Math.ceil(projects.length / 2) + 1;

  const group1 = projects.slice(0, half);

  const map1 = sizeMap.slice(0, half);

  const group2 = projects.slice(half);

  const map2 = sizeMap.slice(half);

  const projectsToShow = activeTab === 0 ? group1 : group2;

  const sizeToShow = activeTab === 0 ? map1 : map2;

  return (
    <section id="project-list" className="py-24">
      <div className="container">
        <div className="flex items-center gap-4 md:gap-8 justify-center mb-8 md:mb-20">
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 3,
              }
            )}
            onClick={() => setActiveTab(3)}
          >
            {t("projects.all")}
          </div>
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 0,
              }
            )}
            onClick={() => setActiveTab(0)}
          >
            {t("projects.tab1")}
          </div>
          <div
            className={clsx(
              "text-2xl text-center max-md:text-base max-md:font-bold md:uppercase font-extrabold cursor-pointer hover:text-black/50 transition-colors text-black/80 border-b-4 border-transparent pb-4",
              {
                "text-primary !border-primary": activeTab === 1,
              }
            )}
            onClick={() => setActiveTab(1)}
          >
            {t("projects.tab2")}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-6 auto-rows-[280px] md:auto-rows-[100px] lg:auto-rows-[140px] gap-4">
          {projectsToShow.map((project, index) => (
            <ProjectCard
              {...project}
              name={project.name || project.investor}
              size={sizeToShow[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
