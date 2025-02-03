"use client";

import { FallbackProps } from "react-error-boundary";
import { Tab, TabButtonsList, TabContentList, Tabs } from "@/shared/ui";

export function ErrorTabSection({ resetErrorBoundary }: FallbackProps) {
  return (
    <Tabs ariaLabelledBy="blog-category-title">
      <TabButtonsList>
        <Tab>All</Tab>
        <Tab>Quantum Computing</Tab>
        <Tab>AI Ethics</Tab>
        <Tab>Space Exploration</Tab>
        <Tab>Biotechnology</Tab>
        <Tab>Renewable Energy</Tab>
      </TabButtonsList>
      <TabContentList>
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
      </TabContentList>
    </Tabs>
  );
}
