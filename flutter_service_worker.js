'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ea04643841c993ec861fd260f4ca854f",
".git/config": "80efbaade44472ae56b1b48ec116d925",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dbac175b47efcaa339dd4a598e636d5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c10ceef39baf94125c64a10c76b440a",
".git/logs/refs/heads/main": "d08c3588d2f43c3ddc9d399032f01270",
".git/logs/refs/remotes/origin/main": "86b42069e8c399994b05cd850502b228",
".git/objects/10/e84d14e22f4788c89acccdae462cb678b5e6e2": "751f2a8a6f211d7626d69c248c202ca5",
".git/objects/11/c338189e5cb8edaa32e55d6ae9e6a0b3d14afc": "cc355abb6fda1038e3c7dd91403be900",
".git/objects/44/4d537c5dd45108d98602948834f67429deefad": "457806b2d597657d6f2c40cb89e7e362",
".git/objects/94/a1d8b59b0c283c9c213a43ce64287b21ac6331": "9cb22e6e7cf38f7715ecb54ebe4b537a",
".git/objects/9c/892a3c62cbcd9a1b97842cc62ffcfd58e58697": "4f5db160659bb269fc8a7189ce348ac1",
".git/objects/d2/812445544e3dbbf92fce9ad599724c2d770670": "97cd340b9bd257473e5aaed7a85a030c",
".git/objects/d7/c362eb3743b57c7d262b2cd3de52fb3257e8da": "431734f5068c50abc1c76abb74ccd0e2",
".git/objects/fc/50d5fd2cc61c89db49ec5a45912b445839388a": "4e68dd2befe008cf840e91ef343c871a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "5d9d456dbf95c9de6e2182a2ecad6145",
".git/refs/remotes/origin/main": "5d9d456dbf95c9de6e2182a2ecad6145",
"assets/AssetManifest.bin": "69a351b852db7fd3e12046d9b37e5faf",
"assets/AssetManifest.bin.json": "6283b5bb9a01037fa82d385024d6cace",
"assets/AssetManifest.json": "f37ff9f3d7b0edf3687cda5faa7b6832",
"assets/assets/fonts/digital.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/assets/fonts/mine.ttf": "ce23377cb4ba204882665155ff06a180",
"assets/assets/icono.ico": "856e53c26f931509da822e304f9c645e",
"assets/assets/images/bandera.png": "1e8d857108ac09b66b19b23df5fee303",
"assets/assets/images/bomb_ko.png": "09f5e282af03a9f5cd23d168b7d2d0b3",
"assets/assets/images/dificil.png": "67faaf2998a0f25a6ef1e715f380e82e",
"assets/assets/images/facil.png": "346802aa6834f090b225cc480c6c1e39",
"assets/assets/images/ic_bomba.png": "546d183548a0750d9bf2fd0d8f60f79a",
"assets/assets/images/ic_bomba2.png": "5d0224a5ec5b778e6a647d7da3eb927c",
"assets/assets/images/ic_settings.png": "85c97eddbbbb326be08cefca734039aa",
"assets/assets/images/interrogante.png": "76d72c1f81d4a5ba367ca90d41fc3aa2",
"assets/assets/images/medio.png": "331dbdc77e544c31d09a3e0a08cea78e",
"assets/assets/images/mina.png": "8e63a49e8cde4a758e7b0484523bc097",
"assets/assets/images/minatach.png": "1b32196d9b9d71392e52ca691b543166",
"assets/assets/images/ok.png": "3b0b426621eee4d5c1bfae5ef0209da2",
"assets/assets/images/portada.png": "e41a11f67154d5aeba6149f0889d4492",
"assets/assets/rive/play.riv": "e21440957c39977e0a89edde621c74dd",
"assets/assets/sounds/click.mp3": "46a8a0d17cd0883f98279367aa28dbb7",
"assets/assets/sounds/lost.mp3": "77bf90652f14ec2cc2d6eda6b4ba227a",
"assets/assets/sounds/tecla.mp3": "c17d06bc48a1df4604c0e4e2959ca490",
"assets/assets/sounds/win-aplause.mp3": "b5c17b461a607b80007a846a8795faac",
"assets/assets/sounds/win-tromp.mp3": "f5b3189803cfb725076ffe5e59805f2d",
"assets/FontManifest.json": "6f743780aebf863546efeaeee015d932",
"assets/fonts/MaterialIcons-Regular.otf": "e77024fefa805f0e96b263f3374f2c6e",
"assets/NOTICES": "9cf1736766a5c1d4c492b5939a596b3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f32f20c4d854c94e88453b7ad57e7997",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "5f96aa1928bc77a2817bc78d9a03f001",
"icons/Icon-512.png": "abc0411a71193ded194ba65782d1a0b2",
"icons/Icon-maskable-192.png": "5f96aa1928bc77a2817bc78d9a03f001",
"icons/Icon-maskable-512.png": "abc0411a71193ded194ba65782d1a0b2",
"index.html": "5f383043e0c96f4bb04e73b473d42631",
"/": "5f383043e0c96f4bb04e73b473d42631",
"main.dart.js": "3e30bf0b506b48e9ba75b5e262ca4ce9",
"manifest.json": "047cb55e757bdee2220c744256d309e0",
"version.json": "2d9467704e821be7b47ee1cddf95d809"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
