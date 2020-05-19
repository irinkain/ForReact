import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { withRouter } from 'react-router-dom';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  // console.log(props);

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('accessToken', Math.random());
    window.location = history.location.state.from.pathname;
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
export default withRouter(Login);
