import Ember from 'ember';

const {get, inject, Route} = Ember;

export default Route.extend({
  ajax: inject.service(),
  model() {
    const item = this.modelFor('item');
    return get(this, 'ajax').findItems(item.kids);
  }
});

