import React from 'react';

class YouClicked extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        timesClicked:0,
        timesReset:0,
    }
  }

    _handleIncrement=()=>{
    this.setState({timesClicked: this.state.timesClicked+1})
  }

    _handleReset=()=>{
      this.setState({timesClicked:0});
    }
  render(){
      return(
        <div>
          <button onClick={this._handleIncrement}>Click the Button</button>
          <p>You have clicked the button {this.state.timesClicked} times </p>
          <button onClick={this._handleReset}>Reset the counter</button>
        </div>
            )


          }


        }
export default YouClicked;
