// array of options
const images = ["rock.png", "paper.png", "scissors.png"];

const cCircle = document.querySelector(".cCircle");

// function to select a random index and set background image to said index.
function randomImg() {
  const ranIndex = Math.floor(Math.random() * images.length);
  cCircle.style.backgroundImage = `url(${images[ranIndex]})`;
}

// call randomImg() to initialise the cCircle background, set it to change every 4 miliseconds
randomImg();
setInterval(randomImg, 200)

// set up event listeners for user choices
document.querySelector(".c1").addEventListener("click", () => chooseOption("rock"));
document.querySelector(".c2").addEventListener("click", () => chooseOption("paper"));
document.querySelector(".c3").addEventListener("click", () => chooseOption("scissors"));

// function to compare the user's choice to the image currently displayed
function chooseOption(choice) {
  const currentImg = cCircle.style.backgroundImage;

  const choiceToFileName = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png",
  };

  const userChoiceFN = choiceToFileName[choice];

  if (currentImg.includes(userChoiceFN)) {
    alert("It's a tie!");
  } else if (
    (currentImg.includes("rock.png") && userChoiceFN === "paper.png") ||
    (currentImg.includes("paper.png") && userChoiceFN === "scissors.png") ||
    (currentImg.includes("scissors.png") && userChoiceFN === "rock.png")
  ) {
    alert("You win!");

    // increment player score

    const playerScore = document.getElementById("playerPoints");
    let currentPScore = parseInt(playerScore.textContent);

    currentPScore += 1;

    playerScore.textContent = currentPScore;

  } else {
    alert("You lose!");

    // increment system score
    const systemScore = document.getElementById("systemPoints");
    let currentSScore = parseInt(systemScore.textContent);

    currentSScore += 1;

    systemScore.textContent = currentSScore;

  }
}

// function to reset both scores

function resetFunction(){
  const playerScore = document.getElementById("playerPoints");
  const systemScore = document.getElementById("systemPoints");

    playerScore.textContent = 0;
    systemScore.textContent = 0;

}


