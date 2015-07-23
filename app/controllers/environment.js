import Ember from 'ember';

// var isAuth = false;

export default Ember.Controller.extend({
	isAuth: false,
	login: '',
	checkLogin: function() {

		// the current value of the text field
		var login = this.get('login');
		login !== '' ? this.set('isAuth', true) : this.set('isAuth', false);

		console.info(this.isAuth);
		console.info(this.login);

	}.observes('login').on('init')
});