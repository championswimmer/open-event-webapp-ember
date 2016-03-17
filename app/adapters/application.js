import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.baseURL,
  namespace: 'data',
  modelNameFromPayloadKey: function(payloadKey) {
    console.log(payloadKey);
    return payloadKey;
  }
});
