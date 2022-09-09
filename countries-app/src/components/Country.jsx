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
        let data = this.state.country;
        countrs.innerHTML = "";
        country.innerHTML = `
         <div class="card" style="width: 18rem;">
                 <img src="${data.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${data.name.official}</h5>
                         <p class="card-text">${data.name.common}</p>
                         ${data.name.common === 'Turkey'  ? 'Ne Mutlu Turkum Diyene , Ulu Önder Mustafa Kemal Atatürk'  : ''}
                    </div>
        </div>`;
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
