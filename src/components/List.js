import React, { Fragment, useState, useEffect } from 'react';
import './List.css';
import {CSSTransition} from 'react-transition-group';
const List = ({names, setPlayerName}) =>  {
const [listName, setListName] = useState('')
const [tempArr, setTempArr] = useState([])
const [sizeLength, setSizeLength] = useState(0)
const [isDisplay, setIsDisplay] = useState(false)


useEffect( () => {
  if(tempArr.length > 10){
    setSizeLength(10) 
  } else if (tempArr.length < 2) {
    setSizeLength(2)
  } else
  setSizeLength(tempArr.length)
}, [tempArr])


const filterPlayer = (val) => {
    if(val.length >= 3) {
        setTempArr(names.filter (names => ( 
        names.toLowerCase().indexOf(val) >= 0
        )))
        setIsDisplay(true)
      } else {
        setIsDisplay(false)
      }  
      setListName(val)
}

return (
        <Fragment>
        <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="fade"
        >
        <div class='search-bar'>
            <input class='search-text' type='text' autoComplete='off' 
            placeholder='Search for player here'
            onChange={(e) => filterPlayer(e.target.value.toLowerCase())}
            ></input>
        </div>
        </CSSTransition>

        <div class = 'player-list' >
      { isDisplay &&
     <select id = 'drop-list'
     onChange = {(e) => setPlayerName(e.target.value)}size= {sizeLength} >
       {tempArr.map(names => (
         <option id ='list-text' key={tempArr.indexOf(names)} value={names}>{names}</option>
       ))}
     </select> }
      </div>
        </Fragment>
    )
}

export default List