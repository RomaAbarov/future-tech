import Link from "next/link";
import { Suspense } from "react";
import { Metrics } from "@/features/metrics";
import { Team } from "@/shared/ui";
import { ErrorTabSection, TabsSection } from "@/features/tabs";
import { ErrorBoundary } from "react-error-boundary";
import { Reviews } from "@/features/reviews";
import { AdvantagesSection } from "@/widgets/advantages-section";
import "./hero";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main container">
          <div className="hero__body">
            <p className="hero__subtitle">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="hero__title" id="hero-title">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <div className="hero__description">
              <p>
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>

          <div className="hero__metrics">
            <Metrics className="full-vw-line full-vw-line--top full-vw-line--left" />
          </div>

          <div className="hero__resources-preview resources-preview">
            <div className="resources-preview__team">
              <Team />
            </div>
            <div className="resources-preview__body">
              <p className="resources-preview__title h5">
                Explore 1000+ resources
              </p>
              <p className="resources-preview__subtitle">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
            <Link href="#" className="resources-preview__button button">
              <span className="icon icon--yellow-arrow">Explore Resources</span>
            </Link>
          </div>
        </div>

        <AdvantagesSection />
      </section>

      <section className="section" aria-labelledby="blog-title">
        <header className="section__header">
          <div className="section__header-inner container">
            <div className="section__header-info">
              <p className="section__subtitle tag">
                A Knowledge Treasure Trove
              </p>
              <h2 className="section__title" id="blog-title">
                Explore FutureTech's In-Depth Blog Posts
              </h2>
            </div>
            <div className="section__actions">
              <Link href="#" className="section__link button">
                <span className="icon icon--yellow-arrow">View All Blogs</span>
              </Link>
            </div>
          </div>
        </header>
        <div className="section__body tabs">
          <ErrorBoundary FallbackComponent={ErrorTabSection}>
            <Suspense fallback={<p className="h3">Loading...</p>}>
              <TabsSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      <section className="section" aria-labelledby="reviews-title">
        <header className="section__header">
          <div className="section__header-inner container">
            <div className="section__header-info">
              <p className="section__subtitle tag">What Our Readers Say</p>
              <h2 className="section__title" id="reviews-title">
                Real Words from Real Readers
              </h2>
            </div>
            <div className="section__actions">
              <Link href="#" className="section__link button">
                <span className="icon icon--yellow-arrow">
                  View All Testimonials
                </span>
              </Link>
            </div>
          </div>
        </header>
        <div className="section__body">
          <div className="container">
            <ErrorBoundary
              fallback={
                <p className="h3">
                  Failed to load reviews. Try reloading the page.
                </p>
              }
            >
              <Suspense fallback={<p className="h3">Loading...</p>}>
                <Reviews />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </main>
  );
}
