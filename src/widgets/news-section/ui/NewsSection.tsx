import { NewsCard } from "@/entities/news-card";
import { TNewsCard } from "@/shared/types/newsCard";
import { NewsList } from "@/shared/ui";
import "@/shared/ui/list/List.scss";

export async function NewsSection() {
  const response = await fetch("http://localhost:3001/news");
  const news = (await response.json()) as TNewsCard[];

  return (
    <ul className="list">
      <li className="list__item">
        <div className="container">
          <NewsCard {...news[0]} />
        </div>
      </li>
      <li className="list__item">
        <div className="container">
          <NewsList data={news.slice(1)} Component={NewsCard} />
        </div>
      </li>
    </ul>
  );
}
