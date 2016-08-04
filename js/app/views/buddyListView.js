define([
  'jquery',
  'underscore',
  'backbone',
  //Main template for this view
  'text!templates/buddyListTemplate.html'
], function($, _, Backbone, buddyListTemplate){

	var buddyListView = Backbone.View.extend({
		el: $('#page'),
		initialize: function(){
      alert("Hello Friend. View initialized.");
    },
		render: function(){
			var data = {};
			//We can add some data to the template here if needed
			this.$el.html( _.template( buddyListTemplate, data ) );
		}
	});

  return new buddyListView();
});
