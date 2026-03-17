import React from "react";
import { FlipWords } from "./ui/FlipWords";

const FLIP_WORDS = [
  "Mayor y Menor",
  "Amplio Catálogo",
  "Envíos Nacionales",
  "Precios Competitivos",
];

export default function HeroInteractive() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#F9FAFB",
          letterSpacing: "-0.03em",
        }}
      >
        Clavos y Alambres
        <br />
        <span
          style={{
            color: "#D97706",
            display: "inline-block",
            minWidth: "12ch",
            position: "relative",
          }}
        >
          <FlipWords words={FLIP_WORDS} duration={2800} />
        </span>
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
          color: "#9CA3AF",
          maxWidth: "600px",
          lineHeight: 1.6,
          fontWeight: 500,
        }}
      >
        Distribuidora de Rosario con amplio catálogo, precios competitivos
        y envíos a todo el país. Vendemos al por mayor y al por menor.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
        <a href="#contacto" className="btn-accent btn-accent--glow" style={{ fontSize: "1.05rem", padding: "0.85rem 2.5rem" }}>
          Consultá precio y stock
        </a>
        <a href="#productos" className="btn-outline" style={{ fontSize: "1.05rem", padding: "0.85rem 2.5rem" }}>
          Ver Productos
        </a>
      </div>
    </div>
  );
}
