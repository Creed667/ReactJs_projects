import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'



function App() {
    var[count, setCount] = useState(0);

    var name = "Creed->>"
  return (
    <div className="App">
      <h1>{name} {count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>

        <button onClick={()=> setCount(count-1)}>-</button>

        <button onClick={()=> setCount(0)}>0</button>
    </div>
  );
}

export default App;
