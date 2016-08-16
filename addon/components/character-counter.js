import Ember from 'ember';
import layout from '../templates/components/character-counter';

export default Ember.Component.extend({
  class: ['character-counter'],
  characterLimit: 0,
  
  characterCount: Ember.computed('value', function() {
    return this.get('value').length || 0;
  }),

  isOverLimit: Ember.computed('characterCount', function() {
    return this.get('characterCount') > this.get('characterLimit');
  }),
});
