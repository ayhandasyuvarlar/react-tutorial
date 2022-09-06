import React, { Component } from "react";
import axios from "axios";
export default class Country extends Component {
  state = {
    country: {},
  };
  componentDidMount() {
    let name = this.props.data;
    axios
      .get("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then((res) => {
        this.setState({
          country: res.data[0],
        });
      });
  }
  textArea = () => {
    let country = document.getElementById("country");
    let countrs = document.getElementById("countrs");
    setTimeout(() => {
      if (this.state.country.name) {
        countrs.innerHTML = ''
        return (country.innerText = this.state.country.name.common);

      } else {
        return <div>yok</div>;
      }
    }, 2000);
  };
  render() {
    return (
      <div>
        <div id="countrs">Loadingg.....</div>
        <div id="country">{this.textArea()}</div>
      </div>
    );
  }
}
