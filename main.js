var keys = document.querySelectorAll('.key');

keyPressHandler = function(e)
{
    const audio =  document.querySelector(`audio[data-key = "${e.keyCode}"]`) ;
    if(!audio)return ;
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    setTimeout(removeTransition , 70 , key );

}

removeTransition = function(key)
{
    key.classList.remove('playing');
}


// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown' , keyPressHandler);