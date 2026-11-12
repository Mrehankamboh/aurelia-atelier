"use client";

import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    setTheme(currentTheme());
  }, []);

  const choose = (next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("aurelia-theme", next);
    setTheme(next);
  };

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="flex items-center rounded-full border border-stone-line bg-stone-page/80 p-0.5"
    >
      {(["light", "dark"] as const).map((value) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => choose(value)}
            className={`rounded-full px-2.5 py-1 text-[11px] tracking-[0.14em] uppercase transition duration-200 ${
              active ? "bg-ink text-stone-page" : "text-ink-soft hover:text-ink"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
