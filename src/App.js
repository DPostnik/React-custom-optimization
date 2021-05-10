import React, { useEffect, useState, useCallback, useMemo } from 'react';

const App = () => {

  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if(visible)
  {
    return(
      <div>
        <button onClick={() => setValue((v)=> v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value}/>
        <PlanetInfo id={value}/>
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

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data) 
}

const useRequest = (request) => {

  const initialState =  useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), []);

  const [dataState, setDataState] = useState(initialState);
  
  useEffect( () => {
    setDataState(initialState);
    let cancelled = false;
    
    request()
      .then( data => !cancelled && setDataState({
         data: data,
         loading: false,
         error: false
       }))
       .catch( error =>  !cancelled && setDataState( {
        data: null,
        error,
        loading: false 
      }));
      return () => cancelled = true;
  },[ request, initialState ]);

  return dataState;
}

const usePlanetInfo = (id) => {
  const request = useCallback(
    () => getPlanet(id), [ id ])
  return useRequest(request);
}

const PlanetInfo = ({id}) =>{
    const { data, error, loading } = usePlanetInfo(id);
    
    if(loading)
      return(<div>loading...</div>)
    
    
    if(error)
      return <div>Error was appeared</div>
    
      return ( <div>{data.name}</div>)
}

export default App;