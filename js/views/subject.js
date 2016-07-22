// Views
App.Views.Subject = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .select': 'selectSubject'
  },
  selectSubject: function() {
    this.$el.toggleClass('selected');
    console.log('Click action fired');
  },
  newTemplate: _.template($('#subjectTemplate').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.newTemplate(this.model.toJSON()));
  }
});
