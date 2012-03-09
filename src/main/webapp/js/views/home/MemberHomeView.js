define(function(require) {
   
    var $ = require('jQuery'),
        _ = require('Underscore'),
    	Backbone = require("Backbone"),
        Templates = require("Templates"),
        memberHomeTemplate = require("text!templates/home/memberHome.html");

	
	var MemberHomeView = Backbone.View.extend({
		el : $("#page"),
		initialize : function() {
		},
		render : function() {
			Templates.render({
				container: this.el,
				model: this.model,
				template: memberHomeTemplate,
			});
		}
	});

	return MemberHomeView;
});
