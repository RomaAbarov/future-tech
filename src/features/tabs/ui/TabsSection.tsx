import { BlogCard } from "@/entities/blog-card";
import { List, Tabs } from "@/shared/ui";
import { useBlogCards } from "../api/useBlogCards";

export async function TabsSection() {
  const blogCards = await useBlogCards();

  return (
    <Tabs>
      <header className="tabs__header">
        <h3 className="visually-hidden" id="blog-category-title">
          Blog category
        </h3>
        <Tabs.ButtonsList
          className="container"
          ariaLabelledBy="blog-category-title"
        >
          <Tabs.Tab>All</Tabs.Tab>
          <Tabs.Tab>Quantum Computing</Tabs.Tab>
          <Tabs.Tab>AI Ethics</Tabs.Tab>
          <Tabs.Tab>Space Exploration</Tabs.Tab>
          <Tabs.Tab>Biotechnology</Tabs.Tab>
          <Tabs.Tab>Renewable Energy</Tabs.Tab>
        </Tabs.ButtonsList>
      </header>

      <Tabs.ContentList>
        <Tabs.Content>
          <List data={blogCards} Component={BlogCard} />
        </Tabs.Content>
      </Tabs.ContentList>
    </Tabs>
  );
}
