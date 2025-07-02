"use client";

import { createContext, ReactNode, useState } from "react";
import "./Tabs.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const TabsContext = createContext<{
  currentTabIndex: number;
  setCurrentTabIndex: (index: number) => void;
}>({
  currentTabIndex: 0,
  setCurrentTabIndex: () => {},
});

function Tabs({ children }: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <TabsContext value={{ currentTabIndex, setCurrentTabIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext>
  );
}

export { Tabs };
