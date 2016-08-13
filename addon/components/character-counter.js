import Ember from 'ember';
import layout from '../templates/components/character-counter';

export default Ember.Component.extend({
  class: ['character-counter'],
  characterLimit: 0,
  characterCount: 0,
  inputClass: '',
  setup: Ember.on('didInsertElement', function() {
    Ember.$('body').on('keyup.subject', (e) => {
      this.set('characterCount', (this.characterLimit - Ember.$('.' + this.inputClass + '').val().length));
    });
  }),
});
