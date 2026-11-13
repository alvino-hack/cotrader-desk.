// Service worker minimal: diperlukan Chrome agar aplikasi bisa di-install.
// Semua permintaan diteruskan ke jaringan supaya harga selalu terbaru.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
