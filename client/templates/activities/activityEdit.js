Template.activityEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentActivityId = this._id;

        var postProperties = {
            title: $(e.target).find('[name=title]').val(),
            url: $(e.target).find('[name=url]').val(),
            icon: $(e.target).find('[name=icon]').val()

        }

        Activities.update(currentActivityId, {$set: activityProperties}, function(error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('activityPage', {_id: currentActivityId});
            }
        });
    },

    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this activity?")) {
            var currentActivityId = this._id;
            Activities.remove(currentActivityId);
            Router.go('activitiesList');
        }
    }
});