import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'https://hacker-news.firebaseio.com/',
  namespace: '/v0',

  findSome(endpoint, howMany = 30) {
    return this.request(`${endpoint}.json`).then(data => {
      return data.slice(0, howMany);
    }).then(ids => this.findItems(ids));
  },

  findItems(ids) {
    const requests = ids.map(id => this.request(`item/${id}.json`));
    return Ember.RSVP.all(requests);
  }
});
