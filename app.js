// 'use strict'

// // Wrap this code in a function

// function askCustomerForName(){
//     var username = prompt('Enter your name for a Free Coffee! ');
//     alert('Hello ' + username);
//     return username;
// }

// var username = askCustomerForName();

// console.log(username);

// function checkForWinner(){
//     if (username === 'Sowmya'){
//         document.write('<h2>' + 'Congratulations! Here is your free coffee ' + username + '</h2>')
//     } else {
//         document.write('<h2>' + 'OOPS! Better luck next time' + '</h2>')
//     }
// }

// checkForWinner();


// function askForRating() {
//     var rating = prompt('Please give us a rating (1-5):');
//     return rating;
// }

// var ratingGivenByUser = askForRating()

// function writeToWebPage(message) {
//     document.write('<h3>' + message + '</h3>')
// }

// writeToWebPage('Rating given by you is: ' + ratingGivenByUser)

// writeToWebPage("Thanks for visiting. Please come back again!")

function numberGuessingGame() {
    var correctAnswer = 16;
    var playGame = prompt('Do you want to play a game?');
    while(playGame === 'Yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt('Please Enter a number from 1-100'));
            if(userGuess === correctAnswer){
                alert('Guessed correct!')
                break;
        } else if (userGuess < correctAnswer){
            alert('You guessed to low')
        } else if (userGuess > correctAnswer){
            alert('You guessed to high')
        }
        if(i===4){
            alert('The correct answer is ' + correctAnswer);

        }
    }
    playGame = prompt('Do you want to play another game?');
}
}
numberGuessingGame();