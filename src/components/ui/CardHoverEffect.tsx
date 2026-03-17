import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export type HoverItem = {
  numero: string;
  titulo: string;
  descripcion: string;
  iconSvg: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block"
                style={{ backgroundColor: "rgba(27,42,74,0.8)", borderRadius: "4px" }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div
            className="relative z-20 h-full w-full overflow-hidden"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: idx % 2 === 0 ? "#111827" : "#1a2744",
              border: "1px solid rgba(107,114,128,0.2)",
              borderRadius: "4px",
              transition: "border-color 0.2s",
            }}
          >
            {/* Número de fondo */}
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.5rem",
                fontSize: "4rem",
                fontWeight: 900,
                color: "rgba(27,42,74,0.6)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {item.numero}
            </span>

            {/* Icono */}
            <div
              style={{ marginBottom: "1.25rem" }}
              dangerouslySetInnerHTML={{ __html: item.iconSvg }}
            />

            {/* Título */}
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#F9FAFB",
                marginBottom: "0.75rem",
              }}
            >
              {item.titulo}
            </h3>

            {/* Descripción */}
            <p style={{ color: "#9CA3AF", fontSize: "0.9rem", lineHeight: 1.7 }}>
              {item.descripcion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
