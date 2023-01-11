import React, { useState } from "react";
import "./ContadorHooks.scss";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  // console.log(useState())

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const resetear = () => setContador(0);

  let color = "#fff";
  if (contador >= 1) {
    color = "yellow";
  } else if (contador < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all">
        <h2 className="--text-light">Hooks-useState</h2>
        <h2 className="--text-light">Contador de {props.title}</h2>
        <p
          className="count --my2 --text-md --text-light --fw-bold"
          style={{ color: color }}
        >
          {contador}
        </p>
        <div className="buttons">
          <button className="--btn --btn-danger" onClick={restar}>
            - Subtract
          </button>
          <button className="--btn" onClick={resetear}>
            ! Reset
          </button>
          <button className="--btn --btn-success" onClick={sumar}>
            + Add
          </button>
        </div>
      </div>
    </section>
  );
}

ContadorHooks.defaultProps = {
  title: "clicks"
};
