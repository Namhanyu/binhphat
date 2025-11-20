"use client";

import { useEffect, useState } from "react";
import bgImage01 from "../../../assets/images/news.webp";
import { useTranslations } from "../../../i18n/utils";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  project: any;
}

const t = useTranslations("vi");

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <section
      id="project-detail"
      className={clsx("flex items-center bg-cover bg-center", "text-primary")}
      style={{ backgroundImage: `url(${bgImage01.src})` }}
      data-menu-color="primary"
    >
      <div
        className={clsx(
          "container min-h-screen grid pt-32 pb-20 3xl:pt-[8vw] 3xl:pb-[5vw] gap-6 3xl:gap-[2.5vw] content-start",
          "md:grid-rows-[auto,_1fr]",
          "max-md:h-auto max-md:py-16"
        )}
      >
        <div className="grid gap-3 3xl:gap-[0.75vw]">
          <motion.h2
            className="text-4xl font-black uppercase max-md:text-2xl whitespace-pre-line mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {project.name}
          </motion.h2>
          <motion.div
            className="whitespace-pre-line"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t("projects.investor")}: {project.investor}
          </motion.div>
          <motion.div
            className="whitespace-pre-line"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t("projects.address")}: {project.location}
          </motion.div>
        </div>
        <div className="h-full grid md:grid-cols-3 max-md:gap-2 gap-4 md:min-h-[50vh]">
          {project.images[0] && (
            <motion.div
              className="h-full bg-cover bg-center md:col-span-2 max-md:h-[50vw]"
              style={{ backgroundImage: `url(${project.images[0]})` }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            ></motion.div>
          )}
          <div className="grid gap-4 max-md:gap-2 max-md:grid-cols-2">
            {project.images[1] && (
              <motion.div
                style={{ backgroundImage: `url(${project.images[1]})` }}
                className="h-full bg-cover bg-center max-md:h-[25vw]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              ></motion.div>
            )}
            {project.images[2] && (
              <motion.div
                style={{ backgroundImage: `url(${project.images[2]})` }}
                className="h-full bg-cover bg-center max-md:h-[25vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              ></motion.div>
            )}
          </div>
        </div>

        <motion.div
          className="[&_table]:!w-full"
          dangerouslySetInnerHTML={{ __html: project.content }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        ></motion.div>
      </div>
    </section>
  );
};

const ProjectDetailPage: React.FC = () => {
  const [slug, setSlug] = useState(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      const s = url.includes("#/") ? url.split("#/")[1] : "";
      return s;
    }
    return "";
  });

  const [data, setData] = useState<any>({
    images: [],
  });

  async function getProjectDetail(currentSlug: string) {
    if (!currentSlug) return;
    try {
      const res = await fetch(
        `${
          (import.meta as any).env.PUBLIC_API_URL
        }api/public/projects/${currentSlug}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching project detail:", error);
      return null;
    }
  }

  useEffect(() => {
    // Handler for hash changes
    const handleHashChange = () => {
      const url = window.location.href;
      const newSlug = url.includes("#/") ? url.split("#/")[1] : "";
      setSlug(newSlug);
      getProjectDetail(newSlug);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initial fetch
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!data || !data.name) {
    return null;
  }

  return <ProjectDetail project={data} />;
};

export default ProjectDetailPage;
