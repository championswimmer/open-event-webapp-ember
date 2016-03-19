import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'session_id',
  modelNameFromPayloadKey: function(payloadKey) {
    return payloadKey;
  }
});
