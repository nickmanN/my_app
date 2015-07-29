import Ember from 'ember';

export default Ember.Controller.extend({
	isAuthenticated: false,
	login: '',
	checkLogin: function() {

		// the current value of the text field
		var login = this.get('login');
		login !== '' ? this.set('isAuthenticated', true) : this.set('isAuthenticated', false);

		console.info('isAuthenticated variable state: ' + this.isAuthenticated);
		console.info('login field: ' + this.login);

		return this.get('isAuthenticated');

	}.observes('login').on('init')
});