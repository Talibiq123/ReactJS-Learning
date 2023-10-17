import './PlayButton.css';
function PlayButton({children, onPlay, onPause}) {

    let playing = false; //Don't use this approach...

    function handleClick(e) {
        e.stopPropagation();
        
        if (playing) {
            onPause();
        } else {
            onPlay();
        }
        playing = !playing;
    }

    return <button onClick={handleClick}>{children} : {playing ? '>' : '||'}</button>
}
export default PlayButton;