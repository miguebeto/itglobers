import React, { Component } from "react";

export class EventosEs6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar(e) {
    console.log("sumando");
    this.setState({ value: this.state.value + 1 });
  }
  restar(e) {
    console.log("restando");
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return (
      <>
        <h3>Eventos en ES6</h3>
        <hr />
        <h3>{this.state.value}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </>
    );
  }
}

// Componente que renderiza un botón
// function Boton(props) {
//   return (
// <button onClick={props.myOnClick}>
//   Saludar desde componente hecho boton
// </button>
//   );
// }

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Saludar desde componente hecho boton</button>
);

// Properties Initializer
export class EventosEs7 extends Component {
  state = {
    value: 0
  };

  // Arrow functions
  sumar = (e) => {
    console.log("sumando");
    this.setState({ value: this.state.value + 1 });
  };
  restar = (e) => {
    console.log("restando");
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <>
        <h3>Eventos en ES7</h3>
        <hr />
        <h3>{this.state.value}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </>
    );
  }
}

export class MasSobreEventos extends Component {
  //  Paso de parámetros en eventos
  handleClick = (e, msg) => {
    // Evento sintético
    console.log(e);
    // Evento nativo
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "hola, pasando mensaje desde un evento")
          }
        >
          Saludar
        </button>
        {/* Eventos personalizados */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              "hola, pasando mensaje desde un evento personalizado"
            )
          }
        />
      </div>
    );
  }
}
