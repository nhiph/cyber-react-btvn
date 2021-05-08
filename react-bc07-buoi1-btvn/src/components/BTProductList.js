import React, { Component } from "react";
import BTListItem from "./BTListItem";

export default class BTProductList extends Component {
  render() {
    return (
      <div class="row text-center">
        <BTListItem />
        <BTListItem />
        <BTListItem />
        <BTListItem />
      </div>
    );
  }
}
