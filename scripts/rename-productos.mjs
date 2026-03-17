/**
 * Renombra las imágenes de public/Productos/ a slugs URL-safe.
 * Uso:
 *   node scripts/rename-productos.mjs          → dry-run (solo muestra qué haría)
 *   node scripts/rename-productos.mjs --apply  → renombra de verdad
 */

import fs from 'fs';
import path from 'path';

const APPLY = process.argv.includes('--apply');
const DIR   = 'public/Productos/';

// Mapa: nombre original (sin extensión, en minúsculas) → slug nuevo
const RENAMES = [
  // Duplicados del mismo producto
  ['alambre 17 15 acindar fortin nacional x1000m (2)',  'alambre-17-15-acindar-fortin-x1000m-2'],
  ['alambre 17 15 acindar fortin nacional x1000m',       'alambre-17-15-acindar-fortin-x1000m'],

  // Alambres rurales
  ['alambre 16 14 invencible acindar x1000m',           'alambre-16-14-invencible-acindar-x1000m'],
  ['alambre boyero acindar x1000m 180mm',                'alambre-boyero-acindar-x1000m'],
  ['alambre manea n10 galvanizado x25kg',                'alambre-manea-n10-galvanizado-x25kg'],
  ['alambre manea n11 acindar x25kg_converted',          'alambre-manea-n11-acindar-x25kg'],
  ['alambre de pua acindar super bagual x500m',          'alambre-pua-super-bagual-x500m'],
  ['alambre rienda n8 y n9 acindar x 25kg',             'alambre-rienda-n8-n9-acindar-x25kg'],
  ['varillas galvanizadas acindar, de 4 5 6 y 7 hilos (2)_converted', 'varillas-galvanizadas-acindar-2'],
  ['varillas galvanizadas acindar, de 4 5 6 y 7 hilos', 'varillas-galvanizadas-acindar'],

  // Alambres de construcción
  ['alambre galva n12 acindar',                          'alambre-galva-n12-acindar'],
  ['alambre galva n14 o 14.5 rollos de 45kg. o bobinas por mas de 500kg. ideal para tejidos', 'alambre-galva-n14-acindar-x45kg'],
  ['alambre mediana resistencia 16 14 importado x1250m_converted', 'alambre-16-14-importado-x1250m'],
  ['alambres finos diferentes calibres. del 17 al 24',  'alambres-finos-del-17-al-24'],
  ['alambres recocidos acindar. ideal para obras. diferentes medidas_converted', 'alambres-recocidos-acindar'],

  // Clavos
  ['clavos punta parís clavos espiralados clavos cajoneros clavos cabeza de plomo diferentes medidas', 'clavos-varios'],

  // Tejidos
  ['tejido chanchero varias medidas (consultar)_converted', 'tejido-chanchero'],

  // Accesorios
  ['torniqueta doble poste reforzada torniqueta n6 golondrina torniqueta galva n6 golondrina', 'torniquetas'],
  ['bobina para enfardadora aceitado x45kg n15 o 15.5_converted', 'bobina-enfardadora-n15-x45kg'],

  // Madera rural
  ['postes metálicos acindar. diferentes medidas',       'postes-metalicos-acindar'],
];

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.webp'));
let matched = 0, unmatched = [];

console.log(APPLY ? '── APLICANDO RENOMBRES ──\n' : '── DRY-RUN (sin cambios) ──\n');

for (const file of files) {
  const baseLower = file.replace(/\.webp$/i, '').toLowerCase();
  const entry = RENAMES.find(([orig]) => orig === baseLower);

  if (entry) {
    const [, slug] = entry;
    const newName = slug + '.webp';
    if (file === newName) {
      console.log(`  ✓ ya OK   ${file}`);
    } else {
      console.log(`  → ${file}\n       ${newName}`);
      if (APPLY) fs.renameSync(path.join(DIR, file), path.join(DIR, newName));
    }
    matched++;
  } else {
    unmatched.push(file);
  }
}

console.log(`\n${matched} archivos procesados.`);
if (unmatched.length) {
  console.log(`\n⚠ Sin mapear (${unmatched.length}):`);
  unmatched.forEach(f => console.log('  - ' + f));
}

if (!APPLY) console.log('\nCorrí con --apply para ejecutar los renombres.');
