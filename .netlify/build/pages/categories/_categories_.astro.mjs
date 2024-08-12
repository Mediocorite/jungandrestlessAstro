import { c as createAstro, a as createComponent, r as renderTemplate } from '../../chunks/astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categories;
  return renderTemplate`<!-- ---
// import BlogPost from "../../components/BlogPost.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import type {
  InferGetStaticParamsType,
  GetStaticPaths,
  MarkdownInstance,
} from "astro";

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await Astro.glob("../posts/*.md");

  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat()),
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
};

type Params = InferGetStaticParamsType<typeof getStaticPaths>;

const { tag } = Astro.params as Params;
const allPosts: MarkdownInstance<Record<string, any>>[] =
  await Astro.glob("../posts/*.md");
const filteredPosts = allPosts
  ? allPosts.filter((post) => post.frontmatter.tags?.includes(tag))
  : [];
---

<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    {
      filteredPosts.map((post) => (
        <BlogPost url={post.url} title={post.frontmatter.title} />
      ))
    }
  </ul>
</BaseLayout> -->`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/categories/[categories].astro", void 0);

const $$file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/categories/[categories].astro";
const $$url = "/categories/[categories]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
