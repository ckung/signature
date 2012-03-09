define(function(require) {
    
    var $ = require("jQuery"),
        Backbone = require("Backbone"),
        Underscore = require("Underscore"),
        jobsCollection = require("collections/jobs"),
        jobListTemplate = require("text!templates/guest/jobList.html");

	var jobListView = Backbone.View.extend({
		el: $("#page"),
		initialize: function(){
			this.collection = jobsCollection;
			this.collection.bind("add", this.exampleBind);
			this.collection = jobsCollection.add({ name: "Director of Sales"});
			this.collection = jobsCollection.add({ name: "UX Designer"});
			this.collection = jobsCollection.add({ name: "Project Manager"});
		},
		exampleBind: function( model ){
			//console.log(model);
		},
		render: function(){
			var data = {
			   projects: this.collection.models,
			   _: _
			};
			var compiledTemplate = _.template( jobListTemplate, data );
			$("#page").html( compiledTemplate );
		}
	});
	return new jobListView;
});