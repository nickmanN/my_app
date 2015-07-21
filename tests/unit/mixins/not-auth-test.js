import Ember from 'ember';
import NotAuthMixin from '../../../mixins/not-auth';
import { module, test } from 'qunit';

module('Unit | Mixin | not auth');

// Replace this with your real tests.
test('it works', function(assert) {
  var NotAuthObject = Ember.Object.extend(NotAuthMixin);
  var subject = NotAuthObject.create();
  assert.ok(subject);
});
