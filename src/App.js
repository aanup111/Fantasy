import './App.css';
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import List from './components/List'
import Player from './components/Player'
import {CSSTransition, TransitionGroup} from 'react-transition-group';




function App() {
const [allData, setAllData] = useState([])
const [names, setNames] = useState([])
const [playerName, setPlayerName] = useState('Search For Player Above')
const [specPlayer, setSpecPlayer] = useState([])
const [playerId, setPlayerId] = useState(0)
const [stats, setStats] = useState([])
const [isDisplay, setIsDisplay] = useState(false)  
let i = 1 
let tempArr = []
let tempName 

useEffect( () => {
  axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
  .then (res =>{
     setSpecPlayer(res.data)  
 })
 if(playerName !== 'Search For Player Above'){
  setIsDisplay(true)
}
}, [playerName])

useEffect( () => {
  if (specPlayer.data){
  setPlayerId(specPlayer.data.map(player => (
   player.id
  )))
}
}, [specPlayer])

useEffect( () => {
  axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${playerId}`)
    .then (res =>{
     setStats(res.data)
    })
  }, [playerId])

 useEffect ( () => {
  for(i; i<36; i++) {
  axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`)
  .then (res =>{
     setAllData(oladArr => [...oladArr,res.data])
 })
 console.log('ran ', i)
}
}, [])

useEffect ( () => {
  tempArr.push(allData.map(initial =>(
    initial.data.filter (names => names.height_feet !=null).map
    (names => (
      names.first_name.toLowerCase() + ' ' + names.last_name.toLowerCase()
    ))
  )))
  tempName = tempArr.join()
  setNames(tempName.split(','))
}, [allData])
 



  return (
<div className='App' >
    <div id='list'>
    <List names={names} setPlayerName={setPlayerName}></List>
    </div>
    
    <div id='parent'>
    <Player playerName={playerName} specPlayer={specPlayer} 
            stats={stats} playerId={playerId} isDisplay={isDisplay}></Player>
</div>

</div>

  );
}


export default App;
