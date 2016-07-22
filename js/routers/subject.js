// Router
App.Router = Backbone.Router.extend({
  routes: {
    '':         'index',
    'selected': 'selected'
  },
  index: function() {
    console.log('index');
  },
  selected: function() {
    console.log('selected');
  }
});

var newRouter = new App.Router;
Backbone.history.start();
