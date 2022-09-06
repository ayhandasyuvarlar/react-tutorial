import React, { Component } from "react";

import CountryCard from "./CountryCard";
import axios from "axios";
export default class Countries extends Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({
        countries: res.data.slice(0, 20),
      });
    });
  }
  searchHandler = (e) => {
    let country = e.target.value;
    axios.get("https://restcountries.com/v3.1/name/" + country).then((res) => {
      this.setState({
        countries: res.data,
      });
    });
  };
  render() {
    const countryList = this.state.countries.map((dat) => {
      return (
        <CountryCard
          dat={dat}
          key={dat.unNumber}
          ClickHandler={this.props.ClickHandler}
        />
      );
    });
    return (
      <>
        <div className="input">
          <input
            type="text"
            className="inputtext"
            onChange={this.searchHandler}
          />
        </div>
        <div className="countryList">{countryList}</div>
      </>
    );
  }
}
