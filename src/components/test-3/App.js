import React, { useEffect, useState } from 'react';

const App = () => {

  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if(visible)
  {
    return(
      <div>
        <button onClick={() => setValue((v)=> v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value}/>
        <Notification/>
      </div>
    );
  } else {
    return(
      <button onClick={() => setVisible(true)}>Show</button>
    )
  }
}

  const HookCounter = ({value}) => {
    useEffect(() => { 
      console.log('mount')
      return () => console.log('unmount') 
    }, []);
    return(
      <p>{value}</p>
    )
  }

  const Notification = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      const interval = setInterval( () => { setVisible( (v) => !v );  }, 1500 );
      return () => clearInterval(interval);
    }, [] )
      return (
        <div>
         { visible && <p>hello</p> }
        </div>
      )
  }



export default App;
