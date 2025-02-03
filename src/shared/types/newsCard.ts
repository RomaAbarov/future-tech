import { TSummary } from "./summary";
import { TActions } from "./TActions";

export type TNewsCard = {
  id: string;
  srcIcon: string;
  title: string;
  link: string;
  labelLink: string;
} & TActions &
  Partial<TSummary>;
