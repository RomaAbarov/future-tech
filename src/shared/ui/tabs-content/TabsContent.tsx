import { ReactNode } from "react";
import clsx from "clsx";
import "./TabsContent.scss";

type Props = {
  isActiveTab: boolean;
  id: string;
  ariaLabelledby: string;
  children: ReactNode;
};

export function TabsContent({
  isActiveTab,
  id,
  ariaLabelledby,
  children,
}: Props) {
  return (
    <div
      className={clsx("tabs__content", isActiveTab && "is-active")}
      id={id}
      aria-labelledby={ariaLabelledby}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
