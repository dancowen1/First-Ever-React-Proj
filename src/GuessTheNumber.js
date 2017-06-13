import React from 'react';

class GuessTheNumber extends React.Component{
  _handleButtonClick = (e) => {
    if (this.refs.userGuess.value==this.props.guessNumber) {
       alert('Correct Number')
     }else if(this.refs.userGuess.value < this.props.guessNumber){
       alert('Guess too low')
     } else {
       alert('Guess too high')
     }
  }

  render(){
    return(
      //<input class='inner' type='text' placeholder="Put your number in here"></input>
      <div>
        <input type="text" ref="userGuess"/>
        <button onClick= {this._handleButtonClick} > Guess a number</button>
      </div>
      )
      }
    }





 export default GuessTheNumber;
