Activities = new Mongo.Collection("activities");

if (Meteor.isClient) {
    //This code only runs on the client.

    Template.body.helpers({
        activities: function () {
            return Activities.find({});
        }
    });
}