import React from 'react';
import './Score.css';
import coin from '../game-images/coin.gif';



export function PlayerScoreBoard(props) {
  return(
    <div className="win-score">WinScore:{props.playerScore}</div>
  );
}

export function PlayerCoinBoard(props) {
  return (
    <div className='coin-container'>
      <div className='bet-size'>BETSIZE:{props.playerCoins.length}</div>
      <div>  
        { props.playerCoins.map((item, index) => {
          return (
            <img className='image-coin' key={index} src={coin} alt="coin" />
          );
        })}
      </div> 
    </div>
  );
}

