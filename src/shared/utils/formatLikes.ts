export function formatLikes(likes: number) {
  let str = "";

  if (likes < 1000) {
    str = likes + "";
  } else {
    str = Math.trunc(likes / 1000) + "k";
  }

  return str;
}
