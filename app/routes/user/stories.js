import Ember from 'ember';

const {get, inject, Route} = Ember;

export default Route.extend({
  ajax: inject.service(),
  model() {
    const user = this.modelFor('user');
    const stories = user.submitted.slice(0, 5);
    return get(this, 'ajax').findItems(stories);
  }
});

