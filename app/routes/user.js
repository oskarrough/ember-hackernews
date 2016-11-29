import Ember from 'ember';

const {get, inject} = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),
  model(params) {
    return get(this, 'ajax').request(`user/${params.user_id}.json`);
  }
});
