define(function(require) {	

	var Backbone = require("Backbone"),
		LoginService = require("login/LoginService");
	
	var Login = Backbone.Model.extend({
	    
		authenticate : function(callbacks) {
			var username = this.get("username");
			var password = this.get("password");
			LoginService.login(username, password, callbacks);
		}
	});
	
	return Login;
});	