import Ember from 'ember';

export function questionPriority(params/*, hash*/) {
  var questionPriority = params[0].get('priority');

  if (questionPriority >= 7){
    return "high";
  } else if (questionPriority >= 4){
    return "medium";
  } else if (questionPriority >= 0){
    return "low";
  }
}

export default Ember.Helper.helper(questionPriority);
