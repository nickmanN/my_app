import Ember from 'ember';

export default Ember.Controller.extend({
	name: function () {
		return 'Roman';
	}.property(),
	adress: function () {
		return window.location.href;
	},
	needs: "isAuth",
	isAuth: Ember.computed.alias("mixins.is-auth.model")
});