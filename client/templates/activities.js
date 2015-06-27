var activitiesData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope',
        description: 'descriptionGoesHere'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com',
        description: 'descriptionGoesHere'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        description: 'descriptionGoesHere'
    }
];

Template.activities.helpers(
    {
        activities: activitiesData
    }
);