const CACHE_NAME = 'mi-cache-v1';
const urlsToCache = [
  'imagenes/hola.JPG',
  'imagenes/cachecodigo.JPG',
  'imagenes/aprogresiva.JPG',
  'imagenes/aplicacionesmoviles.JPG',
  'imagenes/holapage.JPG',
  'imagenes/imagenprueba.JPG',
  'imagenes/manifest.JPG',
  'imagenes/manifestheader.JPG',
  'imagenes/manifestjson.JPG',
  'imagenes/multiplataforma.JPG',
  'imagenes/prueba1.JPG',
  'imagenes/soa.JPG',
  'imagenes/sw.JPG',
  'imagenes/swcache.JPG',
  'imagenes/www.JPG',
  'imagenes/xamp.JPG',
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