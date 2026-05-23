import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Form({ onAddContact }) {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form onSubmit={(e) => {
        alert(`Novo contato adicionado:\n${name}\n${phoneNumber}\n${email}`)
        onAddContact({ name, phoneNumber, email });
        setName('');
        setPhoneNumber('');
        setEmail('');
        e.preventDefault()
      }}>
        <p>
          <label for="inputName">Nome: </label>
          <input
            type="text"
            value={name}
            id="inputName"
            name="name"
            onChange={(e) => { setName(e.target.value) }} required></input>
        </p>

        <p>
          <label for="inputPhone">Telefone: </label>
          <input
            type="number"
            value={phoneNumber}
            id="inputPhone"
            name="phoneNumber"
            onChange={(e) => { setPhoneNumber(e.target.value) }} required></input>
        </p>

        <p>
          <label for="inputEmail">Email: </label>
          <input
            type="text"
            value={email}
            id="inputEmail"
            name="email"
            onChange={(e) => { setEmail(e.target.value) }} required></input>
        </p>

        <button type="submit" id="inputEmail">Adicionar Contato</button>
      </form>
    </div>
  )

}

function List({ contacts, onRemoveContact }) {
  return (
    <div>
      <h2>Contatos:</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.phoneNumber} - {contact.email}
            <button onClick={() => onRemoveContact(contact.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {

  const [contacts, setContacts] = useState([]);


  function handleAddContact(contact) {
    setContacts((current) => [...current, contact]);
  }

  function handleRemoveContact(id) {
    setContacts((current) => current.filter((contact) => contact.id !== id));
  }


  return (
    <div>
      <h1>Lista de Contatos</h1>
      <Form onAddContact={handleAddContact} />
      <List contacts={contacts} onRemoveContact={handleRemoveContact} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);