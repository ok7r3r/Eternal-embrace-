const CACHE_NAME = "anisha-site-v2";
const SHELL = ["./", "./content.js"];
self.addEventListener("install", event => {
 event.waitUntil((async () => {
  const cache = await caches.open(CACHE_NAME);
  for (const file of SHELL) {
   try { const response = await fetch(file,{cache:"reload"}); if(response.ok) await cache.put(file,response); }
   catch (_) {}
  }
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
 const request=event.request;
 if(request.method!=="GET")return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(request.mode==="navigate"){
  event.respondWith((async()=>{
   try{
    const response=await fetch(request);
    if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put("./",response.clone());}
    return response;
   }catch(_){return (await caches.match(request))||(await caches.match("./"))||Response.error();}
  })());
  return;
 }
 if(url.pathname.includes("/assets/")||url.pathname.endsWith("/content.js")){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE_NAME),cached=await cache.match(request);
   if(cached)return cached;
   try{const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response;}
   catch(_){return Response.error();}
  })());
 }
});
