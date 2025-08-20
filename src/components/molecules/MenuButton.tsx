import { useState } from "react";
import clsx from "clsx";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex flex-col items-center gap-1 3xl:gap-[0.25vw] w-6 3xl:w-[1.5vw] h-auto z-50"
      onClick={() => {
        setIsOpen(!isOpen);
        document.getElementById("menu")!.classList.toggle("translate-x-full");
      }}
      id="menu-button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="menu"
      type="button"
    >
      <div
        className={clsx(
          "h-[3px] 3xl:h-[0.1875vw] w-full bg-current transition-all",
          {
            "rotate-45 -mb-[7px] 3xl:-mb-[0.4375vw] bg-white": isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "h-[3px] 3xl:h-[0.1875vw] w-full bg-current transition-all",
          {
            "scale-0": isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "h-[3px] 3xl:h-[0.1875vw] w-full bg-current transition-all",
          {
            "-rotate-45 -mt-[7px] 3xl:-mt-[0.4375vw] bg-white": isOpen,
          }
        )}
      ></div>
    </button>
  );
}
