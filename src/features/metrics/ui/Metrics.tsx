import clsx from "clsx";
import "./Metrics.scss";

type Props = {
  className?: string;
  cols?: 3 | 4;
};

export function Metrics({ className, cols }: Props) {
  return (
    <div
      className={clsx(
        "metrics",
        { [`metrics--${cols}-cols`]: cols },
        className
      )}
    >
      <dl className="metrics__list">
        <div className="metrics__item">
          <dt className="metrics__key">Resources available</dt>
          <dd className="metrics__value h3">
            300<span className="metrics__sign">+</span>
          </dd>
        </div>
        <div className="metrics__item">
          <dt className="metrics__key">Total Downloads</dt>
          <dd className="metrics__value h3">
            12k<span className="metrics__sign">+</span>
          </dd>
        </div>
        <div className="metrics__item">
          <dt className="metrics__key">Active Users</dt>
          <dd className="metrics__value h3">
            10k<span className="metrics__sign">+</span>
          </dd>
        </div>
        {cols === 4 && (
          <div className="metrics__item">
            <dt className="metrics__key">Countries Accesses Our Content</dt>
            <dd className="metrics__value h2">
              100<span className="metrics__sign">+</span>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
