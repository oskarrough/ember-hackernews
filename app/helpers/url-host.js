import Ember from 'ember';

// Borrowed from https://github.com/vuejs/vue-hackernews-2.0/blob/master/src/filters/index.js
export function urlHost(params/*, hash*/) {
  if (!params[0]) {
    return params;
  }
  const host = params[0].replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = host.split('.').slice(-3);
  if (parts[0] === 'www') {
    parts.shift();
  }
  return parts.join('.');
}

export default Ember.Helper.helper(urlHost);
