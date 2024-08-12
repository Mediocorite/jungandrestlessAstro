import { a as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_DSTjn-xe.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from './PostLayout_JLAa99xv.mjs';

const html = "<h1 id=\"my-first-blog-post-is-here\">My First Blog Post is here</h1>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</li>\n<li><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</li>\n<li><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"The Astro logo on a dark background with a pink glow."},"tags":["astro","blogging","learning in public"],"layout":"../../layouts/PostLayout.astro","title":"My First Blog Post"};
				const file = "Z:/repositories-programming-applications/jungandrestlessAstro/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "\n# My First Blog Post is here\n\nWelcome to my *new blog* about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-first-blog-post-is-here","text":"My First Blog Post is here"},{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
