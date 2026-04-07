import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const credential = z.object({ label: z.string(), value: z.string() });

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    // Section headings
    heading_line1: z.string().optional(),
    heading_line2: z.string().optional(),
    heading_line3: z.string().optional(),
    // Body paragraphs as list (may contain inline HTML)
    body: z.array(z.object({ text: z.string() })).optional(),
    // Credential sidebar
    credentials: z.array(credential).optional(),
    // Deployment blockquote
    blockquote: z.string().optional(),
    // Phoenix declaration
    declaration_line1: z.string().optional(),
    declaration_line2: z.string().optional(),
    // Phoenix venture link
    venture_label: z.string().optional(),
    venture_text: z.string().optional(),
    venture_url: z.string().optional(),
    // Footer
    name: z.string().optional(),
    sub: z.string().optional(),
    aeryon_url: z.string().optional(),
    aeryon_label: z.string().optional(),
    copyright: z.string().optional(),
  }).passthrough(),
});

export const collections = { stories, pages };
