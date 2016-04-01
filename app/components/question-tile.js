import Ember from 'ember';

  <li>Question: {{question.questionTitle}}</li>
  <li>Submitted by: {{question.questionAuthor}}</li>
  <li>Content: {{question.questionContent}}</li>
  <li>Answer: {{question.answer}}</li>
  <hr>
  
export default Ember.Component.extend({

});
