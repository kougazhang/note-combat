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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4beea8648ce02002a8a94b4c728addc2"
  },
  {
    "url": "assets/css/0.styles.a6d5ca2c.css",
    "revision": "dfbc9b9f0d1994337286164aa3d25d9d"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.de95ab4b.js",
    "revision": "208b0120ee5af1e8677ebc70bc2a56c6"
  },
  {
    "url": "assets/js/11.2732bc88.js",
    "revision": "a36880c0f7e64aa44459c2c50d94b230"
  },
  {
    "url": "assets/js/12.5b09f1b2.js",
    "revision": "0930b5541d15ac2a25153c463252fcbf"
  },
  {
    "url": "assets/js/13.207504f5.js",
    "revision": "2175885c999ecea8e25390fa3eff1b2f"
  },
  {
    "url": "assets/js/14.01e80ac0.js",
    "revision": "874355e1c9fc341e9d090b2808465146"
  },
  {
    "url": "assets/js/2.b39fe0e0.js",
    "revision": "a297f3a9aadcf2e59c5e30053d19210a"
  },
  {
    "url": "assets/js/3.1304d574.js",
    "revision": "9afbb662047e6f49fdaf02bfdbf04f7f"
  },
  {
    "url": "assets/js/4.15eeb5a2.js",
    "revision": "94acc1473cda8127e8c777dae8cd1344"
  },
  {
    "url": "assets/js/5.d1fce9c1.js",
    "revision": "a8b342bf094ecfb66e45512fadb793af"
  },
  {
    "url": "assets/js/6.e7e2fc5d.js",
    "revision": "8f5868925bb3beaced25ec52941b5d4d"
  },
  {
    "url": "assets/js/7.0b62e768.js",
    "revision": "4c786cd21f17ccc27ea1669336b0f77a"
  },
  {
    "url": "assets/js/8.a9fb7cb2.js",
    "revision": "0debd7c07f7a9a22d40d35c6f96c8beb"
  },
  {
    "url": "assets/js/9.e401aceb.js",
    "revision": "fe013e16fb74a4f931f21918e408122f"
  },
  {
    "url": "assets/js/app.a56686aa.js",
    "revision": "28a89c81debd57455273e39ec2a2659d"
  },
  {
    "url": "docker/index.html",
    "revision": "972f7df1b568179127920ab78f8a7197"
  },
  {
    "url": "gitlab/cicd/index.html",
    "revision": "77e88d24f92e0cee5fb3af410e5888e4"
  },
  {
    "url": "gitlab/index.html",
    "revision": "15cf80bb0335bf3810b317f3e68278bb"
  },
  {
    "url": "index.html",
    "revision": "b966072e182fc490e66653f2d222ac5d"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "navigation.html",
    "revision": "11aceb3d58fd2c2135d62f15adb99323"
  },
  {
    "url": "spring/index.html",
    "revision": "33f99833c8e8ccf3f03a9750062c76b2"
  }
].concat(self.__precacheManifest || []);
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
