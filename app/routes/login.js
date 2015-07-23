import Ember from 'ember';
import IsAuthMixin from 'my-app/mixins/is-auth';

export default Ember.Route.extend(IsAuthMixin, {
	actions: {
		checkAuth: function () {
			var input = this.controllerFor("environment").get("isAuth");
			console.log(input);
			if (input) {this.transitionTo('index');}
		}
	}
});
