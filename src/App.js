import React, { Component } from 'react';
import Container from './components/container';
import Row from './components/row';
import Header from './components/header';
import About from './components/About';
import Cards from './components/greggCards';
import Footer from './components/footer';
import Gregs from './gregs.json';



class App extends Component {
state = { Gregs };




  render() {
    return (
      <>
      <Container>
      <Row>
        <Header>
        </Header>
      </Row>
      <Row>
        <About>
        </About>
      </Row>
      <Row>
        <div className="container-fluid d-flex justify-content-center align-content-start flex-wrap">
      {this.state.Gregs.map(friend => (
          <Cards
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </div>
      </Row>
      <Row>
        <Footer>
        </Footer>
      </Row>
      </Container>
      </>
    );
  }
}

export default App;
