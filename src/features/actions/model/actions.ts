"use server";

import { getLikes, patchLikes } from "@/shared/api/api";
import { revalidatePath } from "next/cache";

type Props = {
  id: string;
  pathName: string;
};

export async function addLike({ id, pathName }: Props) {
  try {
    const { likesCount, isLike } = await getLikes(id, pathName);

    await patchLikes(id, pathName, {
      likes: !isLike ? likesCount + 1 : likesCount - 1,
      isLike: !isLike,
    });

    revalidatePath(pathName);
  } catch (error) {
    //как обрабатывать ошибку с лайком(её не должно быть видно пользлвателю) логировать?
    console.log(
      error instanceof Error ? error.message : "Unknow error occured"
    );
  }
}
