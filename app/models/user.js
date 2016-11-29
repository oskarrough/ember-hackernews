import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('number'),
  karma: DS.attr('number'),
  submitted: DS.attr()
});
