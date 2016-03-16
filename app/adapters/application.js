import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'data',
  modelNameFromPayloadKey: function(payloadKey) {
    console.log(payloadKey);
    return payloadKey;
  }
});
