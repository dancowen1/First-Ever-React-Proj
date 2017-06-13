import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked'
import CharacterCounter from './CharacterCounter';
import CharacterLimit from './CharacterLimit'
import NumberGuessing from './NumberGuessing'
import GithubProfile from './GithubProfile';
import GithubSearch from './GithubSearch'

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var guessNumber= ((Math.random())*100);
var timesClicked=0;

class App extends Component {
  renderImage(img){
    return(
      <ImageCaption  key={img.id} source={img.source} text={img.text}/>
    )
  }
  giveLayout(){
    return(
      <Layout/>
    )
  }
  // userGuesses(guess){
  //   return(
  //     <GuessTheNumber input={guess.userGuess} guessNumber={guessNum}/>
  //   )
  //
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <hr/>
      <h2>Testing Layout </h2>
        <Layout>

        </Layout>
      <h2>testing ImageCaption</h2>
      <ImageCaption source= 'http://i.imgur.com/D8JWn.jpg' text='catLMAO'/>
        <div>
            {imageList.map(this.renderImage)}
        </div>
        <div>
        <GuessTheNumber guessNumber={Math.round((Math.random())*100)} />
        </div>
        <div>
          <YouClicked />
        </div>
        <div>
          <CharacterCounter />
          <CharacterLimit />
          <NumberGuessing/>
          <GithubProfile username="harrisrobin"/>
          <GithubSearch/>
        </div>
    </div>

    );
  }
}


export default App;
 //this.prop.username in profile
