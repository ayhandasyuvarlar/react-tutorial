import { BrowserRouter, Routes , Route} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    country: {},
  };
  render() {
    const ClickHandler = (e) =>{
      this.setState({
        country : e
      })
    }
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Countries ClickHandler={ClickHandler}/>}/>
            <Route  path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route  path="/Country" element={<Country data={this.state.country}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
    )
  }
}
