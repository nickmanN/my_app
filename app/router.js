import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
  //this should specify root URL
  //rootURL: '/login/'
});

Router.map(function() {
    this.route('index', { path: '/' });
    this.route('login', { path: '/login'} );
    this.route('content', { path: '/content'});
    this.route('about', { path: '/about'})
;});

export default Router;