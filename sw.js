let CACHE_NAME = 'nick-cache-v1';
let urlsToCache = [
  '/data/parrot.JPG',
];

self.addEventListener('install', function(event) {
  console.log('install SW.js');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch SW.js');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
