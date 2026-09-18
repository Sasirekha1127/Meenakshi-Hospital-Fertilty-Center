"use client";

import { useState, useEffect } from "react";
import { FaPalette } from "react-icons/fa";

const COLOR_OPTIONS = [
  { name: "default", hex: "#009890" }, // MHFC Brand Teal
  { name: "orange", hex: "#74A135" },  // MHFC Brand Green
  { name: "violet", hex: "#007670" },  // Deep Teal
  { name: "crimson", hex: "#0C3E3A" }, // Forest Dark Teal
  { name: "pink", hex: "#8EC443" },    // Fresh Lime Green
];

export default function SwitcherMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState<string>("default");

  useEffect(() => {
    const saved = localStorage.getItem("themeColor");
    if (saved && saved !== "default") {
      if (!["default", "orange", "violet", "crimson", "pink"].includes(saved)) {
        localStorage.removeItem("themeColor");
        setActiveColor("default");
      } else {
        setActiveColor(saved);
        applyColor(saved);
      }
    }
  }, []);

  const applyColor = (color: string) => {
    let linkEl = document.getElementById("theme-color") as HTMLLinkElement;

    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.id = "theme-color";
      document.head.appendChild(linkEl);
    }

    linkEl.href =
      color === "default" ? "" : `/assets/css/color/${color}.css`;

    setActiveColor(color);
    localStorage.setItem("themeColor", color);
  };

  return (
    <div className="color-style-plate p_relative">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="color-toggle-btn"
      >
        <FaPalette size={20} />
      </button>

      {/* Color plate */}
      {isOpen && (
        <div className="color-plate-box">
          <p className="">Choose Color</p>
          <div className="color-list">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c.name}
                onClick={() => applyColor(c.name)}
                className={` ${
                  activeColor === c.name
                    ? "ring-2 ring-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
