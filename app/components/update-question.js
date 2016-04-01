import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        questionTitle: this.get('questionTitle'),
        questionAuthor: this.get('questionAuthor'),
        questionContent: this.get('questionContent'),
        answer: this.get('answer'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
