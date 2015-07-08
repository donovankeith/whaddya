if (Activities.find().count() === 0){
    Activities.insert({
        title: 'See a Show at UCB',
        url: 'https://franklin.ucbtheatre.com/',
        icon: 'noun_theater_501.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert(    {
        title: 'Watch a Documentary on Netflix',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'noun_television_15555.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Learn Meteor.js',
        url: 'http://themeteorbook.com',
        icon: 'noun_mortar-board_32463.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Go for a hike',
        url: 'https://www.google.com/webhp?hl=en#hl=en&q=hiking+trails+near+me&rflfq=1&tbm=lcl',
        icon: 'noun_boot_35776.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Ride Your Bike',
        url: 'http://www.traillink.com/trailsearch.aspx?zipcode=90027',
        icon: 'noun_bike_143283.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Go for a Walk',
        url: 'http://www.wikihow.com/Take-a-Walk',
        icon: 'noun_walk_3516.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Grab a Drink with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA',
        icon: 'noun_bar_21.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Go to Late Night Happy Hour at MessHall',
        url: 'http://www.yelp.com/biz/messhall-los-angeles-2',
        icon: 'noun_cocktail-calendar_62322.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Cook a Meal',
        url: 'http://www.chow.com/',
        icon: 'noun_chef-hat_32675.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert(    {
        title: 'Grab Coffee with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA#find_desc=Coffee+%26+Tea',
        icon: 'noun_coffee_4020.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert(    {
        title: 'Workout',
        url: 'https://www.youtube.com/watch?v=zwSRF3QkG7Q',
        icon: 'noun_dumbbell_22292.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert(    {
        title: 'Improve the Whaddya Wanna App',
        url: 'http://www.WhaddyaWana.com',
        icon: 'noun_programming_143945.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Read a Book',
        url: 'http://www.lapl.org',
        icon: 'noun_book_10733.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Write in your Journal',
        url: 'http://writingexercises.co.uk/subjectgenerator.php',
        icon: 'noun_notebook_11195.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Eat out',
        url: 'http://www.yelp.com/search?find_desc=Restaurants&find_loc=Los+Angeles%2C+CA&ns=1#start=0&attrs=RestaurantsPriceRange2.1,RestaurantsPriceRange2.2',
        icon: 'noun_restaurant_37522.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Order in',
        url: 'http://www.yelp.com/search?find_desc=Restaurants&find_loc=Los+Angeles%2C+CA&ns=1#find_loc=Los+Angeles,+CA+90027&start=0&attrs=PlatformDelivery,RestaurantsPriceRange2.1,RestaurantsPriceRange2.2&ytp_st=delivery&ytp_loc=NK49yCWjtCcAzrjdc6nZuw',
        icon: 'noun_takeout_80606.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Go grocery shopping',
        url: 'https://www.google.com/maps/search/grocery+stores/@34.1257844,-118.2973315,13z/data=!3m1!4b1',
        icon: 'noun_shopping-cart_11952.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });

    Activities.insert({
        title: 'Go to sleep',
        url: 'http://www.wikihow.com/Count-Sheep',
        icon: 'noun_hotel_41621.png',
        timesOfDay: {
            earlyMorning: false,
            morning: true,
            lateMorning: true,
            afternoon: true,
            evening: true,
            night: true,
            lateNight: true,
        }
    });
}