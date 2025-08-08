import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Lupen OBOS'),
    cover: z.string().optional()
  })
});

export const collections = { articles };
