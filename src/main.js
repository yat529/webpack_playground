import './style/style.css';
import imgUrl from './img/vue-logo.png';
import { app } from './js/dom.js';



let title = document.createElement('h3');
title.innerText = "Hello World!";
title.classList.add('AMTitle');

let logo = new Image();
logo.src = imgUrl;
logo.classList.add('logo');

let bg = document.createElement('div');
bg.classList.add('bg');

app.appendChild(title);
app.appendChild(logo);
app.appendChild(bg);

