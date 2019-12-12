//Importações para a página de login
import React, { useState, useEffect } from 'react';
import { CssLogin } from './styles';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { login } from '../../Services/auth';

//Função padrão de exportação da página
export default function Login({ history }) {
    return (
      //Estrutura (html e css (styled-components))
      <CssLogin>
        <body>
          <div className="divPrincipal">
          <form>
            <div className="titulo">
              <h3>login</h3>
            </div>
            <div className="divForm">
              <input placeholder="email" type="text"></input>
              <input placeholder="senha" type="password"></input>
              <button className="botao" type="submit">
                <h3>></h3>
              </button>
            </div>
          </form>
          </div>
          <Link to="/sessions">
          <h3 className="cadastro">primeira vez?</h3>
          </Link>
        </body>  
      </CssLogin>
    );
}