import React from 'react';
class GithubProfile extends React.Component{
  constructor(props){
    super(props)
      this.state={
        emptyObj:'',
        user:'',
    }}

componentDidMount=()=>{
  fetch(`https://api.github.com/users/${this.props.username}`, {
    headers: {
      'Authorization': 'token 459fbc5ec24ca0cd4cdd2e9a9996db64772934dd'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then((json) => {
    console.log(json);
    this.setState({
      user: json
    })
  })
}
  render() {
    return(
      <div>
        <input type="text" placeholder="username"/>
        <button/>
        <div class="github-user">
          <img class="github-user__avatar" src={this.state.user.avatar_url}/>
          <div class="github-user__info">
            <p>{this.state.user.name}</p>
            <p>{this.state.user.bio}</p>
          </div>
        </div>
      </div>
    )
  }

}
export default GithubProfile
