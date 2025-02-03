"use client";

import Script from "next/script";

export default function Scripts() {
  if (typeof window !== "undefined") {
    return (
      <Script id="script-1">{`document.documentElement.style.setProperty("--scrollbar-width", "${
        window.innerWidth - document.documentElement.clientWidth
      }px");`}</Script>
    );
  }

  return null;
}
