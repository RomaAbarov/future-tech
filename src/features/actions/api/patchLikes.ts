import { getUrl } from "../utils/getUrl";

export async function patchLikes(
  id: string,
  pathName: string,
  data: { likes: number; isLike: boolean }
) {
  const url = getUrl(id, pathName);

  return fetch(url!, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
