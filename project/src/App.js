
import './App.css';
import { useState } from 'react';
import PlayersData from './PlayersData.json'

function App() {
  let [playerData,getPlayerData] =useState(PlayersData[0]);

  let sendData =((pindex) => 
  {
    getPlayerData(PlayersData[pindex])
    
  })
  
 
  return (
    <>
    <div className='ictHeading'>Indian Cricket Team</div>
    <div>
        <div className='playerDetails'>
         <img src={playerData.image} className="playerImage" alt={playerData.Name} />
         <div className='PlayerDetails'>
          <div> Name -{playerData.Name}</div>
          <div>Age -{playerData.Age}</div> 
          <div>Test Runs -{playerData.TestRuns}</div>
          <div>ODI Runs -{playerData.ODIRuns}</div>
          <div>T20 Runs -{playerData.T20Runs}</div>
          <div>Profile</div>
          <div>{playerData.Profile}</div>
        </div> 
    </div>
      
      <div className='pIconData'>
      {
      PlayersData.map((data ,indexNumber) => {
        return(
          <div className='pIcon' onClick={() =>{sendData(indexNumber)}}>
            <img className='pImage' src={data.image} alt="" />
            <div className='pName'>{data.Name}</div>
          </div>
        )
      })
    } 
      </div>
    </div>
    </>
  );
}

export default App;
