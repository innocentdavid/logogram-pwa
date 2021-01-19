self.addEventListener("install", e => {
    // console.log("Installed!");
    e.waitUntill(
        caches.open("static")
        .then(cache => {
            return cache.addAll([
                "./",
                "./css/style.css",
                "./images/logo192.png"
            ]);
        })
    )
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches
        .match(e.request)
        .then(response => {
            return response || fetch(e.request);
        })
    )
})