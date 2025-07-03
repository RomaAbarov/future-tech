import { TActions } from "@/shared/types/TActions";
import { getUrl } from "../utils/getUrl";

export async function getLikes(id: string, pathName: string) {
  try {
    const url = getUrl(id, pathName);

    const response = await fetch(url!);
    const data = (await response.json()) as TActions;

    return { likesCount: data.likes, isLike: data.isLike };
  } catch (error) {
    throw new Error("Не удалось получить кол-во лайков");
  }
}
