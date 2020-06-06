import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>
        <main>
          <h1>Seu marketpalce de coletas de resíduos</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente</p>
          <Link to="/create-point">
            <span>
              <FiArrowRightCircle />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;