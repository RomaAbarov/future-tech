import { ReportCard } from "@/entities/report-card";
import { BorderedGrid, Tabs } from "@/shared/ui";
import "./ReportsSection.scss";

const reportCards = [
  {
    id: "1",
    srcImg: "/images/reports/card-1.jpg",
    title: "FutureTech Trends 2024",
    description:
      "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    link: "#",
    downloadPdfLink: "#",
  },
  {
    id: "2",
    srcImg: "/images/reports/card-2.jpg",
    title: "Space Exploration Ebook",
    description:
      "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    link: "#",
    downloadPdfLink: "#",
  },
  {
    id: "3",
    srcImg: "/images/reports/card-3.jpg",
    title: "Quantum Computing Whitepaper",
    description:
      "An in-depth whitepaper exploring the principles, applications.",
    link: "#",
    downloadPdfLink: "#",
  },
];

export function ReportsSection() {
  return (
    <section className="section" aria-labelledby="reports-title">
      <Tabs>
        <header className="section__header">
          <div className="section__header-inner container">
            <div className="section__header-info">
              <p className="section__subtitle tag">Dive into the Details</p>
              <h2 className="section__title" id="reports-title">
                In-Depth Reports and Analysis
              </h2>
            </div>
            <div className="section__actions">
              <Tabs.ButtonsList
                className="tabs__buttons--compact"
                ariaLabelledBy="reports-title"
              >
                <Tabs.Tab>Whitepapers</Tabs.Tab>
                <Tabs.Tab>Ebooks</Tabs.Tab>
                <Tabs.Tab>Reports</Tabs.Tab>
              </Tabs.ButtonsList>
            </div>
          </div>
        </header>
        <div className="section__body">
          <Tabs.ContentList>
            <Tabs.Content>
              <BorderedGrid
                cols={3}
                data={reportCards}
                Component={ReportCard}
                className="container"
              />
            </Tabs.Content>
          </Tabs.ContentList>
        </div>
      </Tabs>
    </section>
  );
}
