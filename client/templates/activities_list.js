var activitiesData = [
    {
        title: 'See a Show at UCB',
        url: 'https://franklin.ucbtheatre.com/',
        icon: 'mask_filled.png',
        description: '',
    },
    {
        title: 'Watch a Documentary on Netflix',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'movie_filled.png',
        description: ''
    },
    {
        title: 'Learn Meteor.js',
        url: 'http://themeteorbook.com',
        icon: 'book_filled.png',
        description: ''
    },
    {
        title: 'Go for a hike',
        url: 'https://www.google.com/webhp?hl=en#hl=en&q=hiking+trails+near+me&rflfq=1&tbm=lcl',
        icon: 'compass_filled.png',
        description: '',
    },
    {
        title: 'Ride Your Bike',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'bicycle_filled.png',
        description: ''
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        icon: 'book_filled.png',
        description: ''
    }
];

Template.activities_list.helpers(
    {
        activities: activitiesData
    }
);