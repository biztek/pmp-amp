/*
 * Copyright 2017 Biztek Innovations Inc.
 */

module.exports = {
  staticFileGlobs: [
    'img/**.*',
    'offline.html'
  ],
  runtimeCaching: [{
    urlPattern: '*',
    handler: (request, values, options) => {
      // If this is NOT a navigate request, such as a request for
      // an image, use the cacheFirst strategy.
      if (request.mode !== 'navigate') {
        return toolbox.cacheFirst(request, values, options);
      }

      // If it's a request for content, use the networkFirst
      // strategy, and send an offline page if both network and
      // cache fail.
      return toolbox.networkFirst(request, values, options).catch(() => {
        return caches.match('/offline.html', {ignoreSearch: true});
      });      
    }
  }, {
    urlPattern: /cdn\.ampproject\.org/,
    handler: 'fastest'
  }],
  importScripts: ['service-worker-import.js']
};
