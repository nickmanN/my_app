import Ember from 'ember';

var isAuth = false;

export default Ember.Controller.extend({
	login: '',
	checkLogin: function() {

	  // the current value of the text field
	  var login = this.get('login');
	  if (login !== '') {isAuth = true;};
	  
	  console.info(login);
	}
});