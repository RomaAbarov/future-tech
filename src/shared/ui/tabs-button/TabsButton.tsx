import { Ref } from "react";
import clsx from "clsx";
import "./TabsButton.scss";

type Props = {
  ref: Ref<HTMLButtonElement>;
  isActiveTab: boolean;
  className?: string;
  id: string;
  ariaControls: string;
  children: string;
  onClick: () => void;
};

export function TabsButton({
  ref,
  isActiveTab,
  onClick,
  className,
  id,
  ariaControls,
  children,
}: Props) {
  return (
    <button
      ref={ref}
      className={clsx("tabs__button", className, isActiveTab && "is-active")}
      type="button"
      id={id}
      role="tab"
      aria-controls={ariaControls}
      aria-selected={isActiveTab ? "true" : "false"}
      tabIndex={isActiveTab ? 0 : -1}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
