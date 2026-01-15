import clsx from "clsx";

export default function ProjectCard({
  project,
  size,
}: {
  project: any;
  size: "sm" | "md" | "lg";
}) {
  return (
    <a
      className={clsx(
        "group relative overflow-hidden",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-40 after:pointer-events-none after:bg-gradient-to-t after:from-primary after:to-primary/0",
        "3xl:after:h-[10vw]",
        "md:col-span-2 md:row-span-2",
        {
          "md:col-span-4 md:row-span-4": size === "lg",
          "md:col-span-3 md:row-span-3": size === "md",
        }
      )}
      href={`/du-an/chi-tiet/#/${project.id}`}
    >
      <div
        className="bg-cover absolute inset-0 bg-center group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      ></div>
      <div
        className={clsx(
          "grid gap-2 relative p-6 pr-10 justify-items-start items-end h-full content-end z-10 text-white",
          "3xl:gap-[0.5vw] 3xl:p-[1.5vw] 3xl:pr-[2.5vw]"
        )}
      >
        <div
          className={clsx("font-bold uppercase whitespace-pre-line text-base", {
            "md:text-xl lg:text-2xl xl:text-3xl 3xl:text-[1.875vw] 3xl:leading-snug":
              size === "lg",
            "xl:text-xl 3xl:text-[1.25vw] 3xl:leading-snug": size === "md",
          })}
        >
          {project.name || project.investor}
        </div>
        <div className="text-sm">{project.location}</div>
      </div>
    </a>
  );
}
