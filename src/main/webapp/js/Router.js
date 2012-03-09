define(function(require) {

    //var $ = require("jQuery");
    var Backbone = require("Backbone");
    var MainHomeView = require("views/home/home");
    var LoginView = require("views/guest/LoginView");
    var LoginFormView = require("views/guest/LoginFormView");
    var JobsView = require("views/guest/jobList");

    var AppRouter = Backbone.Router.extend({
        routes: {
	      // Define some URL routes
	      '/login': 'showLogin',
	      '/jobs': 'showJobs',
	      // Default
	      '*actions': 'defaultAction'
        },
        showLogin: function() {
           new LoginFormView().render();
        },
        showJobs: function() {
            new JobsView().render();
        },
        defaultAction: function(actions) {
            // We have no matching route, lets display the home page
            new LoginView().render();
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;
      //  Backbone.history.start({ pushState: true});
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };

});
