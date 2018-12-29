import React, { Component } from "react";

import Header from "./Components/Header/header";
import Playground from "./Components/Playground/playground";
import ScoreCard from "./Components/Footer/footer";

import { firebaseDB } from "./firebase";

let next = 0;

class App extends Component {
  state = {
    answer: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    id: 1
  };

  fetchNext = () => {
    next++;
    firebaseDB.ref(`q${next}`).on("value", snapshot => {
      let data = snapshot.val();
      console.log(data);
      this.setState({
        answer: data.answer,
        id: data.id,
        image1: data.images[0],
        image2: data.images[1],
        image3: data.images[2],
        image4: data.images[3]
      });
    });
  };

  componentWillMount = () => {
    this.fetchNext();
  };

  handleChange = event => {
    let answer = event.target.value;
    if (answer === this.state.answer) {
      this.fetchNext();
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Playground {...this.state} renderNext={this.handleChange} />
        <ScoreCard score={this.state.id} />
      </div>
    );
  }
}

export default App;
