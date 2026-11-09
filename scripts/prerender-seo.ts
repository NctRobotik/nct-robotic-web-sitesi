import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getSeoMetadata } from '../src/lib/seo';
import { SupportedLanguage } from '../src/i18n/languages';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[SEO Prerender] dist/index.html not found! Run "vite build" before running prerender.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const PRODUCTS = [
  'orbit-pix',
  'orbit-s',
  'orbit-lite',
  'orbit-bloom',
  'amr',
  'nct-serve',
  'nct-guide'
];

interface RouteTarget {
  route: string;
  lang: SupportedLanguage;
}

const targets: RouteTarget[] = [];

// 1. Home routes
targets.push({ route: '', lang: 'tr' });
targets.push({ route: 'en', lang: 'en' });
targets.push({ route: 'de', lang: 'de' });
targets.push({ route: 'ru', lang: 'ru' });
targets.push({ route: 'ar', lang: 'ar' });

// 2. Core pages
const CORE_PAGES = [
  { tr: 'about', en: 'en/about', de: 'de/ueber-uns', ru: 'ru/about', ar: 'ar/about', aliases: ['hakkimizda'] },
  { tr: 'urunlerimiz', en: 'en/products', de: 'de/produkte', ru: 'ru/products', ar: 'ar/products', aliases: ['products'] },
  { tr: 'satis-noktalari', en: 'en/sales-points', de: 'de/vertriebsstellen', ru: 'ru/sales-points', ar: 'ar/sales-points', aliases: [] },
  { tr: 'ogrenme-modeli', en: 'en/learning-model', de: 'de/lernmodell', ru: 'ru/learning-model', ar: 'ar/learning-model', aliases: ['en/ogrenme-modeli'] },
  { tr: 'profil-metodolojisi', en: 'en/profile-methodology', de: 'de/profil-methodik', ru: 'ru/profile-methodology', ar: 'ar/profile-methodology', aliases: [] },
  { tr: 'contact', en: 'en/contact', de: 'de/kontakt', ru: 'ru/contact', ar: 'ar/contact', aliases: ['iletisim'] },
  { tr: 'quote', en: 'en/quote', de: 'de/angebot', ru: 'ru/quote', ar: 'ar/quote', aliases: ['teklif'] },
  { tr: 'videolar', en: 'en/videos', de: 'de/videos', ru: 'ru/videos', ar: 'ar/videos', aliases: ['videos'] }
];

for (const page of CORE_PAGES) {
  targets.push({ route: page.tr, lang: 'tr' });
  targets.push({ route: page.en, lang: 'en' });
  targets.push({ route: page.de, lang: 'de' });
  targets.push({ route: page.ru, lang: 'ru' });
  targets.push({ route: page.ar, lang: 'ar' });
  for (const alias of page.aliases) {
    const aliasLang: SupportedLanguage = alias.startsWith('en/') ? 'en' : 'tr';
    targets.push({ route: alias, lang: aliasLang });
  }
}

// 3. Products
for (const pid of PRODUCTS) {
  targets.push({ route: `urunlerimiz/${pid}`, lang: 'tr' });
  targets.push({ route: `en/products/${pid}`, lang: 'en' });
  targets.push({ route: `de/produkte/${pid}`, lang: 'de' });
  targets.push({ route: `ru/products/${pid}`, lang: 'ru' });
  targets.push({ route: `ar/products/${pid}`, lang: 'ar' });
}

console.log(`[SEO Prerender] Starting static HTML generation for ${targets.length} localized routes...`);

let generatedCount = 0;

for (const target of targets) {
  const meta = getSeoMetadata('/' + target.route, target.lang);

  let html = template;

  // Replace <html ...>
  html = html.replace(/<html[^>]*>/i, `<html lang="${meta.lang}" dir="${meta.direction}">`);

  // Replace <title>...</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // Replace or inject meta description
  const metaDescTag = `<meta name="description" content="${escapeHtml(meta.description)}" />`;
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, metaDescTag);
  } else {
    html = html.replace('</head>', `    ${metaDescTag}\n  </head>`);
  }

  // Replace or inject og:url
  const ogUrlTag = `<meta property="og:url" content="${escapeHtml(meta.ogUrl)}" />`;
  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:url["'][^>]*>/i, ogUrlTag);
  } else {
    html = html.replace('</head>', `    ${ogUrlTag}\n  </head>`);
  }

  // Replace or inject og:title
  const ogTitleTag = `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`;
  if (/<meta\s+property=["']og:title["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:title["'][^>]*>/i, ogTitleTag);
  } else {
    html = html.replace('</head>', `    ${ogTitleTag}\n  </head>`);
  }

  // Replace or inject og:description
  const ogDescTag = `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`;
  if (/<meta\s+property=["']og:description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:description["'][^>]*>/i, ogDescTag);
  } else {
    html = html.replace('</head>', `    ${ogDescTag}\n  </head>`);
  }

  // Replace or inject og:image
  const ogImageTag = `<meta property="og:image" content="${escapeHtml(meta.ogImage)}" />`;
  if (/<meta\s+property=["']og:image["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+property=["']og:image["'][^>]*>/i, ogImageTag);
  } else {
    html = html.replace('</head>', `    ${ogImageTag}\n  </head>`);
  }

  // Replace or inject twitter:title
  const twTitleTag = `<meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}" />`;
  if (/<meta\s+name=["']twitter:title["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, twTitleTag);
  } else {
    html = html.replace('</head>', `    ${twTitleTag}\n  </head>`);
  }

  // Replace or inject twitter:description
  const twDescTag = `<meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}" />`;
  if (/<meta\s+name=["']twitter:description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, twDescTag);
  } else {
    html = html.replace('</head>', `    ${twDescTag}\n  </head>`);
  }

  // Replace or inject twitter:image
  const twImageTag = `<meta name="twitter:image" content="${escapeHtml(meta.twitterImage)}" />`;
  if (/<meta\s+name=["']twitter:image["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']twitter:image["'][^>]*>/i, twImageTag);
  } else {
    html = html.replace('</head>', `    ${twImageTag}\n  </head>`);
  }

  // Canonical tag
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `    ${canonicalTag}\n  </head>`);
  }

  // Hreflang tags
  // Remove existing hreflang links if any
  html = html.replace(/<link\s+rel=["']alternate["']\s+hreflang=[^>]*>\s*/gi, '');

  if (meta.hreflangs) {
    const hreflangTags = Object.entries(meta.hreflangs)
      .map(([code, url]) => `    <link rel="alternate" hreflang="${code}" href="${escapeHtml(url)}" />`)
      .join('\n');
    html = html.replace('</head>', `${hreflangTags}\n  </head>`);
  }

  // Output path
  const targetDir = target.route === '' ? distDir : path.join(distDir, target.route);
  fs.mkdirSync(targetDir, { recursive: true });
  const outputFile = path.join(targetDir, 'index.html');

  fs.writeFileSync(outputFile, html, 'utf-8');
  generatedCount++;
}

console.log(`[SEO Prerender] Successfully generated ${generatedCount} static HTML files.`);
