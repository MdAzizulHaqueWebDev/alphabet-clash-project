 // Home screen start here
 function play(){
    // step 1 --> hide to home screen , to hide the screen and the class hidden to the home section
   const homeSection = document.getElementById('home-section');
   homeSection.classList.add('hidden');
//    console.log (homeSection)
    // step-2 --> show the playground
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden')
    // console.log(playGroundSection.classList)
 }