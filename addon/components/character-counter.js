import Ember from 'ember';
import layout from '../templates/components/character-counter';

export default Ember.Component.extend({
  class: ['character-counter'],
  characterLimit: 0,
  characterCount: 0,
  inputClass: '',
  isOverLimit: false,
  setup: Ember.on('didInsertElement', function() {
    let inputLength = Ember.$('.' + this.inputClass + '').val().length;
    Ember.$('body').on('keyup', (e) => {
      this.set('characterCount', (this.characterLimit - Ember.$('.' + this.inputClass + '').val().length));
      if(Ember.$('.' + this.inputClass + '').val().length > this.characterLimit){
        this.set('isOverLimit', true);
      }else{
        this.set('isOverLimit', false);
      }
    });
  }),
});
