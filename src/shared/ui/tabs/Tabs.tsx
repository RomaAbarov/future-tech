"use client";

import { Children, KeyboardEvent, ReactElement, useRef, useState } from "react";
import { TabsButton } from "../tabs-button/TabsButton";
import { TabsContent } from "../tabs-content/TabsContent";
import clsx from "clsx";
import "./Tabs.scss";

type Props = {
  children: ReactElement<{ children: string[]; className: string }>[];
  className?: string;
  ariaLabelledBy: string;
};

export function Tabs({ children, className, ariaLabelledBy }: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([null]);

  const buttons = children[0].props.children;
  const panels = Children.toArray(children[1]);

  const classButton = children[0].props.className;

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
    <div className="tabs" onKeyDown={(event) => onKeyDown(event)}>
      <header className={clsx("tabs__header", className)}>
        <div
          className="tabs__buttons container"
          role="tablist"
          aria-labelledby={ariaLabelledBy}
        >
          {buttons.map((button, index) => (
            <TabsButton
              key={index}
              ref={(el: any) => (buttonsRef.current[index] = el)} //не получается типизировать
              className={classButton}
              id={"tab-" + index}
              isActiveTab={index === currentTabIndex}
              ariaControls={"tabpanel-" + index}
              onClick={() => setCurrentTabIndex(index)}
            >
              {button}
            </TabsButton>
          ))}
        </div>
      </header>

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
    </div>
  );
}
