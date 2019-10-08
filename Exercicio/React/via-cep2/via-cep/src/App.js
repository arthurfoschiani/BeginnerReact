import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        lista: [
            // {cep: 1, logradouro: "Design", complemento: "a", bairro: "a", localidade: "b", uf: "b"},
            // {cep: 2, logradouro: "Jogos", complemento: "a", bairro: "a", localidade: "b", uf: "b"},
            // {cep: 3, logradouro: "Meetup", complemento: "a", bairro: "a", localidade: "b", uf: "b"}
            {cep:'',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: ''}
        ],
        cepbuscado: ''
    }
  }

  componentDidMount() {
    fetch('https://viacep.com.br/ws/'+this.state.cepbuscado+'/json/')
        .then(response => response.json())
        .then(data => this.setState({lista: data}))
  }

  AtualizarTabela = (event) => {
    event.preventDefault()
    fetch('https://viacep.com.br/ws/'+this.state.cepbuscado+'/json/')
        .then(response => response.json())
        .then(data => this.setState({lista: data}))
        .then(erro => {this.setState({erro: ""})})
        .catch(erro => {this.setState({erro: "CEP inválido"})})
        .catch(this.setState({lista: ""}))
  }

  AtualizarDados = (event) => {
    this.setState({cepbuscado: event.target.value})
  }

  render(){
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <div className="input-group flex-nowrap">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">#</span>
          </div>
          <input type="text" className="form-control" placeholder="CEP" aria-label="Username" aria-describedby="addon-wrapping" onInput={this.AtualizarDados}/>
          <button type="button" class="btn btn-primary btn-sm" onClick={this.AtualizarTabela}>Cadastrar</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Logradouro</th>
              <th scope="col">Complemento</th>
              <th scope="col">Bairro</th>
              <th scope="col">Localidade</th>
              <th scope="col">UF</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row">{this.state.lista.cep}</th>
                <td>{this.state.lista.logradouro}</td>
                <td>{this.state.lista.complemento}</td>
                <td>{this.state.lista.bairro}</td>
                <td>{this.state.lista.localidade}</td>
                <td>{this.state.lista.uf}</td>
              </tr>
          </tbody>
        </table>
          <p className="text__login" style={{color:"red", textAlign: "center", margin: "auto"}}>
              {this.state.erro}
          </p>
      </div>
    );
  }
}

export default App;
