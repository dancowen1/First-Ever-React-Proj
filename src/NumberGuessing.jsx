import React from 'react'
class NumberGuessing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      gameStatus: 'win|lose|playing',
      numberToGuess: 42,
      guesses: [],
      i:0
    }
  }
  _startGame=(e)=>{
    this.setState({
      gameStatus:'playing',
      numberToGuess:Math.round((Math.random())*100),
      guesses:[]
    })}
_guessGame=(e)=>{
  this.setState({
    guesses: this.state.guesses.concat(",",[this.refs.guesser.value]),
    i: this.state.i+1,
  }),  () => {
    if (this.state.i==5){
      alert('you lost'),
      this.setState({
      gameStatus:"lose"}
  )};
}
}
//_loseGame=(e)=>{
  //if (this.state.i==5){
//    alert('you lost'),
  //  this.setState({
//    gameStatus:"lose"
//  })
//  }}


  _correctgame=(event)=>{
    if (this.refs.guesser.value ==this.props.numberToGuess){
      alert('you won')
      this.setState({
      gameStatus:'win'
    })
    }
  }


  render(){
      return(
        <div>
          <input ref="guesser" placeholder="guess the number"/>
          <button onClick={this._guessGame}>GUESS</button>
          <button onClick={this._startGame}>NEW GAME</button>
          <p>{this.state.guesses}</p>
        </div>
      )
  }
}


export default NumberGuessing
