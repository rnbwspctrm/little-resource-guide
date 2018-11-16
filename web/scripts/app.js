// Add license.
(function() {
  'use strict';

  const app = {
    isLoading: true,
    addDialog: document.querySelector('.dialog-container'),
    spinner: document.querySelector('.loader'),
    // container: document.querySelector('.main'),
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all data
    // app.updateData();
  });

  document.getElementById('butSelCat').addEventListener('click', function() {
    // Show Category
  });

  document.getElementById('butSelCancel').addEventListener('click', function() {
    // Close the select category box
    app.toggleSelCategory(false);
  });


  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the select category dialog.
  app.toggleSelCategory = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  // Updates all data
  app.updateData = function(data) {
    // if ('caches' in window) {
    //   /*
    //    * Check if the service worker has already cached this city's weather
    //    * data. If the service worker has the data, then display the cached
    //    * data while the app fetches the latest data.
    //    */
    //   caches.match(url).then(function(response) {
    //     if (response) {
    //       response.json().then(function updateFromCache(json) {
    //         var results = json.query.results;
    //         results.key = key;
    //         results.label = label;
    //         results.created = json.query.created;
    //         app.updateForecastCard(results);
    //       });
    //     }
    //   });
    // }
    // // Fetch the latest data.
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = function() {
    //   if (request.readyState === XMLHttpRequest.DONE) {
    //     if (request.status === 200) {
    //       var response = JSON.parse(request.response);
    //       var results = response.query.results;
    //       results.key = key;
    //       results.label = label;
    //       results.created = response.query.created;
    //       app.updateDisplayedData(results);
    //     }
    //   } else {
    //     // Return the initial weather forecast since no data is available.
    //     app.updateForecastCard(initialWeatherForecast);
    //   }
    // };
    // request.open('GET', url);
    // request.send();
    //   if (app.isLoading) {
    //   app.spinner.setAttribute('hidden', true);
    //   app.container.removeAttribute('hidden');
    //   app.isLoading = false;
    // }
  };


  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/


  // Update all data
  app.updateDisplayedData = function() {

  };

  /************************************************************************
   *
   * Code required to start the app
   *
   * NOTE: To simplify this codelab, we've used localStorage.
   *   localStorage is a synchronous API and has serious performance
   *   implications. It should not be used in production applications!
   *   Instead, check out IDB (https://www.npmjs.com/package/idb) or
   *   SimpleDB (https://gist.github.com/inexorabletash/c8069c042b734519680c)
   ************************************************************************/

  // TODO add startup code here
  app.storedData = {}; // get IDB data
  if (app.storedData) {
    // Load and display data
  } else {
    /* The user is using the app for the first time */
  }

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
