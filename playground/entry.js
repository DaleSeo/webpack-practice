// require('./style.sass')
// var hello = require('./hello');
// var world = require('./world');
// document.write(hello + ', ' + world + '!');
import './style.sass';
import hello from './hello';
import world from './world';
import _ from 'underscore';
document.write(`${hello}, ${world}!`);
document.write(`Random: ${_.random(0, 100)}!`);