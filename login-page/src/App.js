import React, {forwardRef, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Password', pass);
    axios.post('http://localhost:5000/login',formData)
    .then( response => alert(response.data.message))
    .catch(error => alert(error.response.data.message));
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
          </label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>
            Password:
          </label>
          <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
