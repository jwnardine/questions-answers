import Ember from 'ember';

  var questions = [{
  id: 1,
  questionTitle: "Why are dogs and cats enemies?",
  questionsAuthor: "Ace Ventura",
  questionContent: "I was just wondering because my dog and cat hate eachother.",
  answer: "Answer"
}, {
  id: 2,
  questionTitle: "Which came first, the chicken or the egg?",
  questionsAuthor: "Ronald McDonald",
  questionContent: "I need to know because I raise chickens and this seems important.",
  answer: "Answer"
}, {
  id: 3,
  questionTitle: "Who shot JR?",
  questionsAuthor: "Patrick Duffy",
  questionContent: "I totally missed the season premiere because my raquetball tournament was on the same night.",
  answer: "Answer"
}];
  export default Ember.Route.extend({
    model() {
      return questions;
    },
});
