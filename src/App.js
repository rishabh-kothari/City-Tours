import React, { Component } from 'react'
import "./App.scss";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar"; 
import Tourlist from "./components/Tourlist";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Tourlist/>
      </div>
    )
  }
}

export default App
