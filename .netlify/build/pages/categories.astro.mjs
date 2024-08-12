import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_xi9trVSc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/hello-world.md": () => import('../chunks/hello-world_C_kWWyq8.mjs').then(n => n._),"../posts/post-1.md": () => import('../chunks/post-1_ICw2EmEJ.mjs').then(n => n._),"../posts/post-2.md": () => import('../chunks/post-2_7dNW8az5.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_C51BMzW8.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_8Z4QRBAr.mjs').then(n => n._)}), () => "../posts/*.md");
  const pageTitle = "Tag Index";
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-dzaffv5d": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="tags" data-astro-cid-dzaffv5d> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-dzaffv5d> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-dzaffv5d>${tag}</a> </p>`)} </div> ` })}`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/categories/index.astro", void 0);

const $$file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
