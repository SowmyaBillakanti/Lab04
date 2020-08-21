'use strict'

// Wrap this code in a function

function askCustomerForName(){
    var username = prompt('Enter your name for a Free Coffee! ');
    alert('Hello ' + username);
    return username;
}

var username = askCustomerForName();

console.log(username);

function checkForWinner(){
    if (username === 'Sowmya'){
        document.write('<h2>' + 'Congratulations! Here is your free coffee ' + username + '</h2>')
    } else {
        document.write('<h2>' + 'OOPS! Better luck next time' + '</h2>')
    }
}

checkForWinner();


function askForRating() {
    var rating = prompt('Please give us a rating (1-5):');
    return rating;
}

var ratingGivenByUser = askForRating()

function writeToWebPage(message) {
    document.write('<h3>' + message + '</h3>')
}

writeToWebPage('Rating given by you is: ' + ratingGivenByUser)

writeToWebPage("Thanks for visiting. Please come back again!")
