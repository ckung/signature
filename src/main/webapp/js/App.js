define(function(require) {

    var Router = require("Router");

    var initialize = function() {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});
