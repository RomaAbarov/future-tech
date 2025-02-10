import { Metadata } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NewsSection } from "@/widgets/news-section";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News",
};

export default function page() {
  return (
    <main>
      <section className="hero-alt" aria-labelledby="news-title">
        <header className="hero-alt__header">
          <div className="hero-alt__header-inner container">
            <h1 className="hero-alt__title" id="news-title">
              Today's Headlines: Stay
              <span className="hero-alt__title-hidden-part">Informed</span>
            </h1>
            <p
              className="hero-alt__subtitle h1 hidden-mobile"
              aria-hidden="true"
            >
              Informed
            </p>
            <p className="hero-alt__description">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </header>
        <div className="hero-alt__body">
          <ErrorBoundary
            fallback={<p className="h3 container">Failed to load news.</p>}
          >
            <Suspense fallback={<p className="h3 container">Loading...</p>}>
              <NewsSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </main>
  );
}
