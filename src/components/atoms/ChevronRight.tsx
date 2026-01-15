import React from "react";

interface Props {
  className?: string;
}

const ChevronRight: React.FC<Props> = ({ className }) => (
  <svg width="12" height="21" viewBox="0 0 16 28" fill="none" className={className}>
    <path d="M1.5 1.5L14 14L1.5 26.5" stroke="currentColor" strokeWidth={2}></path>
  </svg>
);

export default ChevronRight;
