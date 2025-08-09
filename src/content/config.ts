import { defineCollection, z } from "astro:content";

const artikler = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.union([z.string(), z.date()]).transform((d) => new Date(d)),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    cover: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    tag: z.string().optional(),
  }),
});

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.union([z.string(), z.date()]).transform((d) => new Date(d)),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    cover: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    tag: z.string().optional(),
  }),
});

export const collections = { artikler, articles };
