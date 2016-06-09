document.body.innerHTML = require('../../html/course_list.html');
var script = document.createElement('script');
script.src = '/js/course_list.js';
document.body.appendChild(script);