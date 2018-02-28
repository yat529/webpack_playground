import './style/style.css';
import imgUrl from './img/vue-logo.png';
import im from './js/gridbox.js';

var app = im('#app');

var title = im(document.createElement('h3'));
title.text("Hello World!");
title.addClass('AMTitle');

var logo = new Image();
logo.src = imgUrl;
im(logo).addClass('logo');

var bg = im(document.createElement('div'));
bg.addClass('bg');

app.addChild(title);
app.addChild(logo);
app.addChild(bg);

