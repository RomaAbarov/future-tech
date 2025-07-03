import { NewsCard } from "@/entities/news-card";
import { Actions } from "@/features/actions";
import { ExpandableContent } from "@/features/expandable-content";
import { Summary } from "@/features/summary";
import formatString from "@/shared/utils/formatString";
import ScrollToTop from "@/shared/utils/scrollToTop";
import { NewsList } from "@/shared/ui";
import { TBlogDetails } from "@/shared/types/blogDetails";
import { TNewsCard } from "@/shared/types/newsCard";
import "../blog.scss";

type Props = {
  blogDetails: TBlogDetails;
  news: TNewsCard[];
};

export function BlogPage({ blogDetails, news }: Props) {
  const background = `linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.88) 75.52%, #141414 100%), url(${blogDetails.srcBanner}) center/cover no-repeat`;

  return (
    <main>
      <ScrollToTop />
      <section className="blog-details" aria-labelledby="blog-details-title">
        <header className="blog-details__banner" style={{ background }}>
          <div className="blog-details__banner-inner container">
            <h1 className="blog-details__title" id="blog-details-title">
              {blogDetails.title}
            </h1>
          </div>
        </header>
        <div className="blog-details__body">
          <div className="blog-details__body-inner container">
            <div className="blog-details__content">
              <div className="blog-details__intro full-vw-line full-vw-line--bottom full-vw-line--left">
                <h2 className="h6">Introduction</h2>
                <p>{blogDetails.intro}</p>
              </div>
              <div className="blog-details__main">
                <ExpandableContent>
                  <h2 className="h4">{blogDetails.titleContentItem1}</h2>
                  {blogDetails.descriptionContentItem1 &&
                    formatString(blogDetails.descriptionContentItem1)}
                  <h2 className="h4">{blogDetails.titleContentItem2}</h2>
                  {blogDetails.descriptionContentItem2 &&
                    formatString(blogDetails.descriptionContentItem2)}
                </ExpandableContent>
              </div>
            </div>
            <div className="blog-details__info">
              <div className="blog-details__actions blog-actions full-vw-line full-vw-line--bottom full-vw-line--right">
                <Actions
                  id={blogDetails.id}
                  likes={blogDetails.likes}
                  isLike={blogDetails.isLike}
                  share={blogDetails.share}
                  discussions={blogDetails.discussions}
                />
              </div>
              <div className="blog-details__summary">
                <Summary
                  cols={2}
                  category={blogDetails.category}
                  author={blogDetails.author}
                  publicationDate={blogDetails.publicationDate}
                  readingTime={blogDetails.readingTime}
                />
                <div className="table">
                  <p className="table__title">Table of Contents</p>
                  <div className="table-of-contents">
                    <ul className="table-of-contents__list">
                      <li
                        key={blogDetails.titleContentItem1}
                        className="table-of-contents__item"
                      >
                        {blogDetails.titleContentItem1}
                      </li>
                      <li
                        key={blogDetails.titleContentItem2}
                        className="table-of-contents__item"
                      >
                        {blogDetails.titleContentItem2}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details__news container">
          <NewsList data={news} hasHeader Component={NewsCard} />
        </div>
      </section>
    </main>
  );
}
