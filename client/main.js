function randomColor(){
    random_colors = [
        '#334D5C',
        '#45B29D',
        '#EFC94C',
        '#E27A3F',
        '#DF5A49'
    ]
    i = Math.floor(Math.random() * random_colors.length);
    jQuery('#random-bg').css('background-color',random_colors[i]);
}

jQuery(document).ready(function(){
    randomColor();
    var t = setInterval(randomColor,10000);
});