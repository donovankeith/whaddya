if(Meteor.isClient){
    Template.body.helpers({
        timesOfDay: [
            {timeOfDay: "Early Morning"},
            {timeOfDay: "Morning"},
            {timeOfDay: "Late Morning"},
            {timeOfDay: "Afternoon"},
            {timeOfDay: "Evening"},
            {timeOfDay: "Night"},
            {timeOfDay: "Late Night"}
        ]
    });
}
