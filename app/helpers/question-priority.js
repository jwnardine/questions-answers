import Ember from 'ember';

export function questionPriority(params/*, hash*/) {
  var questionPriority = params[0].get('priority');

  if (questionPriority >= 7){
    return "HIGH";
  } else if (questionPriority >= 4){
    return "MEDIUM";
  } else if (questionPriority >= 0){
    return "LOW";
  }
}

export default Ember.Helper.helper(questionPriority);
