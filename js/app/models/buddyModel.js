define([
  'underscore',
  'backbone'
], function(_, Backbone){
	var buddyModel = Backbone.Model.extend({
		idAttribute: "uuid",
		//It'll only be used when we are trying to fetch a single object (automatically adds "/[id]")
		defaults: {
			username: "<no name>",
      firstname: "<no firstname>",
      lastname: "<no lastname>",
      status: "<no status>"
		},

    initialize: function () {
      alert("Hello Friend. Model initialized.");
    }

	}); 

	// We don't instantiate the model, as we'll do when we need to create a new instance of it.
  return buddyModel;
});
