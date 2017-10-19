'use strict';

var paper = prompt('does tama have a degree?');
// var paper = paper.toUpperCase();

console.log('tamas degree', paper);
paper = paper.toLowerCase();
if (paper === 'yes' || paper === 'y') {
  alert ('That\'s right!!');
} else {
  alert ('your wrong, i do!');
}

var hobbies = prompt('does tama have hobbies?');
// var hobbies = hobbies.toLowerCase();

console.log('TAMAS HOBBIES', hobbies);

hobbies = hobbies.toLowerCase();
if (hobbies === 'yes' || hobbies === 'y') {
  alert ('i do');
} else {
  alert ('your wrong, i do!');
}

var animal = prompt('is tamas favorite animal a dog?');

console.log('tamas animal', animal);
if (animal === 'yes') {
  alert ('grrrrrreat!');
} else {
  alert ('your wrong, it is!');
}

var kid = prompt('does tama have a son?');

console.log('tamas son', kid);
if (kid === 'yes') {
  alert('nope, a daughter!');
} else {
  alert('Right! I have a daughter!');
}
var num;
var counter = 1;
var maxGuess = 4;

while (num !== 32) {
  num = parseInt(prompt('What is Tamas favorite number?'));
  console.log('tama fav number:', num);

  if(num < 31){
    alert('sorry you guessed too low');
    counter++;
  } else if (num === 32) {
    alert('AWESOME! You picked ' + num);
    break;
    counter++;
  } else if (num > 33){
    alert('sorry you guessed too high');
    counter++;
  }else if (isNaN(num) || num === null) {
    alert('please enter a number');
    counter++;
  } else if (counter >= maxGuess); {
    break;
  }
}
console.log('counter:', counter);
