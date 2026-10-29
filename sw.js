const CACHE='emotion-atlas-928c314a4b02';
const FILES=["./","./index.html","./icon.svg","./manifest.webmanifest","./assets/esm-DL8mkxyE.js","./assets/index-Aw5_PVZl.js","./assets/index-CnHNBZ0d.css","./assets/web-BgMt4ain.js","./assets/web-BZVkgmzZ.js","./assets/web-W6L9ap2p.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('emotion-atlas-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;const base=new URL('./',self.location.href);if(!u.pathname.startsWith(base.pathname))return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match(new URL('index.html',base)):Response.error())));});
