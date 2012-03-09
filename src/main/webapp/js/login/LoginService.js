define(function(require) {	

	var Backbone = require("Backbone"),
		User = require("models/User"),
		UserInfo = require("login/UserInfo"),
        AppState = require("AppState");
	
	var LoginService = {
	    
		login : function(username, password, callbacks) {
			
			var authCallbacks = {
					success : function(data) {
						var userInfo = new UserInfo(data.userInfo);
						userInfo.parse(data);
						userInfo.getJobseeker(function(user){
							AppState.set("currentUser", user);
							callbacks.success();
						});
					},
					error : callbacks.error
			};
			authenticate(username, password, authCallbacks);
		}
	};
	
	function authenticate(username, password, callbacks) {
		var authRequest = {
				"authenticationInfo": {
					"email" : username,
					"password" : password
				}
			};
		
		$.ajax({
			url: "http://localhost:8082/authentication/jobseeker/authenticate", 
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			async: false,
			data: JSON.stringify(authRequest),
			success: callbacks.success,
			error: callbacks.error
		});
	}
	
	return LoginService;
});	