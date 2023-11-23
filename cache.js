const CACHE_NAME = 'mi-cache-v1';
const urlsToCache = [
 
  'imagenes/hola.JPG',
  // Agrega aquí todos los recursos que deseas almacenar en caché
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("se agrego al cache");
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si la solicitud coincide con un recurso en caché, lo devuelve desde la caché
        return response || fetch(event.request);
      })
  );
});