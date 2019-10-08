import React, {Component} from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      listaDeCarro: []
    }
  }

  componentDidMount () {
    Axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
        .then(data =>{
            this.setState({listaDeCarro: data.data});
        })
        .catch(erro => {
            console.log(erro);
        });
}

  render () {
    return (
      <div class="input-group">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
          <option selected>Choose...</option>
          {this.state.listaDeCarro.map(element =>{
              return(
                  <option value={element.codigo}>{element.nome}</option>
              )
          })}
        </select>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Carro</th>
              <th scope="col">Código</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
