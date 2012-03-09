define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/job'
], function($, _, Backbone, jobModel){
  var projectsCollection = Backbone.Collection.extend({
    model: jobModel,
    initialize: function(){

    }

  });

  return new projectsCollection;
});