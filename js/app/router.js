define([
	// Libraries to load
  'jquery',
  'underscore',
  'backbone',
  // Views to load
  'views/buddyListView',
  'views/buddyDetailView',
  'views/buddyMainView'
], function($, _, Backbone, buddyListView, buddyDetailView, buddyMainView){
	// All of the dependencies in the array above become parameters of the function to be managed
	var AppRouter = Backbone.Router.extend({
		routes: {
      'buddies': 'showBuddyList',
      'buddies/:id': 'showBuddyDetail',
			// Default
			'*actions': 'defaultAction'
		},

    showBuddyList: function () {
      buddyListView.render();
    },

    showBuddyDetail: function () {
      buddyDetailView.render();
    },

		defaultAction: function(actions) {
			buddyListView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

  return {
  	initialize: initialize
  };
});
