import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, h as renderSlot } from './astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_xi9trVSc.mjs';
/* empty css                          */

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-gjtny2mx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-gjtny2mx>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p data-astro-cid-gjtny2mx><em data-astro-cid-gjtny2mx>${frontmatter.description}</em></p> <p data-astro-cid-gjtny2mx>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-gjtny2mx> <div class="tags" data-astro-cid-gjtny2mx> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-gjtny2mx> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-gjtny2mx>${tag}</a> </p>`)} </div>  ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
