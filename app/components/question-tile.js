import Ember from 'ember';

export default Ember.Component.extend({

  computedContentAuthor: Ember.computed('question.questionTitle', 'question.questionAuthor', function() {
    return this.get('question.questionTitle') + ' || By: ' + this.get('question.questionAuthor');
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
