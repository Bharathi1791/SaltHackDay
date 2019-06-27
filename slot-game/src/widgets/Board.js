import React, { useState } from 'react';
import './Board.css';
import { PlayerScoreBoard, PlayerCoinBoard } from './Score';
import image0 from '../game-images/Symbol_0.png';
import image1 from '../game-images/Symbol_1.png';
import image2 from '../game-images/Symbol_2.png';
import image3 from '../game-images/Symbol_3.png';
import image4 from '../game-images/Symbol_4.png';
import buttonMusic from '../game-music/button.mp3';
import winMusic from '../game-music/win.mp3';
const imageArray = [image0, image1, image2, image3, image4];

function ScoreBoard(props) {
  return (
    <div className="score-board">
      <PlayerScoreBoard playerScore={props.playerScore} />
      <PlayerCoinBoard playerCoins={props.playerCoins} />
    </div>
  );
}

function SlotBoard(props) {
  return (
    props.playerCoins === 5 ?
      <div className="start-game">
        <p>You want to start game.....</p>
        <p>Just a little touch on spin.....</p>
      </div> 
      :
      props.playerCoins === 0 ?
        <div className="start-game">
          <p>You have won {props.playerScore} coins.....</p>
          <embed src = {winMusic} width="2" height="0"></embed>
          <p><span onClick={props.handleReplayClick}>Click me</span> to play again</p>
        </div> 
          :
          <div className="slot-board">
            <div className="win-board">{props.playerSpinResult}</div>
            <div className="image-container">
              <div><img className="image-slot" src={imageArray[props.image1]} alt="showimage"></img></div>
              <div><img className="image-slot" src={imageArray[props.image2]} alt="showimage"></img></div>
              <div><img className="image-slot" src={imageArray[props.image3]} alt="showimage"></img></div>
          </div>
        </div>
  );
}

function SpinBoard(props) {
  return (
    props.playerCoins === 0 ? <></> : 
    <div className="button-container">
      <button onClick={props.handleClick}>Spin</button>
      <audio id="spinTune"> <source src={buttonMusic}></source></audio>
    </div>
  );
}


function Board() {

  const initialCoins = Array(5).fill(1);
  const [playerCoins, setPlayerCoins] = useState(initialCoins);
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [slot3, setSlot3] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerSpinResult, setPlayerSpinResult] = useState(null);
  
  const handleReplayClick = () => {
    window.location.reload(true); 
  }
  
  const handleClick = () => {
  
    const slot1 = Math.floor(Math.random() * Math.floor(4));
    const slot2 = Math.floor(Math.random() * Math.floor(4));
    const slot3 = Math.floor(Math.random() * Math.floor(4));
    
    setSlot1(image => slot1);
    setSlot2(image => slot2);
    setSlot3(image => slot3);
    
    if ((slot1 === slot2) && (slot2 === slot3)) {
      setPlayerScore(score => score + 3);
      setPlayerCoins(coins => coins.slice(1));
      setPlayerSpinResult(win => 'BIG WIN');
    } else if ((slot1 === slot2) || (slot2 === slot3) || (slot3 === slot1)) {
      setPlayerScore(score => score + 2);
      setPlayerCoins(coins => coins.slice(1));
      setPlayerSpinResult(win => 'SMALL WIN');
    } else {
      setPlayerScore(score => score);
      setPlayerCoins(coins => coins.slice(1));
      setPlayerSpinResult(win => 'NO WIN');
    }
    
    let myAudio = document.getElementById('spinTune')
    myAudio.play()

  }
  return (
    <div className='game-board'>
      <ScoreBoard playerCoins={playerCoins} playerScore={playerScore} />
      
      <SlotBoard playerCoins={playerCoins.length} 
        image1={slot1} 
        image2={slot2} 
        image3={slot3}
        playerScore={playerScore}
        playerSpinResult={playerSpinResult}
        handleReplayClick = {handleReplayClick} />
        
      <SpinBoard handleClick={handleClick} 
      playerCoins={playerCoins.length} 
      playerSpinResult={playerSpinResult} />
    </div>
  );
}
export default Board;

