import React, { Component } from "react";
import ListaDeNotas from "./Components/ListaDeNotas/ListaDeNotas";
import FormularioNotas from "./Components/FomularioNotas";
import "./Assets/App.css"
import "./Assets/index.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      cards:[]
    };
  }

  criarCard(titulo, text){
    const novoCard = {titulo, text};
    const novoArrayCards = [...this.state.cards, novoCard]
    const novoState = {
      cards: novoArrayCards,
    };
    this.setState(novoState);
  }

  deleteCard(index){
    const novoArrayCards = this.state.cards;
    novoArrayCards.splice(index, 1);
    const novoState ={
      cards: novoArrayCards,
    }
    this.setState(novoState);
    console.log(novoArrayCards);
    console.log(index);
  }

  limparCards(){
    const novoState ={
      cards: []
    }
    this.setState(novoState);
  }

  render() {
    return (
      <section className="content">
        <FormularioNotas criarCard={this.criarCard.bind(this)} limparCards={this.limparCards.bind(this)}/>
        <ListaDeNotas notes={this.state.cards} deleteCard={this.deleteCard.bind(this)}/>
      </section>
    );
  }
}

export default App;
