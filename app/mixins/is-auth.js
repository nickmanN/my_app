import Ember from 'ember';

export default Ember.Mixin.create({
	beforeModel: function() {
		var input = this.controllerFor("environment").get('isAuthenticated');
		console.info('is-auth mixin indicates input variable as: ' + input);
		if (input) {this.transitionTo('index');}
	}
});