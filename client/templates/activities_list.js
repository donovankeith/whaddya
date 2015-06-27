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
        url: 'http://www.traillink.com/trailsearch.aspx?zipcode=90027',
        icon: 'bicycle_filled.png',
        description: ''
    },
    {
        title: 'Go for a Walk',
        url: 'http://www.wikihow.com/Take-a-Walk',
        icon: 'dog_filled.png',
        description: ''
    },
    {
        title: 'Grab a Drink with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA',
        icon: 'drink_filled.png',
        description: ''
    },
    {
        title: 'Cook a Meal',
        url: 'http://www.chow.com/',
        icon: 'chef_filled.png',
        description: ''
    },
    {
        title: 'Grab Coffee with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA#find_desc=Coffee+%26+Tea',
        icon: 'coffee_filled.png',
        description: ''
    },
    {
        title: 'Workout',
        url: 'https://www.youtube.com/watch?v=zwSRF3QkG7Q',
        icon: 'exercise_filled.png',
        description: ''
    }
];

function shuffle(array) {
    // Shuffles array in place.
    // Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

Template.activities_list.helpers(
    {
        // Return a randomly sorted list of activities.
        activities: shuffle(activitiesData)
    }
);