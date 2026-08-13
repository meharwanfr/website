import { defineCollection } from "astro/content/config";

import { z } from "astro/zod";

import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/pages/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    draft: z.boolean().default(false),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});


export const collections = { blog }