import React, { useEffect, useState } from 'react';

function App() {

  const [gameList, setGameList] = useState([])

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <div className="App">
      <h3>Hello world</h3>

    </div>
  );
}

export default App;
