"use client";

import { useEffect } from "react";

export default function RefreshMotion() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        root.classList.add("is-booted");
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("is-booted");
    };
  }, []);

  return (
    <div className="refresh-split" aria-hidden="true">
      <span className="refresh-panel refresh-panel-left" />
      <span className="refresh-panel refresh-panel-right" />
    </div>
  );
}
