import { NewsCard } from "@/entities/news-card";
import { TNewsCard } from "@/shared/types/newsCard";
import { NewsList } from "@/shared/ui";
import "@/shared/ui/list/List.scss";

export async function NewsSection() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/api`);
  const news = (await response.json()) as TNewsCard[];

  return (
    <ul className="list">
      <li className="list__item">
        <NewsCard className="container" {...news[0]} />
      </li>
      <li className="list__item">
        <NewsList
          data={news.slice(1)}
          Component={NewsCard}
          className="container"
        />
      </li>
    </ul>
  );
}
