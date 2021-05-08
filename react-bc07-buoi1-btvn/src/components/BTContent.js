import React, { Component } from "react";
import BTJumbotron from "./BTJumbotron";
import BTProductList from "./BTProductList";

export default class BTContent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* Jumbotron Header*/}
            <BTJumbotron />
          {/* Page Features*/}
            <BTProductList />
        </div>
      </div>
    );
  }
}
