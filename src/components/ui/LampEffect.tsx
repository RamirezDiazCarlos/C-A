"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AMBER = "#D97706";
const BG = "#0F172A";

/**
 * LampHeading — glow de lámpara decorativo sobre un bloque de texto.
 * Funciona en flujo normal: no usa posicionamiento absoluto extremo.
 */
export const LampHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative flex flex-col items-center w-full overflow-hidden", className)}
      style={{ backgroundColor: BG }}
    >
      {/* Conos de luz */}
      <div className="relative flex w-full items-end justify-center" style={{ height: "8rem" }}>
        {/* Cono izquierdo */}
        <motion.div
          initial={{ opacity: 0.2, width: "6rem" }}
          whileInView={{ opacity: 1, width: "18rem" }}
          transition={{ delay: 0.1, duration: 0.9, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/2 overflow-hidden"
          style={{
            height: "8rem",
            backgroundImage: `conic-gradient(from 70deg at center top, ${AMBER}, transparent 40%)`,
            maskImage: "linear-gradient(to bottom, transparent 0%, white 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 60%)",
          }}
        />
        {/* Cono derecho */}
        <motion.div
          initial={{ opacity: 0.2, width: "6rem" }}
          whileInView={{ opacity: 1, width: "18rem" }}
          transition={{ delay: 0.1, duration: 0.9, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 overflow-hidden"
          style={{
            height: "8rem",
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 60%, ${AMBER})`,
            maskImage: "linear-gradient(to bottom, transparent 0%, white 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 60%)",
          }}
        />
        {/* Glow central difuso */}
        <div
          className="absolute bottom-0 rounded-full blur-3xl opacity-30"
          style={{ width: "20rem", height: "4rem", backgroundColor: AMBER }}
        />
        {/* Línea horizontal brillante */}
        <motion.div
          initial={{ width: "4rem", opacity: 0 }}
          whileInView={{ width: "16rem", opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="absolute bottom-0 rounded-full"
          style={{ height: "2px", backgroundColor: AMBER, boxShadow: `0 0 12px 2px ${AMBER}` }}
        />
      </div>

      {/* Contenido en flujo normal */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
