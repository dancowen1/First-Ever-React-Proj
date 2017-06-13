import React from 'react'
class CharacterLimit extends React.Component{


 constructor(props){
   super(props)
    this.state= {
      value:'Hello',
      currentInput:0
    }


}
  _handleInput=(event)=>{
    var value = event.target.value;

    this.setState({
      currentInput: 140 -value.length
    })
  }
    render(event){
      return(
        <div>
          <input type='text' onChange={this._handleInput} maxLength='140'/>
          <p> You have  {this.state.currentInput} characters remaining</p>
        </div>
      )
    }




}
export default CharacterLimit
