import React, { Component } from "react";
import Tour from "../Tour";
import { tourData } from "../../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData
  };
  render() {
    console.log(this.state.tours);
    return (
      <div>
        Hello from Tourlist
        <Tour />
      </div>
    );
  }
}
