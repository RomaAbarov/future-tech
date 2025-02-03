"use client";

import { ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import "./ExpandableContent.scss";

type Props = {
  children: ReactNode;
};

export function ExpandableContent({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  function onClick() {
    if (divRef.current) {
      const { offsetHeight, scrollHeight } = divRef.current;

      setIsExpanded(true);

      divRef.current.animate(
        [
          {
            maxHeight: `${offsetHeight}px`,
          },
          {
            maxHeight: `${scrollHeight}px`,
          },
        ],
        {
          duration: 500,
          easing: "ease",
        }
      );
    }
  }

  return (
    <div
      ref={divRef}
      className={clsx("expandable-content", isExpanded && "is-expanded")}
    >
      {children}
      <button
        className="button expandable-content__button"
        type="button"
        onClick={onClick}
      >
        <span className="icon icon--gray-arrow-down">Read Full Blog</span>
      </button>
    </div>
  );
}
