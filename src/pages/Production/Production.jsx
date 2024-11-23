import { useState } from "react";
import "./Production.css";

function Production() {
  const [userdate, setUserdate] = useState("");
  const [productionCode, setProductionCode] = useState("");
  const [productionDescription, setProductionDescription] = useState("");
  const [approvalStatus, setApprovalStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Enviando os dados:\n" +
        "Data: " +
        userdate +
        "\n" +
        "Código do Produto: " +
        productionCode +
        "\n" +
        "Descrição do Produto: " +
        productionDescription +
        "\n" +
       +
        "Status de Aprovação: " +
        (approvalStatus ? "Aprovado" : " Não Aprovado")
    );
  };

  const handleClear = () => {
    setUserdate("");
    setProductionCode("");
    setProductionDescription("");
    setApprovalStatus(false);
  };

  const handleCodeChange = (e) => {
    setProductionCode(e.target.value);
    // Lógica para preencher os campos de descrição automaticamente
    if (e.target.value) {
      setProductionDescription("Descrição automática para " + e.target.value);
    }
  };

 
  return (
    <div className="container">
      <h1>SGL</h1>
      <h2>ANÁLISE DE PEDIDOS DE PRODUÇÃO</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionCode}
              placeholder="Produto:"
              onChange={handleCodeChange}
            />
           </label>
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Descrição do Produto:"
              
              onChange={(e) => setProductionDescription(e.target.value)}
            />
           
          </label>
        </div>

        <h2>Aprovação de Pedidos em Aberto:</h2>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
          
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
         
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
          
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
          
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
          
        </div>
        <div className="input-box">
          <label>
            <input
              type="text"
              value={productionDescription}
              placeholder="Aprovação:"
              onChange={(e) => setProductionDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-incluir">Incluir Item</button>
        <button type="button" className="btn btn-excluir" onClick={handleClear}>Excluir Iten</button>
      </form>
    </div>
  );
}

export default Production;
