function playSound(event){
  const keyCode = event.type === 'click' ? this.getAttribute('data-key') : event.keyCode; //onclick get data-key, onkeydown get keyCode
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return; // Stop the function if no audio element is found
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
};

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // Skip if it's not a transform
  
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSound);
});

window.addEventListener('keydown', playSound);


