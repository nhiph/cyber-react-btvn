import React, { Component } from "react";
import BTContent from "./BTContent";
import BTFooter from "./BTFooter";
import BTHeader from "./BTHeader";

class BaiTapthucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTContent />
        <BTFooter />
      </div>
    );
  }
}

export default BaiTapthucHanhLayout;
