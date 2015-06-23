Activities = new Mongo.Collection("activities");

if (Meteor.isClient) {
    //This code only runs on the client.

    Template.body.helpers({
        activities: function () {
            return Activities.find({});
        }
    });

    Template.body.events({
        "submit .new-activity": function (event) {
            //This function is called when the "new activity" form is completed.

            var title = event.target.title.value;

            Activities.insert({
                title: title,
                createdAt: new Date() //Current time
            });

            //Clear form
            event.target.title.value = "";

            //Prevent default form submit
            return False;
        }
    })
}