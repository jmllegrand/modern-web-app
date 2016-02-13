/**
 * Created by jmlegrand on 13/02/16.
 */

//var component = require('./component');

var component = require('./app');
var mainDiv = document.createElement('div');

document.body.appendChild(mainDiv);
mainDiv.appendChild(component());
