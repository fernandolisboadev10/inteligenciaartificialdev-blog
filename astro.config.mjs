// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

const blogDir = new URL('./src/content/blog/', import.meta.url);
const dateBySlug = new Map();

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const content = readFileSync(new URL(file, blogDir), 'utf-8');
  const match = content.match(/^updated:\s*(\S+)/m) ?? content.match(/^date:\s*(\S+)/m);
  if (match) {
    dateBySlug.set(file.replace(/\.md$/, ''), new Date(match[1]));
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://inteligenciaartificialdev.com',
  redirects: {
    // Blog migrado a español (2026-10-12): slugs en inglés -> equivalente en español
    "/ai-900-ai-901-worth-it": "/ai-900-ai-901-vale-la-pena",
    "/chatgpt-study-commands": "/chatgpt-comandos-para-estudiar",
    "/chatgpt-detector-false-positives": "/chatgpt-detector-falsos-positivos",
    "/chatgpt-sol-terra-luna-models": "/chatgpt-modelos-sol-terra-luna",
    "/claude-code-hidden-features": "/claude-code-funciones-ocultas",
    "/deepseek-vs-chatgpt-pomodoro-timer": "/deepseek-vs-chatgpt-temporizador-pomodoro",
    "/ai-coding-tools-case-studies": "/estudios-de-caso-herramientas-ia-codigo",
    "/grok-api-pricing": "/grok-api-precio",
    "/trump-super-intelligence-order": "/trump-superinteligencia-orden",
    "/trump-super-intelligence-order-developers": "/trump-superinteligencia-orden",
    "/vibe-coding-habits": "/vibe-coding-6-habitos-sin-desorden",
    "/ai-slop-pull-requests-open-source": "/slop-de-ia-pull-requests-open-source",
    // consolidado en techonplay.com (canibalizacao)
    "/gemini-student": "https://techonplay.com/google-ai-plus-for-students/",
  },

  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/free-prompts/'),
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const date = dateBySlug.get(slug);
        if (date) item.lastmod = date;
        return item;
      },
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
  },
});
