// Aplica o título e o selo da série sobre o fundo de uma capa (sem texto) e grava WebP 1200x800.
// Uso: node scripts/cover-title.mjs --bg fundo.png --out src/content/blog/images/slug.webp \
//        --lines "AI-901:|VALE A|PENA?" --hl 2 --badge "CERTIFICACIONES"
// --hl é o índice (base 0) da linha em destaque; --badge é opcional (padrão: CERTIFICACIONES).
import sharp from 'sharp';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
if (!args.bg || !args.out || !args.lines) {
  console.error('Uso: --bg <imagem> --out <webp> --lines "L1|L2|L3" [--hl <índice>] [--badge <texto>]');
  process.exit(1);
}

const W = 1200;
const H = 800;
const lines = args.lines.split('|').map((l) => l.toUpperCase());
const hl = args.hl === undefined ? lines.length - 1 : Number(args.hl);
const badge = (args.badge ?? 'CERTIFICACIONES').toUpperCase();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const font = "Impact, 'Arial Black', Arial, sans-serif";
const size = lines.length > 3 ? 72 : 88;
const lead = size * 1.02;
const top = 190 + (3 - Math.min(lines.length, 3)) * 40;

const badgeW = badge.length * 15.5 + 44;
const text = lines
  .map(
    (l, i) =>
      `<text x="64" y="${top + size + i * lead}" font-family="${font}" font-size="${size}" fill="#39ff14" stroke="#000" stroke-opacity=".35" stroke-width="2" paint-order="stroke">${esc(l)}</text>`,
  )
  .join('');

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#070a14" stop-opacity=".94"/>
      <stop offset=".5" stop-color="#070a14" stop-opacity=".72"/>
      <stop offset=".85" stop-color="#070a14" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="64" y="64" rx="8" width="${badgeW}" height="46" fill="#be123c"/>
  <text x="86" y="96" font-family="Arial, sans-serif" font-weight="700" font-size="24" letter-spacing="2.5" fill="#fff">${esc(badge)}</text>
  ${text}
</svg>`;

await sharp(args.bg)
  .resize(W, H, { fit: 'cover' })
  .composite([{ input: Buffer.from(svg) }])
  .webp({ quality: 88 })
  .toFile(args.out);

console.log(`Capa gravada em ${args.out}`);
