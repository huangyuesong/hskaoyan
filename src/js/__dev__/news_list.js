document.body.innerHTML = require('../../html/news_list.html');
var script = document.createElement('script');
script.src = '/js/news_list.js';
document.body.appendChild(script);