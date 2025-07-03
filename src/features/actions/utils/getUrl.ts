import { route } from "@/shared/router/routes";

export function getUrl(id: string, pathName: string) {
  let url;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  switch (pathName) {
    case route.Home:
      url = baseUrl + "/api/blogCards/" + id;
      break;
    case route.News:
      url = baseUrl + "/news/api/" + id;
      break;
    case `${route.Blog}/${id}`:
      url = baseUrl + `${route.Blog}/${id}/api`;
      break;
    default:
      //на странице блога можно лайкать и блог и новости
      //id новостей и блогов не должны никогда совпадать
      if (id !== pathName.split("/").at(-1)) {
        url = baseUrl + "/news/api/" + id;
      }
      break;
  }

  return url;
}
