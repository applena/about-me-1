'use strict';

var correct = 'correct answer: ';

var mabelQ = prompt('Do I have a dog named Maple');
var mabelA = mabelQ.toUpperCase();

  console.log(mabelA);
  console.log(correct + 'NO');

  if(mabelA === 'YES' || mabelA === 'YEA' || mabelA === 'YA' || mabelA === 'Y'){
    alert('She wouldn\'t mind if you called her Maple but her name is Mabel');
  }else{
    alert('Ding, ding, ding!');
  }


var signQ = prompt('Am I a Gemini?');
var signA = signQ.toUpperCase();

  console.log(signA);
  console.log(correct + 'NO');

    if(signA === 'YES' || signA === 'YEA' || signA === 'YA' || signA === 'Y'){
      alert('Nope! I\'m a taurus');
    }else{
      alert('You\'re correct! I\'m a taurus!');
    } 

var animalQ = prompt('Is my favorite animal a dolphin?');
var animalA = animalQ.toUpperCase();

  console.log(animalA);
  console.log(correct + 'YES');

  if(animalA === 'YES' || animalA === 'YEA' || animalA === 'YA' || animalA === 'Y'){
    alert('Booooyow! you got it');
  }else{
    alert('Dolphins are in fact my favortie animal.');
  }

var rockQ = prompt('Do I like rock and roll?');
var rockA = rockQ.toUpperCase();
  console.log(rockA);
  console.log(correct + 'YES');

  if(rockA === 'YES' || rockA === 'YEA' || rockA === 'YA' || rockA === 'Y'){
    alert('yaaaas, I love rock n\' roll');
  }else{
    alert('I love rock n\' roll');
  }

  var colorQ = prompt('Is my favorite color red?');
  var colorA = colorQ.toUpperCase();
  
    console.log(colorA);
    console.log(correct + 'NO');

    if(colorA === 'NO'|| colorA === 'N' || colorA === 'NOPE' ){
      alert('You\'re right! how could I pick just one?');
    }else{ 
      alert('It depends on the day');
    }

    