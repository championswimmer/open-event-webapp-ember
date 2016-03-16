import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speakers', function() {
    this.route('speaker', { path: '/speakers/:speaker_id'});
  });
  this.route('sessions', function() {
    this.route('session', { path: '/sessions/:session_id'});
  });
  this.route('tracks', function() {
    this.route('track', { path: '/tracks/:track_id'});
  });
});

export default Router;
