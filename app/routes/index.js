import Ember from 'ember';

  var questions = [{
  id: 1,
  questionTitle: "Why are dogs and cats enemies?",
  questionAuthor: "Ace Ventura",
  questionContent: "I was just wondering because my dog and cat hate eachother.",
  answer: "This question has not yet been answered."
}, {
  id: 2,
  questionTitle: "Which came first, the chicken or the egg?",
  questionAuthor: "Ronald McDonald",
  questionContent: "I need to know because I raise chickens and this seems important.",
  answer: "This question has not yet been answered."
}, {
  id: 3,
  questionTitle: "Who shot JR?",
  questionAuthor: "Patrick Duffy",
  questionContent: "I totally missed the season premiere because my raquetball tournament was on the same night.",
  answer: "This question has not yet been answered."
}];
  export default Ember.Route.extend({
    model() {
      return questions;
    },
});
