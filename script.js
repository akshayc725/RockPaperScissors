let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];

}

function convertToWord(letter){

    if(letter == "r") return "Rock";
    if(letter == "s") return "Scissors";
    else
        return "Paper"


}

function game(userChoice){

    const computerChoice = getComputerChoice();
    //console.log(computerChoice);

    function win(userChoice, computerChoice){

        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        const smallUserWord = "User".fontsize(3).sub();
        const smallCompWord = "Comp".fontsize(3).sub();
        result_div.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} beats ${convertToWord(computerChoice)}${(smallCompWord)}. You Win!`;
        document.getElementById(userChoice).classList.add('green_glow');
        setTimeout(function (){document.getElementById(userChoice).classList.remove('green_glow')}, 300)


    }
    function lose(userChoice, computerChoice){

        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        const smallUserWord = "User".fontsize(3).sub();
        const smallCompWord = "Comp".fontsize(3).sub();
        result_div.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} loses to ${convertToWord(computerChoice)}${(smallCompWord)}. You Lose!`;
        document.getElementById(userChoice).classList.add('red_glow');
        setTimeout(function (){document.getElementById(userChoice).classList.remove('red_glow')}, 300)

    }
    function draw(userChoice, computerChoice){

        const smallUserWord = "User".fontsize(3).sub();
        const smallCompWord = "Comp".fontsize(3).sub();
        result_div.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} equals ${convertToWord(computerChoice)}${(smallCompWord)}. It's a draw!`;
        document.getElementById(userChoice).classList.add('gray_glow');
        setTimeout(function (){document.getElementById(userChoice).classList.remove('gray_glow')}, 300)

    }

    switch (userChoice + computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }

}

function main() {

      rock_div.addEventListener('click', function () {
          game("r");
      })

      paper_div.addEventListener('click', function () {
          game("p");
      })

      scissors_div.addEventListener('click', function () {
          game("s");
      })
  }

main();