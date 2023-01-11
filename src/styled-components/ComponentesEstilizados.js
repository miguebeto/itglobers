import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTrasitionTime = (time) => `all ${time} ease-in-out`;
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    background-color: ${mainColor};
    transition: ${setTrasitionTime("1s")};

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  return (
    <>
      <h2>Componentes estilizados</h2>
      <MyH3>Hola soy un h3 estilizado con style components</MyH3>
    </>
  );
}
