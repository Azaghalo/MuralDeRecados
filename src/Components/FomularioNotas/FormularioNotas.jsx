import React, { Component } from "react";
import "./style.css";

class FormularioNotas extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.text = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaText(evento) {
    evento.stopPropagation();
    this.text = evento.target.value;
  }

  _criarNovoCard(evento){
    evento.preventDefault();
    evento.stopPropagation();

    if(this.titulo == ""){
      alert("Voce precisa inserir um titulo!");
      return;
    }
    
    this.props.criarCard(this.titulo, this.text);
  }

  limparCards(){
    this.props.limparCards();
  }

  render() {
    return (
      <form className="form-note" onSubmit={this._criarNovoCard.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-note_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-note_input"
          onChange={this._handleMudancaText.bind(this)}
        />
        <div className="form-note_btn_wrapper">
          <button className="form-note_input form-note_submit">
            Criar Nota
          </button>
          <button
            type="button"
            className="form-note_input form-note_clear"
            onClick={this.limparCards.bind(this)}
          >
            Limpar Notas
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioNotas;
