const CACHE='emotion-atlas-313d054829b7';
const FILES=["./","./index.html","./icon.svg","./manifest.webmanifest","./assets/esm-BdEomh6C.js","./assets/index-CnBHANqK.js","./assets/index-DRdBIfjr.css","./assets/web-BpZXZxH3.js","./assets/web-BYnEKaPw.js","./assets/web-DHIAOOAY.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('emotion-atlas-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;const base=new URL('./',self.location.href);if(!u.pathname.startsWith(base.pathname))return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match(new URL('index.html',base)):Response.error())));});
