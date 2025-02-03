"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function error({ error, reset }: Props) {
  return (
    <main>
      <section className="container">
        <div className="error">
          <span className="h3">Failed to load blog.</span>
          <button
            className="button button--accent"
            type="button"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
