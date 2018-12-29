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
    "url": "2018/12/29/growth-stages/index.html",
    "revision": "559b5f46e63ff5a5e4722b248292a07b"
  },
  {
    "url": "2018/12/29/voice/index.html",
    "revision": "a0daf99f023d7d790668abfd8e26fcec"
  },
  {
    "url": "2019/01/01/super-simple-annual-planning/index.html",
    "revision": "665edbba8af702f0a6bf947029a53a4d"
  },
  {
    "url": "404.html",
    "revision": "68c30e42df1ddb2139122b5ab5886670"
  },
  {
    "url": "about/index.html",
    "revision": "25f0d1b128978d7bc368812b1da90bb7"
  },
  {
    "url": "assets/css/0.styles.b843839c.css",
    "revision": "5dba60dd957d0cf28d01cc62f740d45b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d57999b5.js",
    "revision": "f90044ca8247e845780ff675fa3ea51f"
  },
  {
    "url": "assets/js/2.5f221f6b.js",
    "revision": "6468698cd6da1c7699c3e99067e8d78e"
  },
  {
    "url": "assets/js/3.c4b567a0.js",
    "revision": "ce857ad47dcc7f009647208d7719971e"
  },
  {
    "url": "assets/js/4.d7d74202.js",
    "revision": "4e6021161618390405f888b51ded6a96"
  },
  {
    "url": "assets/js/5.08db820b.js",
    "revision": "2082ce304cbdd874e7b5c854fac54fd3"
  },
  {
    "url": "assets/js/6.20299449.js",
    "revision": "2fd24c4244951e5931c446a74c800f7d"
  },
  {
    "url": "assets/js/7.96e88d19.js",
    "revision": "65c2b721f382e8a5bfa3736ff0668f3d"
  },
  {
    "url": "assets/js/8.d422027f.js",
    "revision": "96435e777d6cca2fe891de48c8aa9706"
  },
  {
    "url": "assets/js/9.f710e330.js",
    "revision": "97134dfd499601c0ae075b1e8f751262"
  },
  {
    "url": "assets/js/app.1a333508.js",
    "revision": "a6b89aafb022c136d6308804da48c2b9"
  },
  {
    "url": "category/business.html",
    "revision": "c35f9dc53a64052f51aab68cf7541922"
  },
  {
    "url": "category/index.html",
    "revision": "9740ccebe85cb8a5d0acfe885d275e7b"
  },
  {
    "url": "category/meta.html",
    "revision": "fd956d9456df5011197a6e128a955837"
  },
  {
    "url": "index.html",
    "revision": "7478628d53595d341580d104574569c7"
  },
  {
    "url": "tag/index.html",
    "revision": "2c6b30f67a1545dfcc0795bdc3c20c15"
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
