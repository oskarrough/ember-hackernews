import DS from 'ember-data';

export default DS.Model.extend({
  by: DS.attr('string'),
  descendants: DS.attr('number'),
  kids: DS.attr(),
  parts: DS.attr(),
  score: DS.attr('number'),
  parent: DS.attr('number'),
  time: DS.attr('number'),
  title: DS.attr('string'),
  text: DS.attr('string'),
  type: DS.attr('string'),
  url: DS.attr('string'),
});
