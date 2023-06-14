let keys =document.querySelectorAll('.key')
console.log(keys)
function playSound(e){
    const Audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`)
    console.log('kiem tra',Audio);
    console.log('key', key)
    Audio.play()
    key.classList.add('playing')
    

}
window.addEventListener("keydown",playSound)
const key = Document.querySelectorAll('.key')
keys.forEach((key) => window.addEventListener('transitionend'))
