Template.activitySubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var activity = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            icon: $(e.target).find('[name=icon]').val()
        };

        activity._id = Activities.insert(activity);
        Router.go('activityPage', activity);
    }
});