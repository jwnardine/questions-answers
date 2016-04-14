import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save1() {
      var params = {
        answerContent: this.get('answerContent') ? this.get('answerContent') : "",
        answerAuthor: this.get('answerAuthor') ? this.get('answerAuthor') : "",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
