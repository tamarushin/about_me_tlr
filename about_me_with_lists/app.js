'use strict';

var paper = prompt('does tama have a degree?');
// var paper = paper.toUpperCase();

console.log('tamas degree', paper);
if (paper === 'yes' || paper === 'y')  {
  alert ('That\'s right!!');
} else {
  alert ('your wrong, i do!');
}

var hobbies = prompt('does tama have hobbies?');
// var hobbies = hobbies.toUpperCase();

console.log('tamas hobbies', hobbies);

if (hobbies === 'yes' || hobbies === 'y') {
  alert ('i do');
} else {
  alert ('your wrong, i do!');
}

var animal = prompt('is tamas favorite animal a dog?');
// var animal = animal.toUpperCase();

console.log('tamas animal', animal);
if (animal === 'yes' || animal === 'y')  {
  alert ('grrrrrreat!');
} else {
  alert ('your wrong, it is!');
}

var kid = prompt('does tama have a son?');
// var kid = kid.toUpperCase();
console.log('tamas son', kid);
if (kid === 'yes' || kid === 'y')  {
  alert('Nope, a daughter!');
} else {
  alert('Right! I have a daughter!');
}
var number
var counter = 1;

while (number !== 32) {
  number = parseInt(prompt('What is Tamas favorite number?'));

  if(number < 31){
    alert('sorry you guessed too low');
  }else if (number > 33){
    alert('sorry you guessed too high');
  }else if (number === NaN || number === null) {
    alert('please enter a number');
    counter++
  }
}
alert('AWSOME! You picked ' + number)
console.log('counter:', counter);
