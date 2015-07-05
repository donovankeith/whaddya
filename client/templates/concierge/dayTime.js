function dayOfWeek(){
    // Return day of week. e.g. Monday

    var today = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[ today.getDay() ];
    return day;
}

function timeOfDay(){
    // Return colloquial phrasing of timeOfDay:
    // Early Morning, Morning, Mid Morning, Afternoon, Evening, Night

    var now = new Date();
    var hours = now.getHours();

    //Early Morning: 5am - 8am
    if ( (hours >= 5) && (hours <= 8) )
        return "Early Morning"

    //Morning: 8:01am - 10am
    else if (hours < 10)
        return "Morning"

    //Mid Morning: 10:01am - 12:00pm
    else if (hours < 12)
        return "Late Morning"

    //Afternoon: 12:01pm - 5pm
    else if (hours < 17)
        return "Afternoon"

    //Evening: 5:01pm - 9pm
    else if (hours < 21)
        return "Evening"

    //Night: 9:01pm - 11pm
    else if (hours < 23)
        return "Night"

    //Late Night: 11pm - 4:49am
    else
        return "Late Night"
}

Template.dayTime.helpers(
    {
        dayOfWeek: dayOfWeek(),
        timeOfDay: timeOfDay()
    }
);