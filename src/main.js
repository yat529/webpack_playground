require('./style.css');

const $ = require('jquery');

$(document).ready(function(){

    var app = $('#app');

    app.html('Hello World!');
    app.addClass('AMTitle');

});