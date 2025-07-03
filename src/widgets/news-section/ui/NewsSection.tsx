import { NewsCard } from "@/entities/news-card";
import { NewsList } from "@/shared/ui";
import { useNews } from "../api/useNews";
import "@/shared/ui/list/List.scss";

export async function NewsSection() {
  const news = await useNews();

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
