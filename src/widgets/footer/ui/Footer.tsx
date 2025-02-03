import Link from "next/link";
import { Socials } from "@/shared/ui";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <nav className="footer__menu">
            <div className="footer__menu-column">
              <Link href="/" className="footer__menu-main-link h6">
                Home
              </Link>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Features
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Blogs
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Resources
                  </Link>
                  <span className="badge">New</span>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Testimonials
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Contact Us
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu-column">
              <Link href="#" className="footer__menu-main-link h6">
                News
              </Link>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Trending Stories
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Featured Videos
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Technology
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Health
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Politics
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Environment
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu-column">
              <Link href="#" className="footer__menu-main-link h6">
                Blogs
              </Link>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Quantum Computing
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    AI Ethics
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Space Exploration
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Biotechnology
                  </Link>
                  <span className="badge">New</span>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Renewable Energy
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    Biohacking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu-column">
              <Link href="#" className="footer__menu-main-link h6">
                Podcasts
              </Link>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    AI Revolution
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    AI Revolution
                  </Link>
                  <span className="badge">New</span>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    TechTalk AI
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link">
                    AI Conversations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu-column">
              <Link href="#" className="footer__menu-main-link h6">
                Resources
              </Link>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link button">
                    <span className="icon icon--yellow-arrow">Whitepapers</span>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link button">
                    <span className="icon icon--yellow-arrow">Ebooks</span>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link button">
                    <span className="icon icon--yellow-arrow">Reports</span>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link href="#" className="footer__menu-link button">
                    <span className="icon icon--yellow-arrow">
                      Research Papers
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
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
