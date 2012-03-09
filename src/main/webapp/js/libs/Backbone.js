define(
    [
         "order!jquery",
         "order!json2",
         "order!underscore",
         "order!backbone"
    ],
    function() {
        return Backbone.noConflict(); 
    }
);