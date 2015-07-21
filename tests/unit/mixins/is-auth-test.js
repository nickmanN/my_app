import Ember from 'ember';
import IsAuthMixin from '../../../mixins/is-auth';
import { module, test } from 'qunit';

module('Unit | Mixin | is auth');

// Replace this with your real tests.
test('it works', function(assert) {
  var IsAuthObject = Ember.Object.extend(IsAuthMixin);
  var subject = IsAuthObject.create();
  assert.ok(subject);
});
