Activities = new Mongo.Collection("activities");

if (Meteor.isClient) {
    //This code only runs on the client.

    Template.body.helpers({
        activities: function () {
            // Only retreive non-hidden tasks.
            if (Session.get("hideCompleted")) {
                return Activities.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
            }

            // None hidden, show 'em all.
            else {
                return Activities.find({}, {sort: {createdAt: -1}});
            }
        },

        incompleteCount: function() {
            return Activities.find({checked: {$ne: true}}).count();
        }
    });

    Template.body.events({
        "submit .new-activity": function (event) {
            //This function is called when the "new activity" form is completed.

            var title = event.target.title.value;
            var description = event.target.description.value;

            Activities.insert({
                title: title,
                description: description,
                createdAt: new Date() //Current time
            });

            //Clear form
            event.target.title.value = "";
            event.target.description.value = "";

            //Prevent default form submit
            return false;
        },

        "change .hide-completed input": function(event) {
            Session.set("hideCompleted", event.target.checked);
        }
    });

    Template.activity.events({
        //Respond to any user interactions with an activity.

        //Checkmark toggle button.
        "click .toggle-checked": function () {
            //Set the property to the opposite of it's current value.
            Activities.update(this._id, {$set: {checked: ! this.checked}});
        },

        //Delete "X" button.
        "click .delete": function () {
            Activities.remove(this._id);
        }
    });
}