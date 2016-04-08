import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  computedContentAuthor: Ember.computed('question.questionTitle', 'question.questionAuthor', function() {
    return this.get('question.questionTitle') + ' || By: ' + this.get('question.questionAuthor');
  }),

  actions: {
    addToFavorites(favorite) {
      this.get('favoriteQuestions').add(favorite);
    },

    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
