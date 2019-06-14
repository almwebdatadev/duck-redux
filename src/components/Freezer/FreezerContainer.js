import React, { Component } from 'react';
import store from "../../store";
import { actions as actionsFreezer } from "../../ducks/freezer";
import * as FLAVORS from "../../constants/icecreams_flavors";
import Freezer from "../Freezer/Freezer";
import { connect } from 'react-redux';


class FreezerContainer extends Component {
  state = {
    flavors: store.getState().freezer.icecreams,
    temperature: store.getState().freezer.temperature
  }
  componentDidMount() {
    // this.unsuscribe = store.subscribe(() =>
    //   this.setState({
    //     flavors: store.getState().freezer.icecreams,
    //     temperature: store.getState().freezer.temperature
    //   }))
    setInterval(() => {
      const randomTemp = -Math.round(Math.random() * 10)
      // store.dispatch(actionsFreezer.updateTemperature(randomTemp))
      this.props.updateTemperature(randomTemp)
    }, 2000)
  }


  //en este caso no seria necesario por que siempre esta este comopnente en pantalla
  componentWillUnmount() {
    // this.unsuscribe()
  }

  handleRestock = (flavorName) => {
    const amount =
      parseInt(window.prompt(`Enter number of scoops to restock ${flavorName}`))
    if (!isNaN(amount)) {
      // store.dispatch(actionsFreezer.addIcecream(flavorName, amount))
      this.props.addIcecream(flavorName, amount)
    }
  }

  handleClickAddFlavor = () => {
    const availableFlavors = Object.keys(FLAVORS)
    const flavorToRestock =
      window.prompt(`Enter flavor to restock from ${availableFlavors.join(',')}`)
    if (FLAVORS[flavorToRestock]) {
      this.handleRestock(flavorToRestock)
    }
  }

  render() {

    return (

      <Freezer
        flavors={this.props.flavors}
        temperature={this.props.temperature}
        onClickAddFlavor={this.handleClickAddFlavor}
        onClickRestock={this.handleRestock}
      />
    );

  }
}

///cambiar?¿ hay que meternlo dentro de la clase?
const mapStateToProps = state => ({
  flavors: state.freezer.icecreams,
  temperature: state.freezer.temperature
})


const mapDispatchToProps = dispatch => ({
  updateTemperature:
    temperature => dispatch(actionsFreezer.updateTemperature(temperature)),
  addIcecream:
    (flavorName, amount) => dispatch(actionsFreezer.addIcecream(flavorName, amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FreezerContainer);

