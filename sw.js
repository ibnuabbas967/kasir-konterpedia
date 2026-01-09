self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('konterpedia-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});
