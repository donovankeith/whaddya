//Publish the complete Activities collection, so the client can download it.
Meteor.publish('activities', function(){
    return Activities.find();
});