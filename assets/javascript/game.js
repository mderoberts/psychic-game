var wins = 0;
var losses = 0;
var turns= 9;
var pastGuesses= [];

var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    document.onkeyup = function(event) {
        var userGuess = event.key.toUpperCase();
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        /*var computerGuess = "B";*/

        if (turns >= 1) {



        if (userGuess === computerGuess) {
           wins++;
           pastGuesses = [];
           turns = 9;
        }

        else {
            turns--;
            pastGuesses.push(userGuess);
        }
        

        
        var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + turns + "</p>" + "<p>Your Guesses so Far: " + pastGuesses + "</p>";

        document.querySelector("#game").innerHTML = html;
        }
        else {
            losses++;
            turns = 9;
            pastGuesses = [];

            var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + turns + "</p>" + "<p>Your Guesses so Far: " + pastGuesses + "</p>";

            document.querySelector("#game").innerHTML = html;
        }
       };