define(function(require) {	

	var Backbone = require("Backbone");
	
	var User = Backbone.Model.extend({
	    
	    initialize: function(){
	    },
	    
	    parse: function(data) {
            return data.jobSeeker || data;
        }

	  });
	
	return User;
	
});	