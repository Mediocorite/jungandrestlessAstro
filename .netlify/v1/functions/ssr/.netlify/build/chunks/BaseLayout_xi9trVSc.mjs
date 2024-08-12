import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, c as createAstro, i as renderHead, d as renderComponent, h as renderSlot } from './astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const insta = new Proxy({"src":"/_astro/instagram-icon.CRCKzjvf.svg","width":500,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/repositories-programming-applications/jungandrestlessAstro/public/icons/instagram-icon.svg";
							}
							
							return target[name];
						}
					});

const linkd = new Proxy({"src":"/_astro/linkedin-icon.COqHFdns.svg","width":500,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/repositories-programming-applications/jungandrestlessAstro/public/icons/linkedin-icon.svg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav class="nav"> <h2 class="nav__title"><a href="/">Jung And Restless</a></h2> <div class="nav__spacer"></div> <div class="nav__links"> <a href="/about"><h5>About</h5></a> <a href="/blogs"><h5>Categories</h5></a> <a href=""><img class="nav-links--icons"${addAttribute(insta.src, "src")} alt=""></a> <a href=""><img class="nav-links--icons"${addAttribute(linkd.src, "src")} alt=""></a> </div> </nav> </header>`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/Header/index.astro", void 0);

const $$Astro$1 = createAstro("https://www.jungandrestless.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Site footer -->${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer__container" data-astro-cid-sz7xmlte> <div class="footer__row" data-astro-cid-sz7xmlte> <div class="footer__col footer__col--half" data-astro-cid-sz7xmlte> <h6 class="footer__title" data-astro-cid-sz7xmlte>About</h6> <!-- TODO: Update this text --> <p class="footer__text" data-astro-cid-sz7xmlte>
Jung and Restless is a blogging site designed to share research done
          by Dinaish Mistry. Made by Anzar Web Works, using simple stack powered
          by Astro.
</p> </div> <!-- Create categories section --> <div class="footer__col footer__col--quarter" data-astro-cid-sz7xmlte> <h6 class="footer__title" data-astro-cid-sz7xmlte>Categories</h6> <ul class="footer__links" data-astro-cid-sz7xmlte> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 1</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 2</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 3</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 4</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 5</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Category 6</a> </li> </ul> </div> <!-- TODO: Update Site links --> <div class="footer__col footer__col--quarter" data-astro-cid-sz7xmlte> <h6 class="footer__title" data-astro-cid-sz7xmlte>Quick Links</h6> <ul class="footer__links" data-astro-cid-sz7xmlte> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>About Us</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Contact Us</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Contribute</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Privacy Policy</a> </li> <li class="footer__link-item" data-astro-cid-sz7xmlte> <a class="footer__link" href="" data-astro-cid-sz7xmlte>Sitemap</a> </li> </ul> </div> </div> <hr class="footer__separator" data-astro-cid-sz7xmlte> </div> <div class="footer__container" data-astro-cid-sz7xmlte> <div class="footer__row" data-astro-cid-sz7xmlte> <div class="footer__col footer__col--two-thirds" data-astro-cid-sz7xmlte> <p class="footer__copyright-text" data-astro-cid-sz7xmlte>
Copyright &copy; 2017 All Rights Reserved by
<a href="#" class="footer__link" data-astro-cid-sz7xmlte>Diniash Mistry</a>.
</p> </div> <!-- TODO: Add Social Links --> <div class="footer__col footer__col--third" data-astro-cid-sz7xmlte> <ul class="footer__social-icons" data-astro-cid-sz7xmlte> <li class="footer__social-icon-item" data-astro-cid-sz7xmlte> <a class="footer__social-icon footer__social-icon--facebook" href="#" data-astro-cid-sz7xmlte><i class="fa fa-facebook" data-astro-cid-sz7xmlte></i></a> </li> <li class="footer__social-icon-item" data-astro-cid-sz7xmlte> <a class="footer__social-icon footer__social-icon--twitter" href="#" data-astro-cid-sz7xmlte><i class="fa fa-twitter" data-astro-cid-sz7xmlte></i></a> </li> <li class="footer__social-icon-item" data-astro-cid-sz7xmlte> <a class="footer__social-icon footer__social-icon--dribbble" href="#" data-astro-cid-sz7xmlte><i class="fa fa-dribbble" data-astro-cid-sz7xmlte></i></a> </li> <li class="footer__social-icon-item" data-astro-cid-sz7xmlte> <a class="footer__social-icon footer__social-icon--linkedin" href="#" data-astro-cid-sz7xmlte><i class="fa fa-linkedin" data-astro-cid-sz7xmlte></i></a> </li> </ul> </div> </div> </div> </footer> `;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://www.jungandrestless.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Index, { "data-astro-cid-37fxchfa": true })} <div class="container" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "Z:/repositories-programming-applications/jungandrestlessAstro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
