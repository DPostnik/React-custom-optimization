import React from 'react';
import './App.css';
import EntryForm from '../entryForm/EntryForm';
import Value from '../values/Value';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      obj : [
        { first:'dan' },
        { first:'dan1' },
        { first:'dan2' },
        { first:'dan3' }
      ]
    } 
  }

  AddValue = (newValue) => {
    const value = [...this.state.obj];
    value.push({first: newValue});
    this.setState({
      obj: value
    })
  }

  RemoveValue = (oldValue) => {
    const index = this.state.obj.findIndex((el) => el.first === oldValue);
    console.log(index)
    if(index !== -1){
      const value = [...this.state.obj.slice(0,index), ...this.state.obj.slice(index+1, this.state.obj.length)];
      this.setState({
        obj: value
      });
    }
  }

  render(){
    return (
      <div className="App">
        <Value values={this.state.obj} onRemove={(value) => this.RemoveValue(value)}/>
        <EntryForm onAdd={(newValue) => this.AddValue(newValue)}/>
      </div>
    );
  }
}

export default App;
