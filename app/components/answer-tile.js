import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(answer) {
      if(confirm('Do you really want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
