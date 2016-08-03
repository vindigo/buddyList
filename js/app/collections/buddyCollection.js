define([
  'underscore',
  'backbone',
  'models/buddyModel'
], function(_, Backbone, buddyModel){

	var buddyCollection = Backbone.Collection.extend({
		model: buddyModel,
		initialize: function(){		// Deferred load
			this.deferred = this.fetch();
		}
	});

	// We don't instantiate the collection, as we'll do when we need to create a new instance of it.
  return buddyCollection;
});
