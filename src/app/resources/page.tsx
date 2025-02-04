import { Metadata } from "next";
import { ReportsSection } from "@/features/reports-section";
import { Metrics } from "@/features/metrics";

export const metadata: Metadata = {
  title: "Resources",
};

export default function page() {
  return (
    <main>
      <section className="hero-alt" aria-labelledby="resources-title">
        <header className="hero-alt__header">
          <div className="hero-alt__header-inner container">
            <h1 className="hero-alt__title" id="resources-title">
              Unlock a World of
              <span className="hero-alt__title-hidden-part">Knowledge</span>
            </h1>
            <p
              className="hero-alt__subtitle h1 hidden-mobile"
              aria-hidden="true"
            >
              Knowledge
            </p>
            <p className="hero-alt__description">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you're an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </header>
        <div className="hero-alt__body">
          <Metrics cols={4} className="container" />
        </div>
      </section>

      <ReportsSection />
    </main>
  );
}
