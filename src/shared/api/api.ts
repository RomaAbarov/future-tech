import { TMessageFormData } from "@/features/feedback-form/model/types";
import { TActions } from "../types/TActions";
import { TBlogDetails } from "../types/blogDetails";
import { TNewsCard } from "../types/newsCard";
import { route } from "../router/routes";
import { notFound } from "next/navigation";

function getUrl(id: string, pathName: string) {
  let url;

  switch (pathName) {
    case route.Home:
      url = "http://localhost:3001/blogCards/";
      break;
    case route.News:
      url = "http://localhost:3001/news/";
      break;
    case `${route.Blog}/${id}`:
      url = "http://localhost:3001/blogDetails/";
      break;
    default:
      //на странице блога можно лайкать и блог и новости
      //id новостей и блогов не должны никогда совпадать
      if (id !== pathName.split("/").at(-1)) {
        url = "http://localhost:3001/news/";
      }
      break;
  }

  return url;
}

export async function getLikes(id: string, pathName: string) {
  try {
    const url = getUrl(id, pathName);

    const response = await fetch(url + id);
    const data = (await response.json()) as TActions;

    return { likesCount: data.likes, isLike: data.isLike };
  } catch (error) {
    throw new Error("Не удалось получить кол-во лайков");
  }
}

export async function patchLikes(
  id: string,
  pathName: string,
  data: { likes: number; isLike: boolean }
) {
  const url = getUrl(id, pathName);

  return fetch(url + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function createMessage(data: TMessageFormData) {
  return fetch("http://localhost:3001/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function getBlogById(id: string): Promise<TBlogDetails> {
  const response = await fetch("http://localhost:3001/blogDetails/" + id);

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export async function getSimilarNews(limit?: number): Promise<TNewsCard[]> {
  const response = await fetch("http://localhost:3001/news?_limit=" + limit);
  const news = (await response.json()) as TNewsCard[];

  return news.map((n) => ({
    id: n.id,
    srcIcon: n.srcIcon,
    title: n.title,
    category: n.category,
    link: n.link,
    labelLink: n.labelLink,
    likes: n.likes,
    isLike: n.isLike,
    share: n.share,
  }));
}
