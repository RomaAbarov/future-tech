import { TActions } from "./TActions";

export type TBlogCard = {
  id: string;
  image: string;
  name: string;
  department: string;
  postDate: string;
  title: string;
  description: string;
} & TActions;
