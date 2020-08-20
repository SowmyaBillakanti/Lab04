'use strict'

var username = prompt('Enter your name for a Free Coffee ');

alert('Hello ' + username);

if (username === "Sowmya"){
    document.write('<h2>' + 'Congratulation! Here is your free coffee ' + username + '</h2>')
} else {
    document.write('<h2>' + 'Please enter your name correctly' + '</h2>')
}
