import React from 'react';
import ReactDOM from 'react-dom/client';

function CalculdaoraIMC(props) {
  const peso = props.peso;
  const altura = props.altura;
  const imc = peso / (altura * altura);

  const categoria = imc < 18.5 ? 'Abaixo do peso' :
                    imc < 25 ? 'Peso normal' :
                    imc < 30 ? 'Sobrepeso' :
                    'Obesidade';
  
  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <p>Peso: {peso} kg</p>
      <p>Altura: {altura} m</p>
      <p>IMC: {imc.toFixed(2)}</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}

function Usuario(props) {

  const nome = props.nome;
  const sobrenome = props.sobrenome;
  const cpf = props.cpf;
  const telefone = props.telefone;
  const email = props.email;

  return (
    <div>
      <p>Nome: {nome} {sobrenome}</p>
      <p>CPF: {cpf}</p>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Dados dos Usuários</h1>
      <Usuario nome="Erick" sobrenome="Santos" cpf="123.456.789-00" telefone="(11) 98765-4321" email="erick.santos@example.com" />
      <br></br>
      <Usuario nome="Felipe" sobrenome="Basso" cpf="987.654.321-00" telefone="
      (11) 91234-5678" email="felipe.basso@example.com" />
      <br></br>
      <Usuario nome="Mathias" sobrenome="Delipreto" cpf="456.789.123-00" telefone="(11) 99876-5432" email="mathias.delipreto@example.com" />
      <br></br>
      <Usuario nome="Bryan" sobrenome="Luna" cpf="789.123.456-00" telefone="(11) 98765-4321" email="bryan.luna@example.com" />
      <br></br>
      <Usuario nome="Gustavo" sobrenome="Rossi" cpf="321.654.987-00" telefone="(11) 91234-5678" email="gustavo.rossi@example.com" />

      <CalculdaoraIMC peso={70} altura={1.75} />
    </div>    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
