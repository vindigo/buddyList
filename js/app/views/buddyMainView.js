define([
  'jquery',
  'underscore',
  'backbone',
  //Main template for this view
  'text!templates/buddyMainTemplate.html'
], function($, _, Backbone, mainTemplate){

	var mainView = Backbone.View.extend({
		el: $('#page'),
		initialize: function(){},
		render: function(){
			var data = {};
			//We can add some data to the template here if needed
			this.$el.html( _.template( mainTemplate, data ) );
		}
	});

  return new mainView();
});
