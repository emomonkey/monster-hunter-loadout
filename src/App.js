import './App.css';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js';
import { useState, useEffect } from 'react';




function App() {

const [monsters, setMonsters] = useState([])

//fetch Monsters
const fetchMonsters = async() => {
  const res = await fetch('https://mhw-db.com/monsters')
  const data = await res.json()
  data.map(item => {
     console.log(item.name)
  })
  return data
}

const chooseMonster = (monsters) => {
   console.log('Choose Monster')
}


 useEffect(() => {
  const getMonsters = async() => {
    const monstersFromServer = await fetchMonsters()
    setMonsters(monstersFromServer)
    
      
    
  }

  getMonsters()
}, [])



  return (
    <div>
      <nav>
        <ul id="navigation">
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/contact">Contact </Link>
           </li>
        </ul>
      </nav>
      <Routes>
       <Route exact path="/" element={<Home  onRetrieve={chooseMonster}/>} />
       
       <Route path="/about" element={<About />} />
         
        
      </Routes>
    </div>
    
  );
}

export default App;
