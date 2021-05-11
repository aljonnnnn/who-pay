import { useState, useEffect } from 'react'
import './dist/css/main.css'
import NameList from './NameList'

function App() {

  const [nameList, setNameList] = useState([])
  const [addName, setAddName] = useState('')
  const [winner, setWinner] = useState('')
  const [showNameContainer, setShowNameContainer] = useState(false)
 
  const handleClick = () => {

    if (addName !== '') {
      setNameList([...nameList, addName])

      setAddName('')
    } else {
      // alert('add name')
    }

  }

  const handleWin = () => {
    const winner = Math.floor(Math.random() * nameList.length)
    console.log(winner)
    setWinner(nameList[winner])
  }

  const keypress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  
  // Delete item.  simple delete item i saw this on stackoverflow :)
  const handleDelete = (e) => {    
    setNameList(nameList.filter(name => name !== e.target.textContent ))
  } 

  return (
    <section>
      <div className="container">
        <div className="box">
          <div className="item">
              <h1 className="unlucky">THANK YOU {winner}</h1>
              <div className="form">
                  <input 
                    value={addName}
                    className="input-name" 
                    type="text" placeholder="Add Name" 
                    onChange={(e) => setAddName(e.target.value)}
                    onKeyPress={keypress} />
                  <button 
                    className="btn add-btn" 
                    onClick={handleClick}>enter</button>
                  <button 
                    className="btn who-pay-btn" 
                    onClick={handleWin}>😂 who pay 😂</button>
              </div>
          </div>
        </div>
      </div>
      {/* <button className='showBtn' onClick={() => setShowNameContainer(!showNameContainer)}>Show</button> */}

      <div 
        className="showBtn" 
        onClick={() => setShowNameContainer(!showNameContainer)}>

          <span className={`line ${showNameContainer ? 'active' : ''}`}></span>
          <span className={`line ${showNameContainer ? 'active' : ''}`}></span>
        </div>
          
      <NameList 
        names={nameList} 
        onClicked={handleDelete}
        className={`${showNameContainer ? 'show' : ''}`}/>
    </section>
  );
}

export default App;
