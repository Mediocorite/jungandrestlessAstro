// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// import { blogSchema } from 'src/schema/blogSchema';
// 2. Define your collection(s)

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.string(),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
});
export const collections = {
  'blog': blogCollection,
};