import React from 'react';
import Box from "./Box/Box";
import "./App.css";

function App() {

  return (
    <div className="App--Container">
{[...Array(27)].map((e, i) => <Box />)}

    </div>
  );
}

export default App;
