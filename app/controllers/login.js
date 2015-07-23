import Ember from 'ember';

export default Ember.Controller.extend({
	// needs: "notAuth",
	// notAuth: Ember.computed.alias("mixins.not-auth.model")
	needs: ["environment"],
	extController: Ember.computed.alias("controllers.environment.model")
});
