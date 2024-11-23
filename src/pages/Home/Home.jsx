import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  return (
    <div className="container">
      <form>
        <h1>PROJETO INTEGRADOR ÚNICA</h1>
        <h2>SISTEMA DE GESTÃO DE LOGÍSTICA</h2>
        <h3>Seja bem vindo ao SLG !</h3>

        <nav>
          <ul>
            <li>
              <Link to="/Login">Sait</Link>
            </li>
            <li>
              <Link to="/Config">Config</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
            <li>
              <Link to="/Reset">Reset</Link>
            </li>
            <li>
              <Link to="/Orders">Orders</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Materials">Materials</Link>
            </li>
            <li>
              <Link to="/Production">Production</Link>
            </li>
          </ul>
        </nav>

      </form>
    </div>
  );
};

export default Home;