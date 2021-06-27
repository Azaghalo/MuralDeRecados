import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((card, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                titulo={card.titulo}
                text={card.text}
                index={index}
                deleteCard={this.props.deleteCard}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
