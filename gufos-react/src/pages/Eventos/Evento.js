import React, {Component} from 'react';
import Rodape from '../../components/Rodape/Rodope';
import Logo from '../../assets/img/icon-login.png';
import Axios from 'axios';
import Titulo from '../../components/Titulo/Titulo'

export default class Eventos extends Component{

    constructor() {
        super();
        this.state = {
            lista: [],
            listaCategorias: [],
            idEvento: '',
            descricao: '',
            titulo: '',
            dataEvento: '',
            localização: '',
            ativo: '',
            tipo: ''
        }
    }

    componentDidMount () {
        Axios.get('http://localhost:5000/api/eventos')
        .then(data => {
            this.setState({lista: data.data});
        })
        .catch(erro => {
            console.log(erro)
        });

        Axios.get('http://localhost:5000/api/categorias')
            .then(data =>{
                this.setState({listaCategorias: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    
    adicionarItem = (event) => {
        event.preventDefault();
        console.log(this.lista.state);
        Axios.post('http://localhost:5000/api/eventos')
        .then(this.componentDidMount)
        .catch(error => console.log(error))
    }

    atualizarEventoTitulo = (event) =>{
        this.setState({titulo: event.target.value})
        console.log(this.state);
    }

    atualizarEventoDescricao = (event) =>{
        this.setState({descricao: event.target.value})
        console.log(this.state);
    }

    atualizarEventoData = (event) =>{
        this.setState({dataEvento: event.target.value})
        console.log(this.state);
    }

    atualizarEventoLocal = (event) =>{
        this.setState({localização: event.target.value})
        console.log(this.state);
    }

    atualizarEventoAtivo = (event) =>{
        this.setState({ativo: event.target.value})
        console.log(this.state);
    }

    atualizarEventoTipo = (event) =>{
        this.setState({tipo: event.target.value})
        console.log(this.state);
    }

    atualizarDescricao = (event) =>{
        this.setState({descricao: event.target.value})
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={Logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <Titulo titulo="Eventos"/>
                    {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
                    <div className="container" id="conteudoPrincipal-lista">

                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Evento</th>
                            <th>Data</th>
                            <th>Acesso Livre</th>
                            <th>Tipo do Evento</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {
                                this.state.lista.map(Element => {
                                    return(
                                        <tr>
                                            <td>{Element.idEvento}</td>
                                            <td>{Element.titulo}</td>
                                            <td>{Element.dataEvento}</td>
                                            <td>{Element.ativo ? 'Ativo' : 'Inativo'}</td>
                                            <td>{Element.idCategoriaNavigation.nome}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>

                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                        <div className="container">

                        <input type="text" id="evento__titulo" placeholder="título do evento" value={this.state.titulo} onInput={this.atualizarEventoTitulo}/>
                        <input type="text" id="evento__localizacao" placeholder="localização" value={this.state.localização} onInput={this.atualizarEventoLocal}/>
                        <input type="text" id="evento__data" placeholder="dd/MM/yyyy" value={this.state.dataEvento} onInput={this.atualizarEventoData}/>
                        <select id="option__acessolivre" value={this.state.ativo} onInput={this.atualizarEventoAtivo}>
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                        <select id="option__tipoevento" value={this.state.tipo} onInput={this.atualizarEventoTipo}>
                        <option value="0" disabled>Categoria do Evento</option>
                            {this.state.listaCategorias.map(element =>{
                                return(
                                    <option value={element.idCategoria}>{element.nome}</option>
                                )
                            })}
                        </select>
                        <textarea rows="3" cols="50" placeholder="descrição do evento" id="evento__descricao"></textarea>

                        </div>
                        <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" onClick={this.adicionarItem}>Cadastrar</button>
                    </div>
                    </section>
                </main>
                <Rodape/>
            </div>
        );
    }
}

// export default Eventos;