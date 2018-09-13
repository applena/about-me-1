'use strict';

var userName = prompt('Hi! What\'s your name?');
var correctCnt = 0;
var correct = 'correct answer: ';

//Q1
function q1(){
console.log('Q1');
var mabelQ = prompt('Do I have a dog named Maple');
var mabelA = mabelQ.toUpperCase();

  console.log(mabelA);
  console.log(correct + 'NO');

  if(mabelA === 'YES' || mabelA === 'YEA' || mabelA === 'YA' || mabelA === 'Y'){
    alert('She wouldn\'t mind if you called her Maple but her name is Mabel');
  }else{
    alert('Ding, ding, ding!');
    correctCnt++;
  }
}

//Q2
function q2(){
console.log('Q2');
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
  }

//Q3
function q3() {
console.log('Q3');
var animalQ = prompt('Is my favorite animal a dolphin?');
var animalA = animalQ.toUpperCase();

  console.log(animalA);
  console.log(correct + 'YES');

  if(animalA === 'YES' || animalA === 'YEA' || animalA === 'YA' || animalA === 'Y'){
    alert('Booooyow!');
    correctCnt++;
  }else{
    alert('Actually, dolphins are my favortie animal.');
  }
}

//Q4
function q4() {
console.log('Q4');
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
}

  //Q5
  function q5(){
  console.log('Q5');
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
  }

    //Q6
    function q6(){
    console.log('Q6');
    var num = Math.floor(Math.random() * 10) + 1;
    var numGuess = parseInt(prompt('I\'m thinking of  number between 1 and 10, can you guess what it is? '));
    
    console.log('number = ' + num);

    var cnt = 1;
    while((num !== numGuess) && (cnt < 5)){
      
      if(num > numGuess){
        alert('too low');
      }else if(num < numGuess){
        alert('too high');
      }
      numGuess = parseInt(prompt('Guess again'));
      cnt++;
    }
  
    console.log('cnt = ' + cnt);

    if(numGuess === num){
      alert('You got it in ' + cnt  + ' guesses!');
      correctCnt++;
    } else {
      alert('You loose');
    }
  }

//Q7
function q7(){
var roommates = ['CAT', 'DASH'];
var isRoomCorrect = false;
alert('You have 7 tries to guess the following question, good luck');

var roomCnt = 1;
while (roomCnt < 7) {
  var roomieQ = prompt('I live with two people in this class, guess who. Guess number: ' + roomCnt);
  var roomieA = roomieQ.toUpperCase();
  
  roomCnt++;
  
  for (var i = 0; i < roommates.length; i++) {
    console.log('in the for loop');
    
    if (roomieA === roommates[i]) {
      alert('Good guess!! you got that in ' + roomCnt + ' guesses.');
      isRoomCorrect = true;
      correctCnt++;
      break;
    } 
  }

  if(isRoomCorrect) {
    break;
  }


if(roomCnt === 7) {
  alert('Nice try but you\'re incorrect. My roommates are Dash and Cat');
}
}
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

console.log(userName + ' you answered ' + correctCnt + ' questions correctly');
alert(userName + ' you answered ' + correctCnt + ' questions correctly');
