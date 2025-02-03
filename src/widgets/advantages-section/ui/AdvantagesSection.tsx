import { AdvantageCard } from "@/entities/advantage-card";
import "./AdvantagesSection.scss";

const advantagesCards = [
  {
    id: "ce44",
    link: "#",
    srcIcon: "/images/advantages/icon-1.svg",
    title: "Latest News Updates",
    subtitle: "Stay Current",
    details: "Over 1,000 articles published monthly",
  },
  {
    id: "5a3a",
    link: "#",
    srcIcon: "/images/advantages/icon-2.svg",
    title: "Expert Contributors",
    subtitle: "Trusted Insights",
    details: "50+ renowned AI experts on our team",
  },
  {
    id: "9e75",
    link: "#",
    srcIcon: "/images/advantages/icon-3.svg",
    title: "Global Readership",
    subtitle: "Worldwide Impact",
    details: "2 million monthly readers",
  },
];

export function AdvantagesSection() {
  return (
    <div className="hero__advantages">
      <h2 className="visually-hidden">Our advantages</h2>
      <ul className="hero__advantages-list container">
        {advantagesCards.map((card) => (
          <li key={card.id} className="hero__advantages-item">
            <AdvantageCard {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
