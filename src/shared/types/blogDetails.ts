import { TSummary } from "./summary";
import { TActions } from "./TActions";

export type TBlogDetails = {
  id: string;
  srcBanner: string;
  title: string;
  description: string;
  intro?: string;
  titleContentItem1?: string;
  descriptionContentItem1?: string;
  titleContentItem2?: string;
  descriptionContentItem2?: string;
} & TActions &
  TSummary;
