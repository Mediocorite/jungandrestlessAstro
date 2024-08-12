import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_xi9trVSc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Dinaish",
    lastName: "Mistry",
    country: "United Kingdom",
    occupation: "Autism Practiner",
    hobbies: ["piano", "painting", "books"]
  };
  const skills = ["Admin Work", "Support"];
  const happy = false;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Here are a few facts about me:</p> <ul> <li>My name is ${identity.firstName}.</li> <li>
I live in ${identity.country} and I work as a ${identity.occupation}.
</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>
Two of my hobbies are: ${identity.hobbies[0]} and${" "} ${identity.hobbies[1]} </li>`} </ul> <p>My skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li class="skill">${skill}</li>`)} </ul> ${happy}${renderTemplate`<p>I finished this tutorial!</p>`}${renderTemplate`<p>My goal is to finish in 3 days.</p>` }` })}`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/about.astro", void 0);

const $$file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
