import React, { Component } from 'react';
import Container from './components/container';
import Row from './components/row';
import Header from './components/header';
import About from './components/About';
import Cards from './components/greggCards';
import Footer from './components/footer';
import gregs from './gregs.json';


let clickedMessage = "Do you love me?";
let highScore = 0;
let correctGuess = 0;
class App extends Component {
state = { 
  gregs,
  clickedMessage,
  highScore,
  correctGuess
 };

//this function will be called when one of the cards is clicked  
clicker = id =>{
  const gregs = this.state.gregs
  
  const currentGreg = gregs.filter(greg => greg.id === id)

  //currentGreg is an array with only the most recent char inside it
  //if the card property clicked is true then the user will lose
  if (currentGreg[0].clicked){
    console.log("you lose")

    clickedMessage = "You aint got the funk!"

    correctGuess = 0

    //reset all clicked cards to false
    gregs.forEach(greg => greg.clicked = false);


    this.setState({clickedMessage})
    this.setState({correctGuess})
    this.setState({gregs})
    
  }
  //if the correct guess count has not reached the max then continue the game
  else if(correctGuess < 8){
    console.log("right")
    currentGreg[0].clicked = true;
    
    clickedMessage = "That's good, thank you sir."

    correctGuess++


    if (highScore < correctGuess){
      highScore = correctGuess
    }

    //sorts the array so the images chang order every click
    gregs.sort(()=> 0.25 - Math.random())


    this.setState({highScore})
    this.setState({clickedMessage})
    this.setState({correctGuess})
    this.setState({gregs})
  }
  //once the game has been won, announce win and reset the game
  else{
    console.log("win")
    
    clickedMessage = "You did good! Old Gregg gonna pick himself out a nice wedding dress!"
  
    correctGuess = 0

    highScore = 9

    gregs.forEach(greg => greg.clicked = false);

    this.setState({correctGuess})
    this.setState({clickedMessage})
    this.setState({highScore})
    this.setState({gregs})
  }

}


  render() {
    return (
      <>
      <Container>
      <Row>
        <Header
        clickedMessage={this.state.clickedMessage}
        highScore={this.state.highScore}
        correctGuess={this.state.correctGuess}
        />
      </Row>
      <Row>
        <About />
      </Row>
      <Row>
        <div className="container-fluid d-flex justify-content-center align-content-start flex-wrap">
      {this.state.gregs.map(friend => (
          <Cards
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
            clicker={this.clicker}
          />
        ))}
        </div>
      </Row>
      <Row>
        <Footer />
      </Row>
      </Container>
      </>
    );
  }
}

export default App;
