class Button extends React.Component {
  render(){
    return (
      <button onClick={()=>this.props.whenClicked(this.props.mulVal)}>{this.props.mulVal}</button>
    );
  }
}

const Result = (props)=>{
  return (
    <div>
      {props.finalVal}
    </div>
  );
};

const ResetButton=(props)=>{
  return(
    <div>
      <button onClick={props.resetCounter}>Reset</button>
    </div>
  );
};

class App extends React.Component {
  state = { counter: 1 };

  handleClick=(mulVal)=>{
    this.setState((prevState)=>({
      counter: prevState.counter * mulVal
    }));
  };

  resetCounter=()=>{
    this.setState({
      counter : 1
    });
  };

  render(){
    return (
      <div>
        <Result finalVal={this.state.counter} />
        <Button mulVal={2}  whenClicked={this.handleClick} />
        <Button mulVal={3}  whenClicked={this.handleClick} />
        <Button mulVal={5}  whenClicked={this.handleClick} />
        <Button mulVal={7}  whenClicked={this.handleClick} />
        <ResetButton resetCounter={this.resetCounter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
