import Link from "next/link";

export default function notFound() {
  return (
    <main>
      <section className="container">
        <div className="error">
          <span className="h3">Not Found</span>
          <Link className="button" href="/">
            <span className="icon icon--yellow-arrow">Return Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
