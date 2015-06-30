Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('activities'); }
});

Router.route('/', {name: 'activitiesList'});
Router.route('/activities/:_id', {
    name: 'activityPage',
    data: function() { return Activities.findOne(this.params._id); }
});

Router.route('/submit', {name: 'activitySubmit'});

// Go to 404 if user fails to enter a valid Activity ID
Router.onBeforeAction('dataNotFound', {only: 'activityPage'});