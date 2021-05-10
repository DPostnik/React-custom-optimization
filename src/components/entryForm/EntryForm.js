import React from 'react';

class EntryForm extends React.Component{
  constructor(props){
    super(props);
    const {onAdd} = props;
    this.state = {
      text: '',
      onAdd: onAdd
    }
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.state.onAdd(this.state.text);
  }

  onChangeText = (e) =>{
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input placeholder='Text' onChange={this.onChangeText}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default EntryForm;