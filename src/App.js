import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameTable from './components/GameTable/GameTable';
import SearchBar from "./Components/SearchBar/SearchBar"; 


function App() {

  const [gameList, setGameList] = useState([])


  //useEffect will run anytime the component renders
  useEffect(() => {
    //inside useEffect, we put things that we want to run as soon as the component renders
    getGameList();
  }, []);
  // ^^ [] at the end means this particular useEffect will ONLY run the FIRST time the component renders

  async function getGameList(){
    try{
      const response = await axios.get("http://localhost:8080/all/");
      console.log('response inside getGameList', response)
      setGameList(response.data);
    } catch (error) {
      console.error(error.message)
    }  

    }
    return (
      <div className="App">
        <GameTable videogames={gameList}/>
        <SearchBar videogames={gameList}/>
  
      </div>
    );
    
  }


export default App;
