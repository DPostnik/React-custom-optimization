import React from 'react';
import '../values/Value.css';

const Value = (props) =>{
  
  const onRemove = (value) =>{
   props.onRemove(value);
  }

  const lis = props.values.map(
    (value) => {
      const newValue = value.first;
      return(
          <li key={value.first.toString()}>
            <span className='span-value'>{value.first}</span>
            <button onClick={() => onRemove(newValue)}>Remove</button>
          </li>
      )
    }
  )


  return(
    <div className='value-container'>
      {lis}
    </div>
  )
}

export default Value;