"use client";

import { usePathname } from "next/navigation";
import { startTransition, useOptimistic } from "react";
import clsx from "clsx";
import { TActions } from "@/shared/types/TActions";
import { Icon } from "@/features/icon";
import { addLike } from "../model/actions";
import { formatLikes } from "@/shared/lib/formatLikes";
import "./Actions.scss";

export function Actions({ id, likes, discussions, isLike, share }: TActions) {
  const pathName = usePathname();
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    {
      isLike,
      likesCount: likes,
    },
    (prevState, _) => ({
      likesCount: !prevState.isLike
        ? prevState.likesCount + 1
        : prevState.likesCount - 1,
      isLike: !prevState.isLike,
    })
  );

  async function onClick() {
    startTransition(async () => {
      addOptimisticLikes(null);
      await addLike({ id, pathName });
    });
  }

  return (
    <ul className="blog-actions__list">
      <li className="blog-actions__item">
        <button
          className={clsx(
            "blog-actions__button",
            optimisticLikes.isLike && "is-active"
          )}
          type="button"
          aria-label={optimisticLikes.isLike ? "dislike" : "like"}
          title={optimisticLikes.isLike ? "dislike" : "like"}
          onClick={onClick}
        >
          <span className="blog-actions__icon-wrapper">
            <Icon name="like" />
          </span>
          <span>{formatLikes(optimisticLikes.likesCount)}</span>
        </button>
      </li>
      {discussions && (
        <li className="blog-actions__item">
          <button
            className="blog-actions__button"
            type="button"
            aria-label="discuss"
            title="discuss"
          >
            <span className="blog-actions__icon-wrapper">
              <Icon name="discuss" />
            </span>
            <span>{discussions}</span>
          </button>
        </li>
      )}

      <li className="blog-actions__item">
        <button
          className="blog-actions__button"
          type="button"
          aria-label="share"
          title="share"
        >
          <span className="blog-actions__icon-wrapper">
            <Icon name="share" />
          </span>
          <span>{share}</span>
        </button>
      </li>
    </ul>
  );
}
