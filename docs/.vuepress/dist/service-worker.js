/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1969/12/31/voice/index.html",
    "revision": "88b4f1647de526135a8459844e1dc797"
  },
  {
    "url": "404.html",
    "revision": "5d25ce0e8c0a0c26080a4bf5033d4962"
  },
  {
    "url": "about/index.html",
    "revision": "af38115f675f92887d5326ea657e94b3"
  },
  {
    "url": "assets/css/0.styles.86661577.css",
    "revision": "84d209f8c0902e93edbf209b8a81028f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4854c7e8.js",
    "revision": "19f330fb0db25e8dc959a1eed14f155e"
  },
  {
    "url": "assets/js/3.0b513971.js",
    "revision": "919a58d37790eff21c0a9e39ea42a982"
  },
  {
    "url": "assets/js/4.66fc9806.js",
    "revision": "bd0893f0c4805e7a709c037cc18d7a3e"
  },
  {
    "url": "assets/js/5.8af2a4aa.js",
    "revision": "c6c756e7a57f94f1aa02e003ff9d6790"
  },
  {
    "url": "assets/js/6.7ba471b5.js",
    "revision": "ce6117b17ee55abd2684a42813c92f40"
  },
  {
    "url": "assets/js/7.42a0cdc5.js",
    "revision": "00422d2373b313e5dffb51d9a1622c23"
  },
  {
    "url": "assets/js/8.6b142dba.js",
    "revision": "a28f5498a461c491bcc1b7b1ca2e926c"
  },
  {
    "url": "assets/js/app.943bc065.js",
    "revision": "205e57d92ae1a27ec03d6f64e16f7c08"
  },
  {
    "url": "category/index.html",
    "revision": "5d25ce0e8c0a0c26080a4bf5033d4962"
  },
  {
    "url": "index.html",
    "revision": "14f702de514ee00614d556d7874ae10a"
  },
  {
    "url": "tag/index.html",
    "revision": "1c92357c359454386457e9b92ac5d9b7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
