var activitiesData = [
    {
        title: 'See a Show at UCB',
        url: 'https://franklin.ucbtheatre.com/',
        icon: 'balloon.png',
        description: 'descriptionGoesHere',
    },
    {
        title: 'Watch a Documentary on Netflix',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'bicycle.png',
        description: 'descriptionGoesHere'
    },
    {
        title: 'Learn Meteor.js',
        url: 'http://themeteorbook.com',
        icon: 'chat.png',
        description: 'descriptionGoesHere'
    },
    {
        title: 'See a show at UCB',
        url: 'https://franklin.ucbtheatre.com/',
        icon: 'combat.png',
        description: 'descriptionGoesHere',
    },
    {
        title: 'Watch a documentary on Netflix',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'dog.png',
        description: 'descriptionGoesHere'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        icon: 'cupcake.png',
        description: 'descriptionGoesHere'
    }
];

Template.activities_list.helpers(
    {
        activities: activitiesData
    }
);