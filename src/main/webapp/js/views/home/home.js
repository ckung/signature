define(function(require) {
	var $ = require("jQuery"),
		Backbone = require("Backbone"),
		mainHomeTemplate = require("text!templates/home/main.html");
	

	var mainHomeView = Backbone.View.extend({
		el: $("#page"),
		render: function(){
		this.$el.html(mainHomeTemplate);
		}
	});
	return new mainHomeView;
});
