import React, { Component } from "react";

import AjaxApis from "./compClass/AjaxApis";
import AjaxHooks from "./fetchPokemon/AjaxHooks";
import CicloVida from "./compClass/CicloVida";
import ComponentesEstilizados from "./styled-components/ComponentesEstilizados";
import Padre from "./compClass/ComunicaciónEntreComponentes";
import ContadorHooks from "./fetchPokemon/ContadorHooks";
import Estilos from "./modStyles/Estilos";
import { EventosEs6, EventosEs7, MasSobreEventos } from "./compClass/Eventos";
import Formularios from "./forms/Formularios";
import HooksPersonalizados from "./fetchPokemon/HooksPersonalizados";
import Prueba from "./fetchGiphy/Prueba";
import Referencias from "./useRef/Referencias";
import RelojHooks from "./interval/RelojHooks";
import RenderizadoCondicional from "./compClass/RenderizadoCondicional";
import RenderizadoELementos from "./compClass/RenderizadoElementos";
import ScrollHooks from "./useEffect/ScrollHooks";
import { Post } from "./fetchPostJsonPlace/Post";
import { Form } from "./forms/Form";

import "./forms/Form.scss";
import { UseContext } from "./useContext5/UseContext";
import { PresentacionCard } from "./presentationCartApp/PresentationCart";
import { RandomColor } from "./randomColorApp/RandomColor";
import { Faq } from "./faqs/Faq";
import { Profile } from "./profileApp/Profile";
import { Jokes } from "./jokesApp/Jokes";
import { Login } from "./forms/Login";
import { FetchGiphy } from "./fetchGiphy/FetchGiphy";
import { TodoApp } from "./reducer/TodoApp";
import { Father } from "./tarea-memo/Father";
import { Memorize } from "./memos/Memorize";
import { MemoHook } from "./memos/MemoHook";
import { CallBackHook } from "./memos/CallbackHook";
import { Layout } from "./useLayoutEffect/Layout";
import { FocusScreen } from "./useRef/FocusScreen";
import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
import { SimpleForm } from "./useEffect/SimpleForm";
import { Message } from "./useEffect/Message";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";
import { CounterApp } from "./useState/CounterApp";
import { GifExpertApp } from "./gif-expert-app/GifExpertApp";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.texto}
        <br />
        {this.props.booleano ? "true" : "false"}
        <br />
        {this.props.arreglo.join(", ")}
        <br />
        {this.props.objeto.nombre}
        {this.props.objeto.apellido}
        <br />
        {this.props.funcion(4)}
        <br />
        {this.props.elementoReact}
        <br />
        {this.props.componenteReact}
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoELementos />
        <hr />
        <EventosEs6 />
        <hr />
        <EventosEs7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks title="titulos" />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
        <hr />
        <Referencias />
        <hr />
        <Formularios />
        <br />
        <Prueba />
        <hr />
        <FetchGiphy />
        <hr />
        <Estilos />
        <hr />
        <ComponentesEstilizados />
        <hr />
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <Post />
        <hr />
        <Form />
        <hr />
        <UseContext />
        <hr />
        <CounterApp />
        <hr />
        <CounterWithCustomHook />
        <hr />
        <FormWithCustomHook />
        <hr />
        <Message />
        <hr />
        <SimpleForm />
        <hr />
        <MultipleCustomHooks />
        <hr />
        <FocusScreen />
        <hr />
        <Layout />
        <hr />
        <CallBackHook />
        <hr />
        <MemoHook />
        <hr />
        <Memorize />
        <hr />
        <Father />
        <hr />
        <TodoApp />
        <hr />
        <GifExpertApp />
        <hr />
        <PresentacionCard />
        <hr />
        <RandomColor />
        <hr />
        <Faq />
        <hr />
        <Profile />
        <hr />
        <Jokes />
        <hr />
        <Login />
      </div>
    );
  }
}

export default App;
