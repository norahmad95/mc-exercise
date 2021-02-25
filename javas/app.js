'use strict';
function welcome() {
  alert('welcome .. to our exercise');
}

const welex = prompt('say how you are');

welcome();
localStorage.getItem(JSON.stringify(welex));
