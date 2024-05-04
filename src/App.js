
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Apellido Completo:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Correo electronico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Numero de telefono:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Tipo usuario:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Asistente</option>
            <option value="male">Expositor</option>
            <option value="female">Voluntario</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Preguntas u Comentarios:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
          Confirmar asistencia
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
