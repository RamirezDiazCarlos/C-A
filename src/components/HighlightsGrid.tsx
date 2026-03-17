import React from "react";
import { HoverEffect, type HoverItem } from "./ui/CardHoverEffect";

const highlights: HoverItem[] = [
  {
    numero: "01",
    titulo: "Amplio catálogo",
    descripcion:
      "Trabajamos con las principales marcas del mercado y contamos con una amplia variedad de productos para construcción y campo.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`,
  },
  {
    numero: "02",
    titulo: "Envíos a todo el país",
    descripcion:
      "Llegamos a cualquier punto del país. Coordinamos el despacho directo a obra o al destino que necesites, sin importar la distancia.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>`,
  },
  {
    numero: "03",
    titulo: "Precios competitivos",
    descripcion:
      "Trabajamos con empresas, contratistas y particulares. Precios mayoristas para compras en cantidad, y atención al por menor sin problema.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`,
  },
  {
    numero: "04",
    titulo: "Atención personalizada",
    descripcion:
      "Un vendedor especializado te asesora sobre materiales, cantidades y especificaciones técnicas para cada proyecto.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
  },
];

export default function HighlightsGrid() {
  return <HoverEffect items={highlights} />;
}
