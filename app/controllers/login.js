import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		moveToLogin: function () {
        	this.transitionToRoute('index');
    	}
	},
	needs: ["environment"],
	extController: Ember.computed.alias("controllers.environment.model")
});
