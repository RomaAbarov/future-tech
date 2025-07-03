import { Tabs as TabsComponent } from "./Tabs";
import { Tab, Content, TabButtonsList, TabContentList } from "./tab/Tab";

export const Tabs = Object.assign(TabsComponent, {
  ButtonsList: TabButtonsList,
  ContentList: TabContentList,
  Tab: Tab,
  Content: Content,
});

export { TabsButton } from "./tabs-button/TabsButton";
