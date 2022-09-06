import React, { Component } from "react";
import Data from "../data";
import {Link} from 'react-router-dom'
export default class Countries extends Component {
  render() {
    const countryList = Data.map((dat) => {
        return (
            <div className="countryCard" key={dat.unMember}>
              <div className="countryCardBody">
              <a href={dat.name.official}><div className="countryCardOffical">{dat.name.official}</div></a>
                <p className="countryCardCommon">{dat.name.common}</p>
              </div>
            </div>
        );
      })
    return (
      <div className="countryList">
       {countryList}
      </div>
    );
  }
}
 
