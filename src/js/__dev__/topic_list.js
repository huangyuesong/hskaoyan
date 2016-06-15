document.body.innerHTML = require('../../html/topic_list.html');
var script = document.createElement('script');
script.src = '/js/topic_list.js';
document.body.appendChild(script);