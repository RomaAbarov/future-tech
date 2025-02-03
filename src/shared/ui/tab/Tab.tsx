import { Children, ReactNode } from "react";
import { TabsContent } from "../tabs-content/TabsContent";

type Props = {
  currentTabIndex?: number;
  children: ReactNode;
};

type ListProps = {
  children: ReactNode[];
  ariaLabelledBy?: string;
  className?: string;
};

export function Tab({ children }: Props) {
  return <>{children}</>;
}

export function TabContentList({ currentTabIndex, children }: Props) {
  if (currentTabIndex !== undefined) {
    const panels = Children.toArray(children);

    return (
      <div className="tabs__body">
        {panels.map((panel, index) => (
          <TabsContent
            key={index}
            id={"tabpanel-" + index}
            ariaLabelledby={"tab-" + index}
            isActiveTab={index === currentTabIndex}
          >
            {panel}
          </TabsContent>
        ))}
      </div>
    );
  }

  return <>{children}</>;
}

export function Content({ children }: Props) {
  return <>{children}</>;
}

export function TabButtonsList({ children, className }: ListProps) {
  return <div className={className}>{children}</div>;
}
