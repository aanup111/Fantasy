import React, { Fragment, useState } from 'react';
import './Player.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Player = ({playerName, specPlayer,stats, playerId, isDisplay}) => {
  return (
  <Fragment>
        
        {specPlayer.data &&  <div id='player-info'> 
        {isDisplay && <div> 
        <h2>Player Info</h2> 
         {specPlayer.data.map(player => (
            <ul key={player.id}>
                <li>Name: {player.first_name + ' ' + player.last_name} </li>
                <li>Position: {player.position} </li>
                <li>Height: {player.height_feet + "'" + player.height_inches } </li>
                <li>Weight: {player.weight_pounds} lb </li>
                <li>Team: {player.team.abbreviation} </li> 
                <li>Team: {player.team.city} </li> 
           </ul> 
        ))}
        </div> }
         </div> } 
         <TransitionGroup>
         <CSSTransition
          timeout={5000}
          classNames="fade"
        > 
  <h1>{playerName}</h1>
 </CSSTransition>
 </TransitionGroup>
       
        {stats.data &&
        <div id='player-stats'>
          {isDisplay && <div>
        <h2>Player Stats</h2>
        { stats.data.map(stats =>
        <ul key={playerId}>
          <li>Points: {stats.pts}</li>
          <li>Rebounds: {stats.reb}</li>
          <li>Assists: {stats.ast}</li>
          <li>Steals: {stats.stl}</li>
          <li>Blocks: {stats.blk}</li>
          <li>Turnover: {stats.turnover}</li>
        </ul>
        )}   
    </div>}
    </div> }
    
  </Fragment>
    )
}


export default Player