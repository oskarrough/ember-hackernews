import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('top');
  this.route('new');
  this.route('item', {path: 'item/:item_id'}, function() {
    this.route('comments');
  });
  this.route('jobs');
  this.route('show');
  this.route('ask');
  this.route('user', {path: 'user/:user_id'}, function() {
    this.route('stories');
  });
});

export default Router;
