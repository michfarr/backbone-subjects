(function () {
    var App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {},

    };

    // Routers
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

    // Models
    App.Models.Subject = Backbone.Model.extend({
        defaults: {
            id: null,
            subject: '',
            parent_subject_id: null
        },
        validate: function( attrs, opts ) {
            if (attrs.id < 0) {
                console.log('Invalid id')
            }
            if (!attrs.subject) {
                console.log('Invalid subject')
            }
            if (attrs.parent_subject_id < 1) {
                console.log('Invalid parentId')
            }
        }
    });

    // Collections
    App.Collections.Subject = Backbone.Collection.extend({
        model: App.Models.Subject,
        url: "source/subjects.json",
        initialize: function() {
            console.log("Subject Collection created");
        }
    });

    // Collection instance
    var subjectCollection = new App.Collections.Subject();
    subjectCollection.fetch();

    // Views
    // - Subject View
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

    // - Subjects View
    App.Views.Subjects = Backbone.View.extend({
        tagName: 'ul',
        initialize: function() {
            this.collection;
            this.listenTo(this.collection,"sync",this.onSync)
        },
        onSync: function() {
            this.render();
        },
        render: function() {
            this.collection.each(function( Subject ) {
                var subjectView = new App.Views.Subject({ model: Subject });
                $(document.body).append(subjectView.el);
            });

            this.$el.css({
              'list-style-type' : 'none'
            });

            return this
        }
    });

    var subjectsView = new App.Views.Subjects({ collection: subjectCollection });
    subjectsView.render()

})();
