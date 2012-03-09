define(function(require) {
   
    var $ = require('jQuery'),
        _ = require('Underscore'),
    	Backbone = require("Backbone"),
        Templates = require("Templates"),
        loginTemplate = require("text!templates/guest/loginForm.html"),
        User = require("models/User"),
        Login = require("models/Login"),
        MemberHomeView = require("views/home/MemberHomeView"),
        AppState = require("AppState");

	
	var LoginView = Backbone.View.extend({
		el : $("#page"),
		initialize : function() {
			this.model = new Login();
		},
		events : {
			"submit form" : "login",
			"change input" : "inputChanged"
		},
		exampleBind : function(model) {
			//console.log(model);
		},
		render : function() {
			this.$el.html(loginTemplate);
		},
		inputChanged : function(e) {
			bindByInputName($(e.currentTarget), this.model);
		},
		login : function(e) {
			e.preventDefault();

			this.model.authenticate({
				success : function() {
					var user = AppState.get("currentUser", user);
					var view = new MemberHomeView({model:user});
					view.render();
				},
				error : function() {
					//alert('Failed!');
				}
			});
		}
	});

	function bindByInputName(field, targetModel) {
		var data = {};
		data[field.attr('name')] = field.val();
		targetModel.set(data);
	}

	return LoginView;
});
