// import _ from 'lodash'; 
var _ = require('lodash');
import printMe from './print.js'
// import './style.css';
// import icon from './icon.png';
// import data from './data.xml';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML='Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  /*element.classList.add('hello');

  var img = new Image();
  img.src = icon;

  element.appendChild(img);

  console.log('data.xml:',data);*/

  return element;
}

document.body.appendChild(component());