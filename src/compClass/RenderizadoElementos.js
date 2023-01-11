import React, { Component } from "react";
import data from "../../helper/data.json";

function DataElements(props) {
  return (
    <li>
      <a href="props.el.web" target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

class RenderizadoELementos extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     season: ["primavera", "verano", "otoño", "invierno"]
  //   };
  // }
  render() {
    console.log(data.framework);
    return (
      <>
        {/* <h2>Renderizado de ELementos</h2>
        <h3>Estaciones del año</h3>
        <ul>
          {this.state.season.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul> */}
        <ul>
          {data.framework.map((el) => {
            return <DataElements key={el.id} el={el} />;
          })}
        </ul>
      </>
    );
  }
}

export default RenderizadoELementos;
