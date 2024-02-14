function hideElementById(element){
    const elements = document.getElementById(element);
    elements.classList.add('hidden')
   
};

function showElementById(element){
    const elem = document.getElementById(element);
    elem.classList.remove('hidden')
}

//keyboard key bg change
function setKeyBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeKeyBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}

// get a random alphabet here
function getARandomAlphabet(){
    // get a array of alpha
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
 // get random index between 0-25
 const randomNumber = Math.random()*25;
 const index = Math.round(randomNumber);

 const alphabet = alphabets[index]
 return alphabet;
//  console.log(index,alphabet)

}