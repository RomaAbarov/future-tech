"use client";

import { Tabs } from "@/shared/ui";
import { Tab } from "@/shared/ui/tabs/tab/Tab";
import { FallbackProps } from "react-error-boundary";

export function ErrorTabSection({ resetErrorBoundary }: FallbackProps) {
  return (
    <Tabs>
      <Tabs.ButtonsList ariaLabelledBy="blog-category-title">
        <Tabs.Tab>All</Tabs.Tab>
        <Tabs.Tab>Quantum Computing</Tabs.Tab>
        <Tabs.Tab>AI Ethics</Tabs.Tab>
        <Tabs.Tab>Space Exploration</Tabs.Tab>
        <Tabs.Tab>Biotechnology</Tabs.Tab>
        <Tab>Renewable Energy</Tab>
      </Tabs.ButtonsList>
      <Tabs.ContentList>
        <div className="error container">
          <span className="h3">Failed to load posts.</span>
          <button
            className="button button--accent"
            type="button"
            onClick={resetErrorBoundary}
          >
            Try again
          </button>
        </div>
      </Tabs.ContentList>
    </Tabs>
  );
}
