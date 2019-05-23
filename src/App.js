import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCreateRef: '',
      valueRef: '',
      valueCBRef: ''
    }
    this.inputRef = React.createRef();
  }

  updateCreateRef = () => {
    this.setState({valueCreateRef: this.inputRef.current.value});
  }

  updateRef = () => {
    this.setState({valueRef: this.refs.inputRef.value});
  }

  updateCBRef = () => {
    this.setState({valueCBRef: this.input.value});
  }
  
  render() {
    return (
      <div className="App">
        <span>Use Create Ref: </span>
        <input type="text" ref={this.inputRef} onChange={this.updateCreateRef.bind(this)} value={this.state.valueCreateRef}/> 
        {this.state.valueCreateRef}
        <br/>
        <span>Use Ref: </span>
        <input type="text" ref="inputRef" onChange={this.updateRef.bind(this)} value={this.state.valueRef}/> 
        {this.state.valueRef}
        <br/>
        <span>Use CallBack Ref: </span>
        <input type="text" ref={node => this.input = node} onChange={this.updateCBRef.bind(this)} value={this.state.valueCBRef}/> 
        {this.state.valueCBRef}
        <br/>
      </div>
    );
  }
}

export default App;
