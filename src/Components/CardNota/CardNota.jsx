import React, { Component } from "react";
import "./style.css";

class CardNota extends Component {

  constructor(props){
    super(props);
    this.index = props.index;
  }

  deletar(){
    this.props.deleteCard(this.index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_text">{this.props.text}</p>
        <div className="card-nota_delete-btn" onClick={this.deletar.bind(this)}></div>
      </section>
    );
  }
}

export default CardNota;
