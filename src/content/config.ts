import { defineCollection, z } from "astro:content";

const artikler = defineCollection({
  schema: z.object({
    title: z.string(),
    // Tåler både ISO-streng og Date i frontmatter
    pubDate: z.union([z.string(), z.date()]).transform((d) => new Date(d)),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    cover: z.string().optional(),      // f.eks. "/covers/start-2025.jpg"
    image: z.string().optional(),      // hvis noen artikler bruker "image" i stedet
    description: z.string().optional(),// hvis du bruker "description"
    tag: z.string().optional(),        // hvis du vil vise én tag i header
  }),
});

export const collections = { artikler };
