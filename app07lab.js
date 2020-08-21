function numberGuessingGame() {
    var correctAnswer = 37;
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
