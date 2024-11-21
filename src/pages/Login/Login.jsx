import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
  const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  /*const handleSubmit = (event) => {
    event.preventDefault();
    
    // Lógica de autenticação (exemplo)
    if (username === 'admin' && password === 'password') 
      {
      history.push('/Login');
      } else
      {
      alert('Usuário ou senha incorretos');
      }
  };*/
   
  const handleSubmit = (event) => {
   event.preventDefault();
   alert("Enviando os dados: "+ username +" - "+ password);
   
   if (username === 'admin' && password === 'password') 
      {
      history.push('/Login');
      } else
      
   alert('Usuário ou senha incorretos');
};

  return (

    <div className="container">
      <form onSubmit={handleSubmit}>
      <h1>PROJETO INTEGRADOR ÚNICA</h1>
      <h2>SOFTWARE GESTÃO DE LOGÍSTICA SGL</h2>
      <div className="input-field">
          <input type="email" 
          placeholder="E-mail"
          required
          onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon"/>
          
        </div>
        <div className="input-field">
          <input type="password" 
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon"/>
        </div>

        <button type="submit">ACESSAR</button>

        <div className="options">
          <label>
            <input type="checkbox" />
            Lembrar
          </label>
          <a href="/reset">Esqueci minha senha</a>
        </div>
        <div className="first-access">
          <a href="/user">Primeiro acesso? Criar usuário</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
