import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

import store from "../../store";

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.icecreams
  }
  render() {
    console.log(this.state);
    const flavors = this.state.flavors;
    const freezerFlavors = Object.keys(flavors).map(flavorName =>
      <FreezerFlavor key={flavorName}
        flavorName={flavorName}
        scoops={flavors[flavorName]} />
    )
    return (
      <Panel title="Freezer (°0C)">
        {/* <FreezerFlavor flavorName="Vanilla" scoops={50} /> */}
        {freezerFlavors}
      </Panel>
    );

  }
}

export default Freezer;

