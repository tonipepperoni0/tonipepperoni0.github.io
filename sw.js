const staticCacheName = "site-static-v13";
const assets = [
    'index.html',
    'app.js',
    'ui.js',
    'style_v6.css'];

self.addEventListener('install', evt => {
    //console.log("service worker has been installed");
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
    }))
});

self.addEventListener('activate', evt => {
    //console.log("service worker has been activated");
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener('fetch', evt => {
    //console.log("fetch event", evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});