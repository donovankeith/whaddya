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

Template.activitiesList.helpers(
    {
        // Return a randomly sorted list of activities.
        // activities: shuffle(activitiesData)

        activities: function() {
            //Retrieve Activities database cursor, convert it to an array of data, then shuffle that array.
            all = shuffle(Activities.find().fetch());

            chunks = [];
            size = 4
            while (all.length > size) {
                chunks.push({ row: all.slice(0, size)});
                all = all.slice(size);
            }
            chunks.push({row: all});
            return chunks;
        }
    }
);