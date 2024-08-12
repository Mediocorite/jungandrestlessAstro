import { renderers } from './renderers.mjs';
import { manifest } from './manifest_QnTEvy2W.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/categories/_categories_.astro.mjs');
const _page3 = () => import('./pages/categories.astro.mjs');
const _page4 = () => import('./pages/posts/hello-world.astro.mjs');
const _page5 = () => import('./pages/posts/post-1.astro.mjs');
const _page6 = () => import('./pages/posts/post-2.astro.mjs');
const _page7 = () => import('./pages/posts/post-3.astro.mjs');
const _page8 = () => import('./pages/posts/post-4.astro.mjs');
const _page9 = () => import('./pages/posts.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/categories/[categories].astro", _page2],
    ["src/pages/categories/index.astro", _page3],
    ["src/pages/posts/hello-world.md", _page4],
    ["src/pages/posts/post-1.md", _page5],
    ["src/pages/posts/post-2.md", _page6],
    ["src/pages/posts/post-3.md", _page7],
    ["src/pages/posts/post-4.md", _page8],
    ["src/pages/posts/index.astro", _page9],
    ["src/pages/rss.xml.js", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e9b614e3-14aa-4c5c-ad6a-c070c5febf33"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
