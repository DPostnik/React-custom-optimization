import React, { useState, useContext } from 'react';
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div>
        <Test/>
      </div>
    )
  }
}

const MyContex = React.createContext();

const Test = () =>{
  const [time, setTime] = useState(new Date());
  
  return(
  <MyContex.Provider value={new Date()}>
    <p>{time.toTimeString()}</p>
    <button onClick={() => { setTime(new Date())}}>update</button>
    <NewTest/>
  </MyContex.Provider>
  );
}

const NewTest = () =>{
  // const value = useContext(MyContex);
  return(
    <MyContex.Consumer>
      { (value) =>{
          return (
            <p>{value.toTimeString()}</p>
          )
        }
      }
    </MyContex.Consumer>
  )
}

export default App;
