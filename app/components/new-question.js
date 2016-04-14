import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        questionTitle: this.get('questionTitle'),
        questionAuthor: this.get('questionAuthor'),
        questionContent: this.get('questionContent'),
        priority: this.get('priority'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
