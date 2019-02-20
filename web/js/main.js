/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

/**
 * Example of Require.js boostrap javascript
 */
/* eslint-disable quote-props */

requirejs.config(
  {
    baseUrl: 'js',

    // Path mappings for the logical module names
    // Update the main-release-paths.json for release mode when updating the mappings
    paths:
//injector:mainReleasePaths

{
  "knockout":"libs/knockout/knockout-3.4.2.debug",
  "jquery":"libs/jquery/jquery-3.3.1",
  "jqueryui-amd":"libs/jquery/jqueryui-amd-1.12.1",
  "promise":"libs/es6-promise/es6-promise",
  "hammerjs":"libs/hammer/hammer-2.0.8",
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.0",
  "persist":"libs/persist/debug",
  "ojs":"libs/oj/v6.1.0/debug",
  "ojL10n":"libs/oj/v6.1.0/ojL10n",
  "ojtranslations":"libs/oj/v6.1.0/resources",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "customElements":"libs/webcomponents/custom-elements.min",
  "css":"libs/require-css/css"
}

//endinjector
    ,

    // Shim configurations for modules that do not expose AMD
    shim:
    {
      'jquery':
      {
        exports: ['jQuery', '$']
      }
    }
  }
);

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout','ojs/ojchart' ],
  function (oj, ko, $) {
    $(function () {
      function ChartModel() {
          var self = this;
        
        /* toggle button variables */
        self.stackValue = ko.observable('on');
        self.orientationValue = ko.observable('vertical');
        self.dualY = ko.observable('off');
     
        self.splitterValue = ko.observable(0.5);
        
        /* chart data */
        var dualYSeries = [{name: "U", items: [3500, 1000, 1500, 2000, 600]},
                           {name: "People Like U", items: [3700, 1700, 800, 3000, 1000], assignedToY2: "on"}];
    
      
        var dualYGroups = ["F&B", "Entertainment", "Travel", "Shopping","Miscellaneous"];    
   
        self.barSeriesValue = ko.observableArray(dualYSeries);
        self.barGroupsValue = ko.observableArray(dualYGroups);
        
        /* toggle buttons*/
        self.dualYOptions = [
            {id: 'on', label: 'on', value: 'on'},
            {id: 'off', label: 'off', value: 'off'}
        ];
        self.updateDualY = function(event) {
            document.getElementById('splitterPosition').disabled = (event.detail.value === 'off');
        };
      }
       function init() {
        var chartModel = new ChartModel();
          $(
	function(){
            ko.applyBindings(chartModel, document.getElementById('chart-container'));
	}
    );
      }

      // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
      // event before executing any code that might interact with Cordova APIs or plugins.
      if ($(document.body).hasClass('oj-hybrid')) {
        document.addEventListener('deviceready', init);
      } else {
        init();
      }
    });
  }
);
