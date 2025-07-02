import { BlogCard } from "@/entities/blog-card";
import { TBlogCard } from "@/shared/types/blogCard";
import { List, Tabs } from "@/shared/ui";

export async function TabsSection() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogCards`
  );

  const blogCards = (await response.json()) as TBlogCard[];

  return (
    <Tabs>
      <h3 className="visually-hidden" id="blog-category-title">
        Blog category
      </h3>
      <Tabs.ButtonsList ariaLabelledBy="blog-category-title">
        <Tabs.Tab>All</Tabs.Tab>
        <Tabs.Tab>Quantum Computing</Tabs.Tab>
        <Tabs.Tab>AI Ethics</Tabs.Tab>
        <Tabs.Tab>Space Exploration</Tabs.Tab>
        <Tabs.Tab>Biotechnology</Tabs.Tab>
        <Tabs.Tab>Renewable Energy</Tabs.Tab>
      </Tabs.ButtonsList>

      <Tabs.ContentList>
        <Tabs.Content>
          <List data={blogCards} Component={BlogCard} />
        </Tabs.Content>
      </Tabs.ContentList>
    </Tabs>
  );
}
