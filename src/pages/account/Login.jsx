import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './login.css';
import store from '../../store/store';
import { credentialActions } from '../../store/user';
import InputTextRef from '../../components/inputs/input-text/InputTextRef';

const Login = () => {
  const usernameRef = useRef('');
  const passcodeRef = useRef('');
  const navigate = useNavigate();

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

    navigate('/home');
  };

  return (
    <>
      <Link to="/">Home Page</Link>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={(event) => handleLogin(event)}>
          <div className="login-input">
            <InputTextRef
              ref={usernameRef}
              placeholder="Usuário ou E-mail"
              required
            />
          </div>
          <div className="login-input">
            <InputTextRef
              ref={passcodeRef}
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
