import DS from 'ember-data';

export default DS.Model.extend({
  gid: DS.attr(),
  name: DS.attr('string')
});
