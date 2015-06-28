Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',

    // For all routes in the site
    // Download the full activities database.
    waitOn: function() { Meteor.subscribe('activities'); }
});

Router.route('/', {name: 'activitiesList'});