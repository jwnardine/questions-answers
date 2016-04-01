import DS from 'ember-data';

export default DS.Model.extend({
  questionTitle: DS.attr(),
  questionAuthor: DS.attr(),
  questionContent: DS.attr(),
  answer: DS.attr()
});
