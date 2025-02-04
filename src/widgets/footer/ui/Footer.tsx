import Link from "next/link";
import { Socials } from "@/shared/ui";
import "./Footer.scss";

const footerLinks = [
  {
    title: "Home",
    links: [
      "Features",
      "Blogs",
      "Resources",
      "Testimonials",
      "Contact Us",
      "Newsletter",
    ],
    new: ["Resources"],
  },
  {
    title: "News",
    links: [
      "Trending Stories",
      "Featured Videos",
      "Technology",
      "Health",
      "Politics",
      "Environment",
    ],
  },
  {
    title: "Blogs",
    links: [
      "Quantum Computing",
      "AI Ethics",
      "Space Exploration",
      "Biotechnology",
      "Renewable Energy",
      "Biohacking",
    ],
    new: ["Biotechnology"],
  },
  {
    title: "Podcasts",
    links: [
      "AI Revolution",
      "AI Revolution",
      "TechTalk AI",
      "AI Conversations",
    ],
    new: ["AI Revolution"],
  },
  {
    title: "Resources",
    links: ["Whitepapers", "Ebooks", "Reports", "Research Papers"],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <nav className="footer__menu">
            {footerLinks.map((link) => (
              <div key={link.title} className="footer__menu-column">
                <Link href="#" className="footer__menu-main-link h6">
                  {link.title}
                </Link>
                <ul className="footer__menu-list">
                  {link.links.map((el, index) => (
                    <li key={index} className="footer__menu-item">
                      {link.title === "Resources" ? (
                        <Link href="#" className="footer__menu-link button">
                          <span className="icon icon--yellow-arrow">{el}</span>
                        </Link>
                      ) : (
                        <Link href="#" className="footer__menu-link">
                          {el}
                        </Link>
                      )}

                      {link.new?.some((l) => l === el) && (
                        <span className="badge">New</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__extra">
          <div className="footer__extra-menu">
            <ul className="footer__extra-menu-list">
              <li className="footer__extra-menu-item">
                <Link href="#" className="footer__extra-menu-link">
                  Terms & Conditions
                </Link>
              </li>
              <li className="footer__extra-menu-item">
                <Link href="#" className="footer__extra-menu-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__extra-soc1als soc1als">
            <Socials />
          </div>
          <p className="footer__copyright">
            © <time dateTime="2024">2024</time> FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
