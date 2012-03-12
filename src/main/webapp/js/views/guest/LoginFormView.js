define(function(require) {

    var $ = require('jQueryValidate');
    var _ = require('Underscore');
    var Backbone = require("Backbone");
    var Templates = require("Templates");
    var loginTemplate = require("text!templates/guest/loginForm.html");
    var User = require("models/User");
    var Login = require("models/Login");
    var MemberHomeView = require("views/home/MemberHomeView");
    var AppState = require("AppState");

    var LoginFormView = Backbone.View.extend({
        el : $("#page"),
        initialize : function() {
            this.model = new Login();
        },
        events : {
            "submit form" : "login",
            "change input" : "inputChanged"
        },
        render : function() {
            this.$el.html(loginTemplate);
            this.$el.find(".login-form").validate({
            	rules: {
            		'email': {
            		 	required: true,
            		 	email: true
            		 },
            		'password': {
            		    required: true,
            		    minlength: 6
            		 }
            	}
            });
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
					// alert('Failed!');
				}
			});
		}
    });

    function bindByInputName(field, targetModel) {
        var data = {};
        data[field.attr('name')] = field.val();
        targetModel.set(data);
    }

    return LoginFormView;
});
