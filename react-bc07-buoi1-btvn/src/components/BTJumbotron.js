import React, { Component } from "react";

export default class BTJumbotron extends Component {
  render() {
    return (
        <header classname="jumbotron my-4">
          <h1 classname="display-3">A Warm Welcome!</h1>
          <p classname="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <a classname="btn btn-primary btn-lg" href="#!">
            Call to action!
          </a>
        </header>
    );
  }
}
