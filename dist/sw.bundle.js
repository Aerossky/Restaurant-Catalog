if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>a(e,r),f={module:{uri:r},exports:s,require:d};i[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"526.bundle.js",revision:"9aa6460353b5f035423dc6f737c8b6bb"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app.webmanifest",revision:"15670c39042555392f8badd851ee62c0"},{url:"app~a51fa3f5.bundle.js",revision:"77ad4548c01586b67ee1baaa29c270a6"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"af2b51d848d1d6990daa3fcf8ce927ba"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"c98bea6fa951cf9e120367b15cba101c"},{url:"app~e4317507.bundle.js",revision:"fe206dd922f78bb61ac91c66d9a05918"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"d65a50f2d719afa38ebb6f5892b60b4c"},{url:"icons/icon-128x128.png",revision:"184fd935a78eee7facb843330026956c"},{url:"icons/icon-144x144.png",revision:"60777aa202ef9a7d8b62cacfbb2772ac"},{url:"icons/icon-152x152.png",revision:"d65a50f2d719afa38ebb6f5892b60b4c"},{url:"icons/icon-192x192.png",revision:"863647ccfc595e935af8d49b4d74b70c"},{url:"icons/icon-384x384.png",revision:"b9149e09c5379b6a2ccaff9c0d30702f"},{url:"icons/icon-512x512.png",revision:"eb126ec934df829584a4dfb749e94413"},{url:"icons/icon-72x72.png",revision:"106404865543970a72247980b26c8073"},{url:"icons/icon-96x96.png",revision:"670814a6629c916cbad5a2bd6f9f99b4"},{url:"images/dummy-user.png",revision:"e356d1f005611434de8c7fea6967a296"},{url:"images/heros/hero-image-large.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"index.html",revision:"fa691fcbf7cf3100588e48276cc191c0"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"dicodingRestaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"dicodingRestaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
