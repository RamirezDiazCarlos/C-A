import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { MovingBorderButton } from "./ui/MovingBorder";

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

      {/* CTAs con MovingBorder */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
        <MovingBorderButton
          as="a"
          href="#contacto"
          duration={2500}
          containerClassName="h-14"
          borderClassName="bg-[radial-gradient(#D97706_40%,transparent_60%)]"
          className="px-10 py-0 font-bold text-base uppercase tracking-widest"
          style={{
            backgroundColor: "#D97706",
            color: "#fff",
            border: "3px solid #D97706",
            fontSize: "1.05rem",
            padding: "0 2.5rem",
            height: "100%",
          }}
        >
          Consultá precio y stock
        </MovingBorderButton>

        <MovingBorderButton
          as="a"
          href="#productos"
          duration={3500}
          containerClassName="h-14"
          borderClassName="bg-[radial-gradient(#6B7280_40%,transparent_60%)]"
          className="px-10 py-0 font-bold text-base uppercase tracking-widest"
          style={{
            backgroundColor: "transparent",
            color: "#D97706",
            border: "3px solid #D97706",
            fontSize: "1.05rem",
            padding: "0 2.5rem",
            height: "100%",
          }}
        >
          Ver Productos
        </MovingBorderButton>
      </div>
    </div>
  );
}
