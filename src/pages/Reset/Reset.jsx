import { useState } from "react";
import "./Reset.css";

const Reset = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para trocar a senha do usuário
    alert(`Senha de ${username} foi trocada com sucesso!`);
  };

  return (
    <div className="container">
      <h1>SLG</h1>
      <h2>REDEFINIR SENHA DE USUÁRIO</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}/>
        </label>
        </div>
        <div className="input-field">
        <label>
          <input
            type="password"
            placeholder="Senha Atual"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        </div>
        <div className="input-field">
        <label>
          <input
             type="password"
            placeholder="Nova Senha"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        </div>
       
        <button type="submit">SALVAR</button>
      </form>
     
    </div>
  );
};

export default Reset;
