import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './login.css';
import store from '../../store/store';
import { credentialActions } from '../../store/user';

const Login = () => {
  const usernameRef = useRef('');
  const passcodeRef = useRef('');

  const handleLogin = (event) => {
    event.preventDefault();

    const usuario = {
      id: 1,
      usuario: usernameRef.current.value,
      email: 'marcio@augusto.com',
      acesso: ['customer'],
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsIm5hbWUiOiJNYXJjaW8gQXVndXN0byBTY2hsb3NzZXIiLCJlbWFpbCI6Im1hcmNpb0BhdWd1c3RvLmNvbSIsImxvZ2FkbyI6dHJ1ZSwiYWNlc3NvIjpbImN1c3RvbWVyIl0sImlhdCI6MTUxNjIzOTAyMn0.DhXiFUZDXOu8GudKLtEcWBhDF48s9ukfhfL17D8KWFE'
    };

    store.dispatch(credentialActions.add(usuario));
  };

  return (
    <>
      <Link to="/">Home Page</Link>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={(event) => handleLogin(event)}>
          <div className="login-input">
            <label htmlFor="lgusername">Username or Email</label>
            <input type="text" id="lgusername" ref={usernameRef} required />
          </div>
          <div className="login-input">
            <label htmlFor="lgpasscode">Senha</label>
            <input type="text" id="lgpasscode" ref={passcodeRef} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
