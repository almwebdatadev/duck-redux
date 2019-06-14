import React, { Component } from 'react';
import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import Button from "../Button/Button";

class Freezer extends Component {

  render() {
    console.log(this.props);
    const flavors = this.props.flavors;
    const freezerFlavors = Object.keys(flavors).map(flavorName =>
      <FreezerFlavor
        key={flavorName}
        flavorName={flavorName}
        onClickRestock={() => this.props.onClickRestock(flavorName)}
        scoops={flavors[flavorName]} />
    )
    return (
      <Panel title={`Freezer (º${this.props.temperature}C)`}>
        <Button label='Add flavor' onClick={this.props.onClickAddFlavor} />
        <br />
        {freezerFlavors}
      </Panel>
    );
  }
}

export default Freezer;


  // import { actions as actionsFreezer } from "../../ducks/freezer";
  // import store from "../../store";
  // import * as FLAVORS from "../../constants/icecreams_flavors";


  // state = {
  //   flavors: store.getState().freezer.icecreams,
  //   temperature: store.getState().freezer.temperature
  // }

  // componentDidMount() {
  //   this.unsuscribe = store.subscribe(() =>
  //     this.setState({
  //       flavors: store.getState().freezer.icecreams,
  //       temperature: store.getState().freezer.temperature
  //     }))
  //   setInterval(() => {
  //     const randomTemp = -Math.round(Math.random() * 10)
  //     store.dispatch(actionsFreezer.updateTemperature(randomTemp))
  //   }, 2000)
  // }

  //en este caso no seria necesario por que siempre esta este comopnente en pantalla
  // componentWillUnmount() {
  //   this.unsuscribe()
  // }

  // handleRestock = (flavorName) => {
  //   const amount = parseInt(window.prompt(`Enter number of scoops to restock ${flavorName}`))
  //   if (!isNaN(amount)){
  //     store.dispatch(actionsFreezer.addIcecream(flavorName, amount))
  //   }
  // }

  // handleClickAddFlavor = () => {
  //   const availableFlavors=Object.keys(FLAVORS)
  //   const flavorToRestock =
  //     window.prompt(`Enter flavor to restock from ${availableFlavors.join(',')}`)
  //     if (FLAVORS[flavorToRestock]){
  //       this.handleRestock(flavorToRestock)
  //     }
  // }

