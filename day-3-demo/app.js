'use strict';

var number
var counter = 1;

while (number !== 20) {
  number = parseInt(prompt('what is your favorite number'));

  if(number < 20){
      alert('sorry you guessed too low');

  }else if (number>20){
   alert('sorry you guessed too high');
   {else if (number === NaN || number === null) {
     alert('please enter a number');
     }counter++
   }
  }
console.log('counter:', counter)
