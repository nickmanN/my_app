import Ember from 'ember';
import NotAuthMixin from 'my-app/mixins/not-auth';

export default Ember.Route.extend(NotAuthMixin, {
	// actions: {
	// 	checkLogin: NotAuthMixin.beforeModel
	// }
});