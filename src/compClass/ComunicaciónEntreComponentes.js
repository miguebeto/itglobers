import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };
  render() {
    return (
      <>
        <h3>Comunicación entre componentes</h3>
        <h4>{this.state.contador}</h4>
        <Hijo
          incrementarContador={this.incrementarContador}
          msj="Este es un mensaje para el hijo 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          msj="Este es un mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo({ incrementarContador, msj }) {
  return (
    <>
      <h3>{msj}</h3>
      <button onClick={incrementarContador}>+</button>
    </>
  );
}
