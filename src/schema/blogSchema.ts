import  { z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  category: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  description: z.string().optional(),
});

export type BlogType = z.infer<typeof blogSchema>;