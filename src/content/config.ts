// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { blogSchema } from 'src/schema/blogSchema';
// 2. Define your collection(s)

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: blogSchema,
});
export const collections = {
  'blog': blogCollection,
};