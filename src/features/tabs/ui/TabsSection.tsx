import { List, Tab, TabButtonsList, Tabs } from "@/shared/ui";
import { Content, TabContentList } from "@/shared/ui/tab/Tab";
import { BlogCard } from "@/entities/blog-card";
import { TBlogCard } from "@/shared/types/blogCard";

export async function TabsSection() {
  const response = await fetch("http://localhost:3001/blogCards");
  const blogCards = (await response.json()) as TBlogCard[];

  return (
    //передавать 3 стиля в tabs???
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
        <Content>
          <List data={blogCards} Component={BlogCard} />
        </Content>
      </TabContentList>
    </Tabs>
  );
}
