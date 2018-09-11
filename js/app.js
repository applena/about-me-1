'use strict';

var correct = 'correct answer: ';

var mabelQ = prompt('What\' my dog\'s name?');
var mabelA = mabelQ.toUpperCase();
var correctMabel = 'MABEL';
  console.log(mabelA);
  console.log(correct + correctMabel);

  if(mabelA === correctMabel){
    alert('Ding, ding, ding!');
  }else{
    alert('nope! You\'re 0 for 1');
  }

var signQ = prompt('What\'s my sign?');
var signA = signQ.toUpperCase();
var correctSign = 'TAURUS';
  console.log(signA);
  console.log(correct + correctSign);

    if(signA === correctSign){
      alert('You know me so well!');
    }else{
      alert('noooo');         
    } 

var animalQ = prompt('If I were another species what would I want to be?');
var animalA = animalQ.toUpperCase();
var correctAnimal = 'DOLPHIN';
  console.log(animalA);
  console.log(correct + correctAnimal);

  if(animalA === correctAnimal ){
    alert('Booooyow! you got it');
  }else{
    alert(':(');
  }

var rockQ = prompt('Do I like rock and roll?');
var rockA = rockQ.toUpperCase();
  console.log(rockA);
  console.log(correct + 'yes');

  if(rockA === 'YES' || rockA === 'YEA' || rockA === 'YA' || rockA === 'Y'){
    alert('yaaaas, I love rock n\' roll');
  }else{
    alert('I love rock n\' roll');
  }
