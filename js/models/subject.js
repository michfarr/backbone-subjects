App.Models.Subject = Backbone.Model.extend({
  defaults: {
    id: 1,
    name: 'Lorem Ipsum',
    parentId: 2,
    parentIndex: null
  },
  validate: function( attrs, opts ) {
    if (attrs.id < 0) {
      console.log('Invalid id')
    }
    if (!attrs.name) {
      console.log('Invalid name')
    }
    if (attrs.parentId < 1) {
      console.log('Invalid parentId')
    }
  }
});
