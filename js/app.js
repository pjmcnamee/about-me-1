'use strict';

// Get the user's name
var userName = prompt('Welcome to Planet George! What is your name?');

alert('Nice to have you here, ' + userName + '. I\'m going to ask you some questions about George. Since these are y/n questions, please answer with y/n or yes/no.');
console.log('The user was welcomed and asked their name and responded with ' + userName)

// Ask them five yes or no questions with feedback

var answerOne = prompt('Is George older than 25 years old?').toLowerCase();

 if(answerOne === 'n' || answerOne === 'no') {
    alert('You got it right');
    console.log(userName + ' answered correctly and is a true and loyal fan')
 } else {
    alert('That\'s incorrect. I don\'t think you know enough about George.');
    console.log(userName + ' answered incorrectly and was called out on his disloyalty as a fan')
 } 
