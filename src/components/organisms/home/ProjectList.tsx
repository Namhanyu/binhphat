import { useState } from "react";

export default function ProjectList({
  projects,
}: {
  projects: { name: string; image: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <div className="grid gap-3 3xl:gap-[0.75vw]">
      <div className="text-3xl max-md:text-xl font-semibold text-white uppercase whitespace-pre-line">
        {activeProject.name}
      </div>

      <div className="grid grid-cols-[repeat(5,_minmax(240px,_1fr))] grid-rows-[164px] 3xl:grid-rows-[10.25vw] border-white border-4 3xl:border-[0.25vw] gap-1 3xl:gap-[0.25vw] bg-white overflow-x-scroll snap-x snap-mandatory">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer relative overflow-hidden group snap-center"
            data-index={index}
            onClick={(e) => {
              setActiveIndex(index);
              (e.target as HTMLElement).scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full absolute inset-0 object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
