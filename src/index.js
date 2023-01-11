import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import App from "./App";

const Componente = (props) => {
  return <>{props.msg}</>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      texto="Esto es una cadena de texto"
      numero={20}
      booleano={true}
      arreglo={[1, 2, 3]}
      objeto={{ nombre: "miguel", apellido: "blanco" }}
      funcion={(num) => num * num}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente msg="Soy un componente pasado como Prop" />}
    />
  </StrictMode>
);
