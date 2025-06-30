import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const tutorials = defineCollection({
  loader: glob({ base: "./src/content/tutorials", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      part: z.number().optional(),
      series: z.string().optional(),
      into: z.boolean().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog, tutorials };
