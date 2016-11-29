import Ember from 'ember';

const {get, inject} = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),
  model(params) {
    // return this.store.findRecord('item', params.item_id);
    return get(this, 'ajax').request(`item/${params.item_id}.json`);
  },
  afterModel() {
    this.transitionTo('item.comments');
  }
});
