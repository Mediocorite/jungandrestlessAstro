import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, b as addAttribute, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, d as renderComponent, u as unescapeHTML } from '../chunks/astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_xi9trVSc.mjs';
import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from '../chunks/astro/assets-service_Da-IJyx9.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="about-card"> <div class="about-card__description"> <h2 class="about-card__title">About Me</h2> <p class="about-card__text">
I'm a dedicated psychology student passionate about understanding the
      human mind and helping others. Exploring the depths of cognitive processes
      and human behavior is my calling.
</p> </div> <div class="about-card__image"> <img src="profile.jpg" alt="Profile Picture"> <div class="about-card__socials"> <a href="#" class="about-card__social-icon about-card__social-icon--instagram"></a> <a href="#" class="about-card__social-icon about-card__social-icon--linkedin"></a> <a href="#" class="about-card__social-icon about-card__social-icon--facebook"></a> </div> </div> </div>`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/Home/Hero.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="">Carousel</div>`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/Home/Carousel.astro", void 0);

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { heroImage, title, description, pubDate, category, tags } = Astro2.props?.data;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-xjhe6f3p> <img${addAttribute(heroImage.src, "src")} alt="HeroImage" class="card__image" data-astro-cid-xjhe6f3p> <div class="card__content" data-astro-cid-xjhe6f3p> <h2 class="card__title" data-astro-cid-xjhe6f3p>${title}</h2> <div class="card__category" data-astro-cid-xjhe6f3p>${category}</div> <div class="card__tags" data-astro-cid-xjhe6f3p> ${tags.map((tag) => renderTemplate`<span class="card__tag" data-astro-cid-xjhe6f3p>${tag}</span>`)} </div> <p class="card__description" data-astro-cid-xjhe6f3p> ${description} </p> <p class="card__date" data-astro-cid-xjhe6f3p> ${new Date(pubDate).toDateString()} </p> </div> </div>  `;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/common/Card.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.jungandrestless.com", "SSR": true}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/lost_connections.md": () => import('../chunks/lost_connections_DrGQcTG3.mjs'),"/src/content/blog/ripple_effect.md": () => import('../chunks/ripple_effect_DAcC3sTd.mjs'),"/src/content/blog/snooze_or_loose.md": () => import('../chunks/snooze_or_loose_ERhW1MTS.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"lost_connections":"/src/content/blog/lost_connections.md","ripple_effect":"/src/content/blog/ripple_effect.md","snooze_or_loose":"/src/content/blog/snooze_or_loose.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/lost_connections.md": () => import('../chunks/lost_connections_gjygvICx.mjs'),"/src/content/blog/ripple_effect.md": () => import('../chunks/ripple_effect_B9KGYn6Y.mjs'),"/src/content/blog/snooze_or_loose.md": () => import('../chunks/snooze_or_loose_CpwKlWEf.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogPosts = await getCollection("blog");
  return renderTemplate`<!-- <Debug answer={allBlogPosts} /> -->${maybeRenderHead()}<div class=""> ${allBlogPosts.map((blog) => {
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { ...blog })}`;
  })} </div>`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/BlogsView/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Carousel", $$Carousel, {})} ${renderComponent($$result2, "BlogsView", $$Index$1, {})} ` })}`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/index.astro", void 0);

const $$file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
