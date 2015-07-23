import Ember from 'ember';

export default Ember.Mixin.create({
	beforeModel: function() {
		var input = this.get('authState.isAuth');
		console.info('not-auth mixin indicates input variable as: ' + input);
		if (!input) {
			// this.controllerFor("environment").set('login', '');
			this.transitionTo('login');
		}
	},
	needs: ["environment"],
	authState: Ember.computed.alias("controllers.environment.model")
});