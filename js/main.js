// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

 console.log('music player script file');

 let allDivs = document.querySelectorAll('.key');

 window.addEventListener('keyup', findMatchingAudio);

 function findMatchingAudio(event){

    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
   

    if (!audioClip){
        return;
    }
    audioClip.currentTime=0;

    audioClip.play();

    targetDiv.classList.add("playing");

    // debugger;
 }

 function resetDiv() {
    let currentDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

    currentDiv.classList.remove("playing");
 }

 allDivs.forEach(div => div.addEventListener("transitionend", resetDiv));

    

