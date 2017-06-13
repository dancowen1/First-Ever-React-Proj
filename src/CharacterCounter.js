import React from 'react'
class CharacterCounter extends React.Component{
 constructor(props){
   super(props)
    this.state= {
      currentInput:0,
      value:''
    }


}
  _handleInput = (event) => {
    var value = event.target.value;

    this.setState({
      currentInput: value.length
    })
  }
    render(){
      return(
        <div>
          <input onChange={this._handleInput}/>
          <p> You have written {this.state.currentInput} characters</p>
        </div>
      )
    }




}
export default CharacterCounter
