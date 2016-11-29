import DS from 'ember-data';

// This app doesn't yet use ember-data.
// We need to tell the adapter not to expect a root type object.

export default DS.RESTAdapter.extend({
  host: 'https://hacker-news.firebaseio.com',
  namespace: 'v0',

  buildURL(root, suffix, record) {
    // Otherwise we get HTML back.
    suffix += '.json';

    let url = this._super(root, suffix, record);

    // Don't pluralize `item` type
    if (url.includes('items/')) {
      url = url.replace('items/', 'item/');
    }
    return url;
  },

  pathForType(modelName) {
    // hacker-news api doesn't pluralize types
    return modelName;
  }
});
