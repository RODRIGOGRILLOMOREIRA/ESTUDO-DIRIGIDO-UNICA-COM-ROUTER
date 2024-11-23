import { useState } from "react";
import "./User.css";
const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados:" + username + " " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1> SLG </h1>
        <h2> CADASTRO DE USUÁRIO</h2>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>SALVAR</button>

        <div className="signup-link">
          <p>
            Ja tem usuario!
            <a href="a">ENTRE</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default User;
