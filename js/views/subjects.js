// Views
App.Views.Subjects = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {
    this.collection;
  },
  render: function() {
    this.collection.each(function( Subject ) {
      var subjectView = new App.Views.Subject({ model: Subject });
      $(document.body).append(subjectView.el);
    });
  }
});

var subjectsView = new App.Views.Subjects({ collection: subjectCollection });
subjectsView.render()
