import React from "react";
import clsx from "clsx";
import ChevronRight from "../atoms/ChevronRight";

interface ActionButtonProps {
  className?: string;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ className, children }) => (
  <button
    className={clsx(
      "h-10 px-4 border-2 border-current uppercase font-semibold flex gap-6 items-center whitespace-nowrap",
      "3xl:h-[2.5vw] 3xl:px-[1vw] 3xl:gap-[1.5vw]",
      className
    )}
  >
    {children}
    <div className="w-px bg-current h-full ml-auto"></div>
    <ChevronRight className="3xl:h-[1.25vw] 3xl:w-auto" />
  </button>
);

export default ActionButton;
