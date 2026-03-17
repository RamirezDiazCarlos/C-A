export type Categoria =
  | 'Alambres Rurales'
  | 'Alambre de Púas'
  | 'Alambres de Construcción'
  | 'Clavos'
  | 'Tejidos'
  | 'Accesorios'
  | 'Postes y Varillas';

export interface Producto {
  slug: string;           // nombre del archivo en public/Productos/
  nombre: string;         // texto que aparece en la card
  detalle?: string;       // línea secundaria opcional
  categoria: Categoria;
  imagenes: string[];     // uno o dos archivos (mismo producto)
  whatsapp: string;       // texto pre-cargado para WA
}

export const productos: Producto[] = [
  // ── Alambres Rurales ────────────────────────────────────────────────────
  {
    slug: 'alambre-17-15-acindar-fortin-x1000m',
    nombre: 'Alambre 17/15 Acindar Fortín Nacional',
    detalle: '× 1000 m',
    categoria: 'Alambres Rurales',
    imagenes: [
      'alambre-17-15-acindar-fortin-x1000m.webp',
      'alambre-17-15-acindar-fortin-x1000m-2.webp',
    ],
    whatsapp: 'Hola, quiero consultar por Alambre 17/15 Acindar Fortín Nacional × 1000m',
  },
  {
    slug: 'alambre-16-14-invencible-acindar-x1000m',
    nombre: 'Alambre 16/14 Invencible Acindar',
    detalle: '× 1000 m',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-16-14-invencible-acindar-x1000m.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre 16/14 Invencible Acindar × 1000m',
  },
  {
    slug: 'alambre-16-14-importado-x1250m',
    nombre: 'Alambre 16/14 Importado',
    detalle: '× 1250 m — Excelente precio',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-16-14-importado-x1250m.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre 16/14 Importado × 1250m',
  },
  {
    slug: 'alambre-boyero-acindar-x1000m',
    nombre: 'Alambre Boyero Acindar',
    detalle: '× 1000 m',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-boyero-acindar-x1000m.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Boyero Acindar × 1000m',
  },
  {
    slug: 'alambre-rienda-n8-n9-acindar-x25kg',
    nombre: 'Alambre Rienda n°8 y n°9 Acindar',
    detalle: '× 25 kg',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-rienda-n8-n9-acindar-x25kg.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Rienda n°8/9 Acindar × 25kg',
  },
  {
    slug: 'alambre-manea-n10-galvanizado-x25kg',
    nombre: 'Alambre Manea n°10 Galvanizado',
    detalle: '× 25 kg',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-manea-n10-galvanizado-x25kg.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Manea n°10 Galvanizado × 25kg',
  },
  {
    slug: 'alambre-manea-n11-acindar-x25kg',
    nombre: 'Alambre Manea n°11 Acindar',
    detalle: '× 25 kg',
    categoria: 'Alambres Rurales',
    imagenes: ['alambre-manea-n11-acindar-x25kg.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Manea n°11 Acindar × 25kg',
  },
  {
    slug: 'varillas-galvanizadas-acindar',
    nombre: 'Varillas Galvanizadas Acindar',
    detalle: 'De 4, 5, 6 y 7 hilos',
    categoria: 'Alambres Rurales',
    imagenes: [
      'varillas-galvanizadas-acindar.webp',
      'varillas-galvanizadas-acindar-2.webp',
    ],
    whatsapp: 'Hola, quiero consultar por Varillas Galvanizadas Acindar',
  },

  // ── Alambre de Púas ─────────────────────────────────────────────────────
  {
    slug: 'alambre-pua-super-bagual-x500m',
    nombre: 'Púa Super Bagual',
    detalle: '× 500 m',
    categoria: 'Alambre de Púas',
    imagenes: ['alambre-pua-super-bagual-x500m.webp'],
    whatsapp: 'Hola, quiero consultar por Púa Super Bagual × 500m',
  },

  // ── Alambres de Construcción ─────────────────────────────────────────────
  {
    slug: 'alambres-recocidos-acindar',
    nombre: 'Alambres Recocidos Acindar',
    detalle: 'Diferentes medidas — Ideal para obras',
    categoria: 'Alambres de Construcción',
    imagenes: ['alambres-recocidos-acindar.webp'],
    whatsapp: 'Hola, quiero consultar por Alambres Recocidos Acindar',
  },
  {
    slug: 'alambres-finos-del-17-al-24',
    nombre: 'Alambres Finos Galvanizados',
    detalle: 'Del calibre 17 al 24',
    categoria: 'Alambres de Construcción',
    imagenes: ['alambres-finos-del-17-al-24.webp'],
    whatsapp: 'Hola, quiero consultar por Alambres Finos Galvanizados (del 17 al 24)',
  },
  {
    slug: 'alambre-galva-n12-acindar',
    nombre: 'Alambre Galvanizado n°12 Acindar',
    categoria: 'Alambres de Construcción',
    imagenes: ['alambre-galva-n12-acindar.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Galvanizado n°12 Acindar',
  },
  {
    slug: 'alambre-galva-n14-acindar-x45kg',
    nombre: 'Alambre Galvanizado n°14 / 14.5 Acindar',
    detalle: 'Rollos de 45 kg o bobinas por más de 500 kg',
    categoria: 'Alambres de Construcción',
    imagenes: ['alambre-galva-n14-acindar-x45kg.webp'],
    whatsapp: 'Hola, quiero consultar por Alambre Galvanizado n°14/14.5 Acindar',
  },

  // ── Clavos ──────────────────────────────────────────────────────────────
  {
    slug: 'clavos-varios',
    nombre: 'Clavos',
    detalle: 'Punta París · Espiralados · Cajoneros · Cabeza de plomo',
    categoria: 'Clavos',
    imagenes: ['clavos-varios.webp'],
    whatsapp: 'Hola, quiero consultar por Clavos (punta París, espiralados, cajoneros, cabeza de plomo)',
  },

  // ── Tejidos ─────────────────────────────────────────────────────────────
  {
    slug: 'tejido-chanchero',
    nombre: 'Tejido Chanchero',
    detalle: 'Varias medidas — consultar',
    categoria: 'Tejidos',
    imagenes: ['tejido-chanchero.webp'],
    whatsapp: 'Hola, quiero consultar por Tejido Chanchero',
  },

  // ── Accesorios ──────────────────────────────────────────────────────────
  {
    slug: 'torniquetas',
    nombre: 'Torniquetas',
    detalle: 'Doble poste reforzada · n°6 Golondrina · Galvanizada',
    categoria: 'Accesorios',
    imagenes: ['torniquetas.webp'],
    whatsapp: 'Hola, quiero consultar por Torniquetas',
  },
  {
    slug: 'bobina-enfardadora-n15-x45kg',
    nombre: 'Bobina para Enfardadora Aceitada',
    detalle: 'n°15 / 15.5 × 45 kg',
    categoria: 'Accesorios',
    imagenes: ['bobina-enfardadora-n15-x45kg.webp'],
    whatsapp: 'Hola, quiero consultar por Bobina para Enfardadora n°15 × 45kg',
  },

  // ── Madera Rural ─────────────────────────────────────────────────────────
  {
    slug: 'postes-metalicos-acindar',
    nombre: 'Postes Metálicos Acindar',
    detalle: 'Diferentes medidas',
    categoria: 'Postes y Varillas',
    imagenes: ['postes-metalicos-acindar.webp'],
    whatsapp: 'Hola, quiero consultar por Postes Metálicos Acindar',
  },
];
