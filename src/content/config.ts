import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),   // f.eks. "/images/olderheim.jpg"
    tag: z.string().optional(),     // f.eks. "Analyse"
  }),
});

export const collections = { articles };
