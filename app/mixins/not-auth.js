import Ember from 'ember';

export default Ember.Mixin.create({
	beforeModel: function() {
		var input = this.get('authState.isAuth');
		if (!input) {this.transitionTo('login');};
	},
	needs: ["environment"],
	authState: Ember.computed.alias("controllers.environment.model")
});