import React, { Component } from "react";
import "./App.css";
import arrGlasses from "./data/data.js";

class App extends Component {
  state = {
    url: '',
    arrGlasses,
    infos: {
      name: "",
      url: "",
      desc: "",
      price: 0
    }
  };

  tryOnGlass = (img) => {
    console.log(img);
    this.setState({
      url: img.url,
      infos: {
        name: img.name,
        url: img.url,
        desc: img.desc,
        price: img.price
      }
    })
  };

  renderGlasses = () => {
    const images = this.state.arrGlasses.map((img, index) => {
      return (
        <div className="col-4">
          <img
            src={img.url}
            className="img-fluid"
            onClick={() => this.tryOnGlass(img)}
          />
        </div>
      );
    });
    return images;
  };

  render() {

    return (
      <div className="container vglasses py-3">
        <div className="row  justify-content-between">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12">
                <h1 className="mb-2">Virtual Glasses</h1>
              </div>
            </div>
            <div className="row" id="vglassesList">
              {this.renderGlasses()}
            </div>
          </div>
          <div className="col-5 vglasses__right p-0">
            <div className="vglasses__card">
              <div className="mb-2 text-right mt-2 mr-2">
                <button
                  className="btn btn-warning"
                  onclick="removeGlasses(false)"
                >
                  Before
                </button>
                <button
                  className="btn btn-warning"
                  onclick="removeGlasses(true)"
                >
                  After
                </button>
              </div>
              <div className="vglasses__model" id="avatar">
                <img src={this.state.url} id="glass" />
              </div>
              <div id="glassesInfo" style={{display: 'block'}} className="vglasses__info">
                <h5>{this.state.infos.name}</h5>
                <p className="card-text">
                  <span className="btn btn-danger btn-sm mr-2">{this.state.infos.price}</span>
                  <span className="text-success">{this.state.infos.desc}</span>
                </p>
                <p className="card-text">{this.state.infos.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
