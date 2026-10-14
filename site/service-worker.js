const CACHE_NAME = "anisha-site-v1";
const SHELL = ["./", "./content.js"];
self.addEventListener("install", event => {
 event.waitUntil((async () => {
  const cache = await caches.open(CACHE_NAME);
  for (const file of SHELL) { try { const response = await fetch(file,{cache:"reload"}); if(response.ok) await cache.put(file,response); } catch (_) {} }
  await self.skipWaiting();
 })());
});
self.addEventListener("activate", event => {
 event.waitUntil((async () => {
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith("anisha-site-")&&k!==CACHE_NAME).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener("fetch", event => {
 const request=event.request;if(request.method!=="GET")return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(request.mode==="navigate"){
  event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok){const c=await caches.open(CACHE_NAME);await c.put("./",response.clone());}return response;}catch(_){return (await caches.match(request))||(await caches.match("./"))||Response.error();}})());return;
 }
 if(url.pathname.includes("/assets/")||url.pathname.endsWith("/content.js")){
  event.respondWith((async()=>{const c=await caches.open(CACHE_NAME),cached=await c.match(request);const network=fetch(request).then(response=>{if(response.ok)c.put(request,response.clone()).catch(()=>{});return response;}).catch(()=>cached||Response.error());return cached||network;})());
 }
});
