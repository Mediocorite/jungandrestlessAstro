import { c as createAstro, a as createComponent, r as renderTemplate } from '../chunks/astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"./hello-world.md": () => import('../chunks/hello-world_C_kWWyq8.mjs').then(n => n._),"./post-1.md": () => import('../chunks/post-1_ICw2EmEJ.mjs').then(n => n._),"./post-2.md": () => import('../chunks/post-2_7dNW8az5.mjs').then(n => n._),"./post-3.md": () => import('../chunks/post-3_C51BMzW8.mjs').then(n => n._),"./post-4.md": () => import('../chunks/post-4_8Z4QRBAr.mjs').then(n => n._)}), () => "./*.md");
  return renderTemplate``;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/posts/index.astro", void 0);

const $$file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
