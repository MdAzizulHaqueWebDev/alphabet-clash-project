//  // Home screen start here
//  function play(){
//     // step 1 --> hide to home screen , to hide the screen and the class hidden to the home section
//    const homeSection = document.getElementById('home-section');
//    homeSection.classList.add('hidden');
// //    console.log (homeSection)
//     // step-2 --> show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList)
//  }
function handleKeyboardButtonPress(events){
   const userKeyPress = events.key;
   // console.log(userKeyPress)
   // expected key press
   const currentDisplayAlphabetElement = document.getElementById('current-alpha-display');
   const currentAlphabet = currentDisplayAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   // console.log(expectedAlphabet,'user keypress',userKeyPress)
   // check matched or not
   if(userKeyPress === expectedAlphabet){
      console.log('get a point')
      //update score
      //1. get the current score
      const currentScoreElement = document.getElementById('current-score');
      const currentScoreText = currentScoreElement.innerText;
      const currentScore = parseInt(currentScoreText)
      // 2. increase the score by 1
      const newScore = currentScore + 1
      // 3.show the updated score
      currentScoreElement.innerText = newScore;
      // start a new round
      removeKeyBackgroundColor(expectedAlphabet);
      continueGame()
   }else{
      console.log('lost a point')
      // step 1 : get the current life count
      const currentLifeElement = document.getElementById('current-life');
      const currentLifeText = currentLifeElement.innerText;
      const currentLife = parseInt(currentLifeText);
      // step 2 : reduce the life count
      const newLife = currentLife -1;

      // step 3 : display the updated 
      currentLifeElement.innerText = newLife;
   }
}

document.addEventListener('keyup',handleKeyboardButtonPress)
               // reusable function Part
function continueGame(){
   // step-1 > generate random alphabet
   const alphabet = getARandomAlphabet();
   const displayRandomAlpha = document.getElementById('current-alpha-display');
   displayRandomAlpha.innerText = alphabet;
   // set key bg color
   setKeyBackgroundColor(alphabet)
}

function play(){
   hideElementById('home-section');
   showElementById('play-ground');
   continueGame()
}