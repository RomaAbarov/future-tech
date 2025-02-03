import { Metadata } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Card } from "@/entities/card";
import { PodcastVideosSection } from "@/widgets/podcast-videos-section";
import { Video } from "@/features/video";
import "@/shared/ui/list/List.scss";

export const metadata: Metadata = {
  title: "Podcasts",
};

const cardData = [
  {
    srcIcon: "./images/podcasts/icon-1.svg",
    title: "AI Revolution",
    rating: 5,
    extraSubtitle: "Host",
    extraDescription: "Dr. Sarah Mitchell",
    extraLink: "#",
    extraLinkLabel: "Listen Podcast",
  },
  {
    srcIcon: "./images/podcasts/icon-2.svg",
    title: "AI Conversations",
    rating: 5,
    extraSubtitle: "Host",
    extraDescription: "Mark Anderson",
    extraLink: "#",
    extraLinkLabel: "Listen Podcast",
  },
];

export default function page() {
  return (
    <main>
      <section className="hero-alt" aria-labelledby="podacats-title">
        <header className="hero-alt__header">
          <div className="hero-alt__header-inner container">
            <h1 className="hero-alt__title" id="podacats-title">
              Unlock the World of Artificial Intelligence
              <span className="hero-alt__title-hidden-part">
                through Podcasts
              </span>
            </h1>
            <p
              className="hero-alt__subtitle h1 hidden-mobile"
              aria-hidden="true"
            >
              through Podcasts
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
          <ul className="list">
            <li className="list__item">
              <Card data={cardData[0]} titleSize="h2">
                <div className="card__grid card__grid--3-cols">
                  <div className="card__cell card__cell--wide">
                    <ErrorBoundary
                      fallback={<p className="h3">Failed to load video.</p>}
                    >
                      <Suspense fallback={<h1>Loading video...</h1>}>
                        <Video />
                      </Suspense>
                    </ErrorBoundary>
                  </div>
                  <div className="card__cell card__cell--wide">
                    <h3 className="card__cell-title h4">
                      Delves into the transformative impact of AI
                    </h3>
                    <p className="card__cell-description">
                      Join Dr. Sarah Mitchell as she delves into the
                      transformative impact of AI on industries, featuring
                      expert interviews and real-world case studies. Explore the
                      possibilities of AI in healthcare, finance, and more.
                    </p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Total Episodes</p>
                    <p className="card__cell-description h6">50</p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Average Episode Length</p>
                    <p className="card__cell-description h6">30 min</p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Release Frequency</p>
                    <p className="card__cell-description h6">Weekly</p>
                  </div>
                </div>
              </Card>
            </li>
            <li className="list__item">
              <Card data={cardData[1]} titleSize="h2">
                <div className="card__grid card__grid--3-cols">
                  <div className="card__cell card__cell--wide">
                    <ErrorBoundary
                      fallback={<p className="h3">Failed to load video.</p>}
                    >
                      <Suspense fallback={<h1>Loading video...</h1>}>
                        <Video />
                      </Suspense>
                    </ErrorBoundary>
                  </div>
                  <div className="card__cell card__cell--wide">
                    <h3 className="card__cell-title h4">
                      Engage in thought-provoking conversations with leading
                      experts.
                    </h3>
                    <p className="card__cell-description">
                      Mark discusses the future of AI, the impact on society,
                      and how it's shaping industries worldwide. Engage in
                      thought-provoking conversations with leading experts.
                    </p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Total Episodes</p>
                    <p className="card__cell-description h6">40</p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Average Episode Length</p>
                    <p className="card__cell-description h6">40 min</p>
                  </div>
                  <div className="card__cell tile">
                    <p className="card__cell-title">Release Frequency</p>
                    <p className="card__cell-description h6">Monthly</p>
                  </div>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="podcasts-videos-title">
        <header className="section__header">
          <div className="section__header-inner container">
            <div className="section__header-info">
              <p className="section__subtitle tag">
                Stay Informed with Fresh Content
              </p>
              <h2 className="section__title" id="podcasts-videos-title">
                Latest Podcast Episodes
              </h2>
            </div>
          </div>
        </header>
        <div className="section__body">
          <ErrorBoundary
            fallback={<p className="h3 container">Failed to load video.</p>}
          >
            <Suspense fallback={<h1>Loading video...</h1>}>
              <PodcastVideosSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </main>
  );
}
