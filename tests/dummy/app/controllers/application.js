import Ember from 'ember';

export default Ember.Controller.extend({
  theValue: 0,
  actions: {
    changeInput(){
      this.set('theValue', $('#theValue').val());
    }
  }
});
