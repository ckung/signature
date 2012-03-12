require.config({
  paths: {
    "jquery": 'libs/jquery/jquery-min',
    "underscore": 'libs/underscore/underscore',
    "backbone": 'libs/backbone/backbone',
    "json2": "libs/json2/json2",
    "mustache": "libs/mustache/mustache",
    "Backbone.Form": "libs/backbone-forms/backbone-forms",
   //text: 'libs/require/text',
   // order: 'libs/require/order',
    "templates": '../templates',
    "jquery.tools": "libs/jquery.tools",
    "jquery.validate": "libs/jquery.validate",
    
    "jQuery": "libs/jQuery",
    "jQueryUIComponents": "libs/jQueryUIComponents",
    "jQueryValidate": "libs/jQueryValidate",
    "Underscore": "libs/Underscore",
    "Backbone": "libs/Backbone",
    "Templates": "libs/templating/Templates",
    "Mustache": "libs/Mustache",
    "Forms" : "libs/Forms"	
    	
  }

});

require([

  // Load our app module and pass it to our definition function
  'App'

  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
