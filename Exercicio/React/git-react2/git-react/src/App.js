import React, {Component} from 'react';
import './App.css';
import { conditionalExpression } from '@babel/types';

class App extends Component{
  constructor(){
    super();
    this.state = {
      lista: [],
      usuarioachado: ''
    }
  }

  AtualizarTabela = (event) => {
    event.preventDefault()
    fetch('https://api.github.com/users/'+this.state.usuarioachado+'/repos')
        .then(response => response.json())
        .then(data => {
          this.setState({lista: data});
        })        
        .catch(erro => console.log(erro))
  }

  AtualizarDados = (event) => {
    this.setState({usuarioachado: event.target.value})
  }

  render () {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <div className="input-group flex-nowrap">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">#</span>
          </div>
          <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="addon-wrapping" onInput={this.AtualizarDados}/>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.AtualizarTabela}>Buscar</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Data de criação</th>
              <th scope="col">Tamanho</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map(element => {
                console.log(element)
                  return (
                    <tr key={element.id}>
                      <th scope="row">{element.id}</th>
                      <td>{element.name}</td>
                      <td>{element.description}</td>
                      <td>{element.created_at}</td>
                      <td>{element.size}</td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
