document.body.innerHTML = require('../../html/app.html');
var script = document.createElement('script');
script.src = '/js/app.js';
document.body.appendChild(script);