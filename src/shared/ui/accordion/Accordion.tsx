import { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import "./Accordion.scss";

type PropsAccordionGroup = {
  className?: string;
  children: ReactElement[] | ReactElement;
};

type PropsAccordionItem = { className?: string; children: ReactElement[] };

type PropsAccordionDetails = {
  className?: string;
  classNameSummary?: string;
  name?: string;
  open?: boolean;
  children: ReactNode;
};

type PropsAccordionContent = {
  className?: string;
  id?: string;
  children: ReactNode;
};

export function AccordionGroup({ className, children }: PropsAccordionGroup) {
  return <div className={clsx("accordion-group", className)}>{children}</div>;
}

export function AccordionItem({ className, children }: PropsAccordionItem) {
  return (
    <div
      className={clsx(
        "accordion",
        className && className,
        !className && "tile"
      )}
    >
      {children}
    </div>
  );
}

export function AccordionDetails({
  className,
  classNameSummary,
  children,
  ...props
}: PropsAccordionDetails) {
  return (
    <details className={clsx("accordion__details", className)} {...props}>
      <summary className={clsx("accordion__summary", classNameSummary)}>
        {children}
      </summary>
    </details>
  );
}

export function AccordionContent({
  className,
  id,
  children,
}: PropsAccordionContent) {
  return (
    <div
      className={clsx("accordion__content", className)}
      id={id}
      role="definition"
    >
      <div className="accordion__content-inner">{children}</div>
    </div>
  );
}
