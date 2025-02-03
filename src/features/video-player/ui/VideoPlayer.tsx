"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import PlaySvg from "/public/icons/play.svg";
import "./VideoPlayer.scss";

type Props = {
  src: string;
  poster: string;
  width: string;
  height: string;
  className?: string;
  positionPanel?: "center" | "left-bottom";
  videoDuration?: string;
};

export function VideoPlayer({
  src,
  poster,
  width,
  height,
  className,
  positionPanel,
  videoDuration,
}: Props) {
  const [isActive, setIsActive] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function onPlay() {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      setIsActive(false);
    }
  }

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        className={clsx("video-player__video", className)}
        width={width}
        height={height}
        poster={poster}
      ></video>
      <div
        className={clsx("video-player__panel", {
          "video-player__panel--center": positionPanel === "center",
          "is-active": isActive,
        })}
      >
        <button
          className="video-player__play-button"
          type="button"
          aria-label="play video"
          title="play video"
          onClick={onPlay}
        >
          <PlaySvg viewBox="0 0 57 58" />
        </button>
        {videoDuration && (
          <div className="video-player__duration">{videoDuration}</div>
        )}
      </div>
    </div>
  );
}
