// Textos, idioma e links do blog. Os componentes de layout leem tudo daqui,
// então o mesmo conjunto de componentes serve aos blogs ES e PT-BR.
export const site = {
  lang: 'es',
  locale: 'es-ES',
  name: 'AI DEV',
  categories: ['Chatbots', 'Prompts', 'Herramientas de IA', 'Tutoriales', 'Estudios de caso', 'Carrera'],
  // Artigos por página e quantos entram no mosaico da home (página 1).
  perPage: 9,
  featuredCount: 6,
  postHref: (slug: string) => `/${slug}/`,
  alternate: (translation: string) => ({
    lang: 'pt-BR',
    href: `https://inteligenciartificial.dev.br/${translation}/`,
  }),
  t: {
    home: 'Inicio',
    menu: 'Abrir o cerrar el menú',
    theme: 'Cambiar entre modo claro y oscuro',
    searchToggle: 'Abrir o cerrar la búsqueda',
    searchPlaceholder: 'Buscar artículos…',
    searchLabel: 'Buscar artículos',
    latest: 'Recién publicado',
    recent: 'Lo más reciente',
    viewAll: 'Ver todos →',
    byCategory: 'Explorar por categoría',
    articles: 'artículos',
    blog: 'Blog',
    blogDesc: 'Ingeniería de prompts, herramientas de IA y flujos de trabajo para desarrolladores.',
    all: 'Todos',
    noResults: 'Ningún artículo coincide con tu búsqueda.',
    inThisArticle: 'En este artículo',
    published: 'Publicado',
    updated: 'Actualizado',
    prev: '← Anterior',
    next: 'Siguiente →',
    related: 'Sigue leyendo',
    translationLink: 'Ler em português (Brasil)',
    shareLabel: 'Comparte',
    copyLink: 'Copiar enlace',
    copiedLink: '¡Enlace copiado!',
    shareOn: 'Compartir en',
    shareKicker: 'Comparte conocimiento',
    shareTitle: '¿Te resultó útil este contenido?',
    shareSub: 'Envíaselo a alguien que también pueda aprovecharlo.',
    copy: 'Copiar',
    copied: '¡Copiado!',
    copyFallback: 'Pulsa Ctrl+C',
    writtenBy: 'Escrito por',
    authorRole: 'Analista de sistemas · Redactor de IA',
    authorBio:
      'Analista de sistemas independiente y redactor de tecnología, apasionado por la IA y la robótica. Creé AI DEV para separar lo que sirve del ruido.',
    authorSocial: 'Fernando Lisboa en redes sociales',
    onThisPage: 'En esta página',
    pagination: 'Paginación',
    previous: 'Anterior',
    nextPage: 'Siguiente',
  },
};

// "17 oct 2026" (ou "17 septiembre 2026" no formato longo), sem pontos nem "de".
export function fmtDate(date: Date, month: 'short' | 'long' = 'short'): string {
  const parts = new Intl.DateTimeFormat(site.locale, {
    day: '2-digit',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value.replace('.', '') ?? '';
  return `${get('day')} ${get('month')} ${get('year')}`;
}
