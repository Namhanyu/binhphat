import { useState } from "react";
import clsx from "clsx";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex flex-col items-center gap-1 w-6 h-auto z-50"
      onClick={() => {
        setIsOpen(!isOpen);
        document.getElementById("menu")!.classList.toggle("translate-x-full");
      }}
      id="menu-button"
    >
      <div
        className={clsx("h-[3px] w-full bg-current transition-all", {
          "rotate-45 -mb-[7px]": isOpen,
        })}
      ></div>
      <div
        className={clsx("h-[3px] w-full bg-current transition-all", {
          "scale-0": isOpen,
        })}
      ></div>
      <div
        className={clsx("h-[3px] w-full bg-current transition-all", {
          "-rotate-45 -mt-[7px]": isOpen,
        })}
      ></div>
    </button>
  );
}
