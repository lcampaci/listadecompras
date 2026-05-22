const CACHE = "lista-compras-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // 🔥 IMPORTANTE: força navegação sempre para index.html
  if (request.mode === "navigate") {
    event.respondWith(fetch("./index.html"));
    return;
  }

  event.respondWith(fetch(request));
});
