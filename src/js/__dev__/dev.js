var filename = location.pathname.replace(/.html/, '').substring(1);
filename = filename === '' ? 'index' : filename;
document.body.innerHTML = require('../../html/' + filename + '.html');
var script = document.createElement('script');
script.src = '/js/' + filename + '.js';
document.body.appendChild(script);