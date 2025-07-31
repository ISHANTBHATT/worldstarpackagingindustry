"use client";

import React from "react";

// Helper for dynamic inline styles (CSS var)
function styleVars(vars) {
  // vars = { width: '100px', height: '50px', quantity: 10}
  return Object.entries(vars)
    .map(([k, v]) => `--${k}: ${v};`)
    .join(" ");
}

export default function Slider() {
  // List of images for slider 1 and slider 2
  const slider1 = Array.from(
    { length: 9 },
    (_, i) => `/images/s1_${i + 1}.png`
  );
  const slider2 = Array.from(
    { length: 9 },
    (_, i) => `/images/s1_${i + 1}.png`
  );

  return (
    <main className="max-w-full w-[90vw] mx-auto">
      {/* SLIDER 1 */}
      <div
        className="slider w-full overflow-hidden"
        style={{
          ...varsToStyle({ width: "100px", height: "100px", quantity: 10 }),
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          height: "100px",
        }}
      >
        <div
          className="list flex w-full relative"
          style={{ minWidth: `calc(100px * 10)` }}
        >
          {slider1.map((src, idx) => (
            <div
              key={src}
              className="item absolute left-[100%] transition-all duration-500"
              style={{
                ...varsToStyle({ position: idx + 1 }),
                width: "100px",
                height: "100px",
                animation: `autoRun 10s linear infinite`,
                animationDelay: `calc((10s / 10) * ${idx} - 10s)`,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      {/* <div className="h-10" /> */}

      {/* SLIDER 2 */}
      {/* <div
        className="slider w-full overflow-hidden"
        reverse="true"
        style={{
          ...varsToStyle({ width: "200px", height: "200px", quantity: 9 }),
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          height: "200px",
        }}
      >
        <div
          className="list flex w-full relative"
          style={{ minWidth: `calc(200px * 9)` }}
        >
          {slider2.map((src, idx) => (
            <div
              key={src}
              className="item absolute left-[100%] transition-all duration-500"
              style={{
                ...varsToStyle({ position: idx + 1 }),
                width: "200px",
                height: "200px",
                animation: `reversePlay 10s linear infinite`,
                animationDelay: `calc((10s / 9) * ${idx} - 10s)`,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div> */}
      {/* Custom CSS below rendered inline (or see step 2) */}
      <SliderCss />
    </main>
  );
}

// Helper: turn {width, height, ...} into a style object with --var keys for inline style
function varsToStyle(vars) {
  const style = {};
  for (const key in vars) {
    style[`--${key}`] = String(vars[key]);
  }
  return style;
}

// Because Tailwind can't help with keyframes for vars, we inline scoping keyframes here:
function SliderCss() {
  return (
    <style jsx>
      {`
        body {
          margin: 0;
          background-color: #e5e5e5;
        }
        /* Scope these only to our slider class to avoid global conflicts. */
        .slider .item {
          /* Animation with play state paused on parent hover, grayscale on hover */
          transition: filter 0.5s;
        }
        .slider:hover .item {
          animation-play-state: paused !important;
          filter: grayscale(1);
        }
        .slider .item:hover {
          filter: grayscale(0);
        }
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--width) * -1);
          }
        }
        @keyframes reversePlay {
          from {
            left: calc(var(--width) * -1);
          }
          to {
            left: 100%;
          }
        }
      `}
    </style>
  );
}
