// Service worker: installable + offline, but always prefers fresh content
// so updates show up without getting stuck on an old cached version.
const CACHE = "andries-checkin-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./firebase-config.js",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Never intercept cross-origin requests (Firebase SDK, Google auth, etc.) —
  // let them go straight to the network.
  if (url.origin !== self.location.origin) return;
  const isPage =
    e.request.mode === "navigate" ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("index.html");

  if (isPage) {
    // Network-first for the app itself: always try to get the latest,
    // fall back to cache only when offline.
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match(e.request).then((h) => h || caches.match("./index.html")))
    );
  } else {
    // Cache-first for static icons/manifest, refreshing in the background.
    e.respondWith(
      caches.match(e.request).then((hit) => {
        const net = fetch(e.request)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
            return res;
          })
          .catch(() => hit);
        return hit || net;
      })
    );
  }
});
