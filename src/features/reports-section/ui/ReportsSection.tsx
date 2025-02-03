"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { ReportCard } from "@/entities/report-card";
import { BorderedGrid, Content, TabContentList, TabsButton } from "@/shared/ui";
import "./ReportsSection.scss";

const buttons = ["Whitepapers", "Ebooks", "Reports"];
const reportCards = [
  {
    id: "1",
    srcImg: "/images/reports/card-1.jpg",
    title: "FutureTech Trends 2024",
    description:
      "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    link: "#",
    downloadPdfLink: "#",
  },
  {
    id: "2",
    srcImg: "/images/reports/card-2.jpg",
    title: "Space Exploration Ebook",
    description:
      "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    link: "#",
    downloadPdfLink: "#",
  },
  {
    id: "3",
    srcImg: "/images/reports/card-3.jpg",
    title: "Quantum Computing Whitepaper",
    description:
      "An in-depth whitepaper exploring the principles, applications.",
    link: "#",
    downloadPdfLink: "#",
  },
];

export function ReportsSection() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([null]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const { code, metaKey } = event;

    const focusTab = (index: number) => {
      buttonsRef.current[index]?.focus();
    };

    const previousTab = () => {
      const tabIndex =
        currentTabIndex === 0 ? buttons.length - 1 : currentTabIndex - 1;

      setCurrentTabIndex(tabIndex);
      focusTab(tabIndex);
    };

    const nextTab = () => {
      const tabIndex =
        currentTabIndex === buttons.length - 1 ? 0 : currentTabIndex + 1;

      setCurrentTabIndex(tabIndex);
      focusTab(tabIndex);
    };

    const firstTab = () => {
      event.preventDefault();
      setCurrentTabIndex(0);
      focusTab(0);
    };

    const endTab = () => {
      event.preventDefault();
      setCurrentTabIndex(buttons.length - 1);
      focusTab(buttons.length - 1);
    };

    const action = {
      ArrowLeft: previousTab,
      ArrowRight: nextTab,
      Home: firstTab,
      End: endTab,
    }[code];

    const isMacHomeKey = metaKey && code === "ArrowLeft";

    if (isMacHomeKey) {
      firstTab();
    }

    const isMacEndKey = metaKey && code === "ArrowRight";

    if (isMacEndKey) {
      endTab();
    }

    action?.();
  }

  return (
    <section className="section" aria-labelledby="reports-title">
      <header className="section__header">
        <div className="section__header-inner container">
          <div className="section__header-info">
            <p className="section__subtitle tag">Dive into the Details</p>
            <h2 className="section__title" id="reports-title">
              In-Depth Reports and Analysis
            </h2>
          </div>
          <div
            className="section__actions"
            onKeyDown={(event) => onKeyDown(event)}
          >
            <div
              className="tabs__buttons tabs__buttons--compact"
              role="tablist"
              aria-labelledby="reports-title"
            >
              {buttons.map((button, index) => (
                <TabsButton
                  key={index}
                  ref={(el: any) => (buttonsRef.current[index] = el)} //не получается типизировать
                  id={"tab-" + index}
                  isActiveTab={index === currentTabIndex}
                  ariaControls={"tabpanel-" + index}
                  onClick={() => setCurrentTabIndex(index)}
                >
                  {button}
                </TabsButton>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="section__body">
        <TabContentList currentTabIndex={currentTabIndex}>
          <Content>
            <div className="container">
              <BorderedGrid
                cols={3}
                data={reportCards}
                Component={ReportCard}
              />
            </div>
          </Content>
        </TabContentList>
      </div>
    </section>
  );
}
