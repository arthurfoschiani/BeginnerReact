import React, {Component} from 'react';
import Logo from '../../assets/img/icon-login.png';
import Axios from 'axios'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    atualizaEstadoSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    efetuarlogin = (event) => {
        event.preventDefault();
        
        Axios.post('http://localhost:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200){
                    console.log(response.data.token)
                    localStorage.setItem("usuario-gufos", response.data.token)
                    this.props.history.push('/categoria');
                } else {
                    console.log('Incorreto')
                }
            })
            .catch(erro => {this.setState({erro: "Usuário ou senha inválidos"});
            console.log(erro);    
        });
    }

    render () {
        return(
            <section className="container flex">
            <div className="img__login"><div className="img__overlay"></div></div>

            <div className="item__login">
                <div className="row">
                <div className="item">
                    <img src={Logo} className="icone__login" />
                </div>
                <div className="item" id="item__title">
                    <p className="text__login" id="item__description">
                    Bem-vindo! Faça login para acessar sua conta.
                    </p>
                </div>
                <form onSubmit={this.efetuarlogin}>
                    <div className="item">
                    <input
                    className="input__login"
                    placeholder="username"
                    onInput={this.atualizaEstadoEmail}
                    type="text"
                    name="username"
                    id="login__email"
                    />
                    </div>
                    <div className="item">
                    <input
                        className="input__login"
                        placeholder="password"
                        onInput={this.atualizaEstadoSenha}
                        type="password"
                        name="password"
                        id="login__password"
                        />
                    <p className="text__login" style={{color:"red", textAlign: "center"}}>
                        {this.state.erro}
                    </p>
                    </div>
                    <div className="item">
                    <button className="btn btn__login" id="btn__login">
                        Login
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
        )
    }
}

export default Login;