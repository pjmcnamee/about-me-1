'use strict';

// Get the user's name
var userName = prompt('Welcome to George\'s Fan Club! What is your name?');

alert('Nice to have you here, ' + userName + '. I\'m going to ask you some questions about George. \(This is a yes or no question, please answer with y/n or yes/no.\)');
console.log(userName + ' was welcomed and asked their name and responded with ' + userName);

// Ask them five yes or no questions with feedback

var answerOne = prompt('Is George older than 25 years old?').toLowerCase();

 if(answerOne === 'n' || answerOne === 'no') {
    alert('You got it right');
    console.log(userName + ' answered correctly and is a true and loyal fan');
 } else {
    alert('That\'s incorrect. I don\'t think you know enough about George.');
    console.log(userName + ' answered incorrectly and was called out on his disloyalty as a fan');
 } 
var age = parseInt(prompt('Let me determine whether or not you\'re capable of answering harder questions. How old are you, ' + userName + '?'));

 if(age === 25) {
     alert('Wow, ' + userName + '! You\'ve been on Earth as long as George has! You might actually know more than I thought.');
     console.log(userName + ' answered ' + age + ' and it was the same as George\'s');
 }
 if(age > 25) {
     alert('Okay, ' + userName + '. Since you\'re older than George, you might actually know more than I thought.');
     console.log(userName + ' is ' + age + ' and is older than George thus proving the possibility of his knowledge of George');
 }
 if(age < 25) {
     alert('Hmmm.. ' + userName + ', you\'re pretty young and I seriously doubt that you\'re a true fan.');
     console.log(userName + ' is ' + age + ' and is younger than George so they couldn\'t possibly know that much about George');
 }

var answerTwo = prompt('Alright, ' + userName + ', does George have a deep hatred for birds?').toLowerCase();

if(answerTwo === 'y' || answerTwo === 'yes') {
    alert('That\'s right! How did you know that, ' + userName + '? George has only told a handful of people that. You must be a friend of his.');
} else {
    alert('That\'s incorrect! You couldn\'t possibly know that one anyways, only real fans know it.');
    console.log(userName + ' answered incorrectly and was told that the question was too hard');
}

var answerThree = prompt('I\'ll ask you something a bit easier, ' + userName + '. Does George live in Seattle, Washington?').toLowerCase();

if(answerThree === 'y' || answerThree === 'yes') {
    alert('So.. you\'re stalking him, eh. I probably shouldn\'t ask you questions too close to home, or George\'s home for that matter.');
    console.log(userName + ' answered correctly and was accused of stalking George');
} else {
    alert('That\'s incorrect. I think you should\'ve done your research before trying to join this fan club.');
    console.log(userName + ' answered incorrectly and doesn\'t know where George lives.');
}

var answerFour = prompt('You\'re only a few questions away from joining the George Fan Club, ' + userName + '. Do you think you can handle it?').toLowerCase();
if(answerFour === 'n' || answerFour === 'no') {
    alert('I don\'t care, you\'ve got some more coming!');
    console.log(userName + ' was asked if they can handle answering more questions and they couldn\'t hang');
}