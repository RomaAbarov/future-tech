"use client";

import {
  Children,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
} from "react";
import { TabsContent } from "../tabs-content/TabsContent";
import { TabsContext } from "../Tabs";
import { TabsButton } from "../tabs-button/TabsButton";
import clsx from "clsx";

type Props = {
  currentTabIndex?: number;
  children: ReactNode;
};

type ListProps = {
  children: ReactElement<{ children: string; className: string }>[];
  ariaLabelledBy?: string;
  className?: string;
};

function Tab({ children }: Props) {
  return <>{children}</>;
}

function Content({ children }: Props) {
  return <>{children}</>;
}

function TabContentList({ children }: Props) {
  const { currentTabIndex } = useContext(TabsContext);

  return (
    <div className="tabs__body">
      {Children.map(children, (child, index) => {
        console.log(child);

        return (
          <TabsContent
            key={index}
            id={`tabpanel-${index}`}
            ariaLabelledby={`tab-${index}`}
            isActiveTab={index === currentTabIndex}
          >
            {(child as ReactElement<{ children: ReactNode }>).props.children}
          </TabsContent>
        );
      })}
    </div>
  );
}

function TabButtonsList({ children, className, ariaLabelledBy }: ListProps) {
  const { currentTabIndex, setCurrentTabIndex } = useContext(TabsContext);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const buttons = Children.map(children, (child) => child.props.children) || [];

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
    <header className="tabs__header">
      <div
        className={clsx("tabs__buttons container", className)}
        role="tablist"
        aria-labelledby={ariaLabelledBy}
        onKeyDown={onKeyDown}
      >
        {buttons.map((label, index) => (
          <TabsButton
            key={index}
            ref={(el: HTMLButtonElement | null) => {
              buttonsRef.current[index] = el;
            }}
            id={`tab-${index}`}
            isActiveTab={index === currentTabIndex}
            ariaControls={`tabpanel-${index}`}
            onClick={() => setCurrentTabIndex(index)}
          >
            {label}
          </TabsButton>
        ))}
      </div>
    </header>
  );
}

export { Tab, Content, TabContentList, TabButtonsList };
