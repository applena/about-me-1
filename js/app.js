'use strict';

var name = prompt('Hi! What\'s your name?');
var correctCnt = 0;
var correct = 'correct answer: ';

//Q1
var mabelQ = prompt('Do I have a dog named Maple');
var mabelA = mabelQ.toUpperCase();

  console.log(mabelA);
  console.log(correct + 'NO');

  if(mabelA === 'YES' || mabelA === 'YEA' || mabelA === 'YA' || mabelA === 'Y'){
    alert('She wouldn\'t mind if you called her Maple but her name is Mabel');
    correctCnt++;
  }else{
    alert('Ding, ding, ding!');
  }

//Q2
var signQ = prompt('Am I a Gemini?');
var signA = signQ.toUpperCase();

  console.log(signA);
  console.log(correct + 'NO');

    if(signA === 'YES' || signA === 'YEA' || signA === 'YA' || signA === 'Y'){
      alert('Nope! I\'m a taurus');
    }else{
      alert('You\'re correct! I\'m a taurus!');
      correctCnt++;
    } 
//Q3
var animalQ = prompt('Is my favorite animal a dolphin?');
var animalA = animalQ.toUpperCase();

  console.log(animalA);
  console.log(correct + 'YES');

  if(animalA === 'YES' || animalA === 'YEA' || animalA === 'YA' || animalA === 'Y'){
    alert('Booooyow! you got it');
    correctCnt++;
  }else{
    alert('Dolphins are my favortie animal.');
  }

//Q4
var rockQ = prompt('Do I like rock and roll?');
var rockA = rockQ.toUpperCase();
  console.log(rockA);
  console.log(correct + 'YES');

  if(rockA === 'YES' || rockA === 'YEA' || rockA === 'YA' || rockA === 'Y'){
    alert(' I love rock n\' roll');
    correctCnt++;
  }else{
    alert('Incorrect');
  }

  //Q5
  var colorQ = prompt('Is my favorite color red?');
  var colorA = colorQ.toUpperCase();
  
    console.log(colorA);
    console.log(correct + 'NO');

    if(colorA === 'NO'|| colorA === 'N' || colorA === 'NOPE' ){
      alert('You\'re right! how could I pick just one?');
      correctCnt++;
    }else{ 
      alert('It depends on the day');
    }

    //Q6
    var num = Math.floor(Math.random() * 10) + 1;
    console.log('number = ' + num);
    var numGuess = parseInt(prompt('I\'m thinking of  number between 1 and 10, can you guess what it is? '));
    
    var cnt = 1;
    while((num !== numGuess) && (cnt < 5)){
      
      if(num > numGuess){
        alert('too low');
      }if(num < numGuess){
        alert('too high');
      }
      numGuess = parseInt(prompt('Guess again'));
      cnt++;
    }
  
    console.log(cnt);

    if(numGuess === num){
      alert('You got it in ' + cnt  + ' guesses!');
      correctCnt++;
    } else {
      alert('You loose');
    }
console.log(name + correctCnt);


//Q7
var roommates = ['CAT', 'DASH'];
var roomieQ = prompt('I live with two people in this class, guess who.');
var roomieA = roomieQ.toUpperCase();

for(var i = 0; i < roommates.length; i++ ){
  var roomCnt = 1;
  while(roomieA !== roommates[i] && roomCnt < 7){
    alert('Not quite, try again!');
    roomCnt++;  
  
    roomieQ = prompt('Guess ' + roomCnt);
    roomieA = roomieQ.toUpperCase();
  }

if(roomieA === roommates[i]){
 alert('Good guess!! you got that in ' + roomCnt + ' guesses.');
 correctCnt++;
 break;
}else{
  alert('Nice try but you\'re incorrect. My roommates are Dash and Cat');
}  

}

alert(name + ', you got ' + correctCnt + ' answers correct out of 7');

